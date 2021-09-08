---
title: The Ultimate Guide on How to Write Terraform Modules — Part 1 Building a Foundation
description: An opinionated view on how to write awesome Terraform modules that follow best practices.
img: article-cover.png
alt: my first blog post
readingTime: 8
created: 1588086123000

author:
  name: Marius Tolzmann
  img: mariustolzmann_blog.jpg
---

This is an opinionated view on how to write awesome Terraform modules that
follow best practices as defined in ["Creating Modules"](https://www.terraform.io/docs/modules/index.html)
and introduce new best practices that we follow when writing new modules.

As we are making heavy use of latest Terraform features the minimum version of Terraform that
should be used is v0.12.20 [Jan 22, 2020] as this version introduces support
for the functions [try()](https://www.terraform.io/docs/configuration/functions/try.html) and [can()](https://www.terraform.io/docs/configuration/functions/can.html) and also includes support for resource-level [for_each](https://www.terraform.io/docs/configuration/expressions.html)

(introduced in v0.12.6 and fully functional since v0.12.9 [Sep 17 2019]).
All assumptions and issues mentioned are based on the latest Terraform version as of writing
this article is v0.12.24 [Mar 19, 2020].

## Table of Contents of Part 1

- [Table of Contents of Part 1](#table-of-contents-of-part-1)
- [Basic Module Structure Recap](#basic-module-structure-recap)
- [Introducing `module_depends_on` Attribute](#introducing-module_depends_on-attribute)
- [Introducing `module_enabled` Attribute](#introducing-module_enabled-attribute)
- [Conclusion and outlook](#conclusion-and-outlook)
- [In the next Parts of this series](#in-the-next-parts-of-this-series)
- [We are here to share our knowledge](#we-are-here-to-share-our-knowledge)

## Basic Module Structure Recap

When creating new modules the general best practices as described in Hashicorps official
Terraform documentation in the [creating modules](https://www.terraform.io/docs/modules/index.html)
section should be followed. The basics are not covered here again, as we think,
repeating the content in different words will not result in a better version.
Also, the use of submodules will not be covered again. Everything explained in the
following sections applies to submodules as well.

A general terraform module structure should have the following files:

- Input variables should be defined in `variables.tf`
- Resources and Data sources should be defined in `main.tf`
- Output values should be defined in `outputs.tf` (we will cover details in Part 2 of this series)
- Dependencies on a specific version of terraform and all used providers should be
  maintained in `versions.tf`
- Documentation is key and every module should have a `README.md` describing
  the general usage, input variables, and outputs

For running examples in this article, we created a module that follows those best practices.
The module is named
[terraform-null-resource](https://github.com/mineiros-io/article-examples/tree/master/terraform/modules/terraform-null-resource)
and can be found
[here](https://github.com/mineiros-io/article-examples/tree/master/terraform/modules/terraform-null-resource).

## Introducing `module_depends_on` Attribute

The current version of Terraform does not support the `depends_on` attribute for
modules. The `depends_on` attribute in resources should be used for hidden dependencies that
terraform is not able to spot based on direct usage of references between resources.

In some cases, a `depends_on` hint would be useful also in more complex modules. To work around
the limitations we introduced a `module_depends_on` attribute in modules that enables
resources inside the module to explicitly depend on external resources outside of the module.

Without this feature, internal and external resources will be created in parallel and results
might be random and subject to race conditions in rare cases.

The implementation of this workaround is straight-forward and can be introduced in existing
modules without a breaking change.

1. [Create a variable named `module_depends_on`](#create-a-variable-named-module_depends_on)
1. [Add or extend a `depends_on` attribute for all resources in the module](#add-or-extend-a-depends_on-attribute-for-all-resources-in-the-module)

### Create a variable named `module_depends_on`

Add a new variable named `module_depends_on` to the module's `variables.tf` file.
The type of the variable is set to `any` to mimic the `depends_on` terraform feature
as close as possible, use a list of resources. The default value of this variable should be an empty list stating that
no external dependencies exist.

```hcl
variable "module_depends_on" {
  type        = any
  description = "(optional) A list of external resources the module depends_on. Default is []."
  default     = []
}
```

### Add or extend a `depends_on` attribute for all resources in the module

The easiest way to make sure the expected results are achieved is to make all module resources
depend on the external resources. But as this will reduce parallelism due to not satisfying dependencies
you might want to consider just adding a `depends_on` attribute to some resources.

Terraforms HCL interpolation algorithms for variables do not require any fancy dependency definition.
It is sufficient to let the resources just depend on the variable itself.
See an example of a `null` resource on how to implement this:

```hcl
resource "null_resource" "label" {
  ...omitted...

  depends_on = [
    var.module_depends_on
  ]
}
```

### See `module_depends_on` in action

We've created a test module ([terraform-null-resource](https://github.com/mineiros-io/article-examples/tree/master/terraform/modules/terraform-null-resource))
and an
[example to show the `module_depends_on`](https://github.com/mineiros-io/article-examples/tree/master/terraform/examples/module_depends_on)
in action. The example will create a bunch of `null_resource` resources.

```hcl
# ------------------------------------------------------------------------------
# Case 1:
# Default module usage without hidden external dependencies
# ------------------------------------------------------------------------------

# ------------------------------------------------------------------------------
# Resources in this module will be created/destroyed as soon as possible
# ------------------------------------------------------------------------------
module "has-no-dependency" {
  source  = "github.com/mineiros-io/article-examples/terraform/modules/terraform-null-resource"

  string = "ASAP!"
}

# ------------------------------------------------------------------------------
# This resource will be created/destroyed as soon as possible
# ------------------------------------------------------------------------------
resource "null_resource" "is-no-dependency" {}

# ------------------------------------------------------------------------------
# Case 2:
# Make use of module_depends_on to define hidden external dependencies
# ------------------------------------------------------------------------------

# ------------------------------------------------------------------------------
# Apply: Resources in this module will be created after the creation of the
# null_resource.is-external-dependency is completed.
#
# Destroy: Resources in this module will be destroyed before the destruction of the
# null_resource.is-external-dependency is started.
# ------------------------------------------------------------------------------
module "has-external-dependency" {
  source  = "github.com/mineiros-io/article-examples/terraform/modules/terraform-null-resource"

  string = "Let's wait!"

  module_depends_on = [
    null_resource.is-external-dependency
  ]
}

# ------------------------------------------------------------------------------
# Apply: This resource will be created before the creation of the resources
# module.has-external-dependency.* is started
#
# Destroy: Destruction of this resource will be deferred after all
# module.has-external-dependency.* resources have been destroyed completely
# ------------------------------------------------------------------------------
resource "null_resource" "is-external-dependency" {}
```

This sets up a dependency on `null_resource.is-external-dependency` for
`module.has-external-dependency`.
So resources within the module will be created after `null_resource.is-external-dependency`. In this case
`module.has-external-dependency.null_resource.single[0]` will be created last and
`null_resource.is-external-dependency` will be destroyed last.

To try this out repeat the following steps to clone and initialize the example:

```shell
git clone https://github.com/mineiros-io/article-examples.git
cd article-examples/terraform/examples/module_depends_on
terraform init
```

Now apply the module and destroy it afterward. The resources that will be created
are null_resource resources and not real infrastructure so not costs will be generated.
The used backend will be Terraform's [local backend](https://www.terraform.io/docs/backends/types/local.html).

```shell
$ terraform apply -auto-approve
module.has-no-dependency.null_resource.single[0]: Creating...
null_resource.is-external-dependency: Creating...
null_resource.is-no-dependency: Creating...
null_resource.is-external-dependency: Creation complete after 0s [id=2158780084618493749]
null_resource.is-no-dependency: Creation complete after 0s [id=1313529758799204548]
module.has-no-dependency.null_resource.single[0]: Creation complete after 0s [id=933328012311274445]
module.has-external-dependency.null_resource.single[0]: Creating...
module.has-external-dependency.null_resource.single[0]: Creation complete after 0s [id=3613129016092343865]

Apply complete! Resources: 4 added, 0 changed, 0 destroyed.

$ terraform destroy -refresh=false -auto-approve
null_resource.is-no-dependency: Destroying... [id=1313529758799204548]
module.has-external-dependency.null_resource.single[0]: Destroying... [id=3613129016092343865]
module.has-external-dependency.null_resource.single[0]: Destruction complete after 0s
module.has-no-dependency.null_resource.single[0]: Destroying... [id=933328012311274445]
module.has-no-dependency.null_resource.single[0]: Destruction complete after 0s
null_resource.is-no-dependency: Destruction complete after 0s
null_resource.is-external-dependency: Destroying... [id=2158780084618493749]
null_resource.is-external-dependency: Destruction complete after 0s

Destroy complete! Resources: 4 destroyed.
```

In the protocol above you can see how all resources are created and destroyed
as soon as possible and in parallel but only the setup dependency is deferred to the end.

## Introducing `module_enabled` Attribute

At the time of writing, there aren't any existing workarounds for the missing `count` or `for_each` support.
If you only like to trigger a module to be active or inactive based on the evaluation of
an expression we recommend you implement a variable e.g. `module_enabled` to trigger the desired behavior.
Once `module_enabled` is set to false no resources in the module should be created.
Some module providers implement this with different naming like `create` or `enabled` but we decided
to prefix this so conflicts are less likely.

### Implementing `module_enabled`

So how would the implementation of `module_enabled` look like? Every resource within a module
should either implement `count` or `for_each` depending on the value of `var.module_enabled`.

To implement the `module_enabled` feature some simple changes to the base example need to be made:

1. [Add a variable `module_enabled` that defaults to `true`](#add-a-variable-module_enabled-that-defaults-to-true)
1. [Change all resources to depend on the state of `var.module_enabled`](#change-all-resources-to-depend-on-the-state-of-varmodule_enabled)
1. [Adjust outputs](#adjust-outputs)

#### Add a variable `module_enabled` that defaults to `true`

```hcl
variable "module_enabled" {
  type        = bool
  description = "(optional) Whether to create resources within the module or not. Default is true."
  default     = true
}
```

#### Change all resources to depend on the state of `var.module_enabled`

**WARNING:** for single resources that do not use `count` or `for_each` this will add
a `count` of either 1 or 0.
If this is an already exiting and published module this  will introduce a major
breaking change as resources will be destroyed and recreated under a new name:
In the given example `module.somename.null_resource.single` will be destroyed
and `module.somename.null_resource.single[0]` will be created.

```hcl
resource "null_resource" "single" {
  count = var.module_enabled ? 1 : 0 # ATTENTION: BREAKING CHANGE
}

resource "null_resource" "count" {
  count = var.module_enabled ? length(var.examplelist) : 0
}

resource "null_resource" "for_each" {
  for_each = var.module_enabled ? toset(var.examplelist) : []
}
```

#### Adjust Outputs

For the introduced breaking change on single resources, you need to adjust the outputs also.
In addition to that, we recommend exporting the final value of `module_enabled`.

```hcl
output "module_enabled" {
  description = "Whether the module is enabled or not."
  value       = var.module_enabled
}

output "single" {
  description = "The single null_resource object."
  value       = try(null_resource.single[0], {})
}
```

# See `module_enabled` in action

We created a test module ([terraform-null-resource](https://github.com/mineiros-io/article-examples/tree/master/terraform/modules/terraform-null-resource))
and an
[example to show the `module_enabled`](https://github.com/mineiros-io/article-examples/tree/master/terraform/examples/module_enabled)
in action. The example will create a bunch of `null_resource` resources.

```hcl
# ------------------------------------------------------------------------------
# The resources in this module will be created.
# ------------------------------------------------------------------------------
module "hello-world" {
  source  = "github.com/mineiros-io/article-examples/terraform/modules/terraform-null-resource"

  string          = "Hello World!"
  list_of_strings = ["hello", "world!"]
}

# ------------------------------------------------------------------------------
# No resources in this module will be created
# ------------------------------------------------------------------------------
module "the-cake-is-a-lie" {
  source  = "github.com/mineiros-io/article-examples/terraform/modules/terraform-null-resource"

  module_enabled = false

  string          = "Hello Portal!"
  list_of_strings = ["hello", "portal!"]
}
```

To try this out repeat the following steps to clone and initialize the example

```shell
git clone https://github.com/mineiros-io/article-examples.git
cd article-examples/terraform/examples/module_enabled
terraform init
```

Next, we run `terraform apply` on the module. The resources that will be created
are of the type [null_resource](https://www.terraform.io/docs/providers/null/resource.html). Since null resources won't deploy any real infrastructure components, no costs will be caused.
The backend used will be Terraform's [local backend](https://www.terraform.io/docs/backends/types/local.html).

```shell
$ terraform apply -auto-approve
module.hello-world.null_resource.count[1]: Creating...
module.hello-world.null_resource.single[0]: Creating...
module.hello-world.null_resource.for_each["world!"]: Creating...
module.hello-world.null_resource.for_each["hello"]: Creating...
module.hello-world.null_resource.single[0]: Creation complete after 0s [id=30127531696241687]
module.hello-world.null_resource.count[0]: Creating...
module.hello-world.null_resource.count[1]: Creation complete after 0s [id=8363602364283639683]
module.hello-world.null_resource.for_each["hello"]: Creation complete after 0s [id=3274290552939669927]
module.hello-world.null_resource.for_each["world!"]: Creation complete after 0s [id=57837020342794834]
module.hello-world.null_resource.count[0]: Creation complete after 0s [id=7157558843500998853]

Apply complete! Resources: 5 added, 0 changed, 0 destroyed.
```

In the protocol above you can see that Terraform creates the resources that are associated with the enabled module only.

## Conclusion and outlook

Terraform has some limitations as of today. Introducing `module_depends_on` and
`module_enabled` can easily work around these limitations.
When creating new modules we recommend implementing those features so that users
of the module can enable/disable modules programmatically for specific environments.
Also to avoid race conditions when creating resources in parallel and having a hidden
dependency on external resources.

### Future of `module_depends_on`

Future versions of Terraform will most likely include `depends_on` for modules,
which will make the full module and thus all resources in the module depend on
external resource and deffer internal resource creation after the depending
resources are created.

But even if native support for `depends_on` will be available the `module_depends_on`
approach might be able to deliver a more fine-grained dependency definition by
allowing to only make some resources in a module depend on external
resources and not all of them.

### Future of `module_enabled`

Once Terraform implements `count` support for modules, the `module_enabled` feature will
not be needed for new modules anymore. Existing modules might need to keep the
`module_enabled` implementation available because adding a count to modules will rename
the resource in the state file and trigger a destroy/create action on the resources in the module
(e.g.  the `module.has-external-dependency.null_resource.single[0]` will
then be called `module.has-external-dependency[0].null_resource.single[0]` when
adding `count = 1`).

## In the next Parts of this series

### What Part 2 of this series will cover - non-tech best practices

1. What kind of module do you want to write?
1. Rethinking module outputs

### What Part 3 of this series will cover - improving the state

1. Why you should use `for_each` instead of `count` in resources?
1. Computed vs. Non-Computed Variables

### What Part 4 of this series will cover - deep tech issue workarounds

1. How to work around HCLs limitations and existing issues

## We are here to share our knowledge

If you need help or more information, don’t hesitate to comment or just send us
an email at hello@mineiros.io.
