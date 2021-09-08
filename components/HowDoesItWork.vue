<template>
  <div
    class="
      max-w-screen-xl
      mx-auto
      pt-16
      px-4
      sm:px-6
      lg:pt-24 lg:px-8 lg:grid lg:grid-cols-3 lg:col-gap-8
    "
  >
    <div>
      <h2
        class="
          text-base
          leading-6
          text-red
          font-semibold
          tracking-wide
          uppercase
          text-center
          lg:text-left
        "
      >
        How does it work
      </h2>
      <p
        class="
          mt-2
          text-3xl
          leading-9
          font-extrabold
          text-gray-900 text-center
          lg:text-left
        "
      >
        Focus on building products rather than infrastructure
      </p>
      <p class="mt-4 text-lg leading-7 text-gray-500">
        Every single company that wants to go to production on the public cloud
        needs to solve the same set of problems: Networking, Orchestration, Data
        Storage, Secret Management, Monitoring, and more. Instead of building it
        all from scratch, we help you to implement generic infrastructure so you
        can focus on innovating.
      </p>
    </div>
    <div class="mt-12 lg:mt-0 lg:col-span-2">
      <dl
        class="
          space-y-10
          sm:space-y-0
          sm:grid
          sm:grid-cols-2
          sm:grid-rows-3
          sm:grid-flow-col
          sm:col-gap-6
          sm:row-gap-10
          lg:col-gap-8
        "
      >
        <div class="flex space-x-3">
          <svg
            class="flex-shrink-0 h-6 w-6 text-green-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <div class="space-y-2">
            <dt class="text-lg leading-6 font-medium text-gray-900">
              You need to go to production on AWS
            </dt>
            <dd class="flex space-x-3 lg:py-0 lg:pb-4">
              <span class="text-base leading-6 text-gray-500">
                You're launching a new product, or you need to migrate your
                existing infrastructure to the cloud. You are required to
                implement networking, databases, continuous integration &
                deployment, monitoring & logging, queues, data pipelines, and
                orchestration, but you don't have the time or expertise to
                implement it all from scratch.
              </span>
            </dd>
          </div>
        </div>
        <div class="flex space-x-3">
          <svg
            class="flex-shrink-0 h-6 w-6 text-green-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <div class="space-y-2">
            <dt class="text-lg leading-6 font-medium text-gray-900">
              Start building on top of our open-source modules
            </dt>
            <dd class="flex space-x-3 lg:py-0 lg:pb-4">
              <span class="text-base leading-6 text-gray-500"
                >You planned your project and discovered all the requirements.
                It's time to start building. Check out our open-source modules
                on
                <a
                  href="https://github.com/mineiros-io"
                  target="_blank"
                  rel="noopener noreferrer"
                  >GitHub</a
                >
                or the
                <a
                  href="https://registry.terraform.io/namespaces/mineiros-io"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Terraform Registry</a
                >
                and implement services such as a
                <a
                  href="https://github.com/mineiros-io/terraform-aws-vpc"
                  target="_blank"
                  rel="noopener noreferrer"
                  >VPC</a
                >
                or an
                <a
                  href="https://github.com/mineiros-io/terraform-aws-s3-bucket"
                  target="_blank"
                  rel="noopener noreferrer"
                  >S3 bucket</a
                >
                right away.
              </span>
            </dd>
          </div>
        </div>
        <div class="flex space-x-3">
          <svg
            class="flex-shrink-0 h-6 w-6 text-green-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <div class="space-y-2">
            <dt class="text-lg leading-6 font-medium text-gray-900">
              Join our community
            </dt>
            <dd class="flex space-x-3">
              <span class="text-base leading-6 text-gray-500">
                Need help on DevOps, SRE, and Cloud specific topics?
                <a target="_blank" href="https://www.mineiros.io/slack"
                  >Join our free slack-community</a
                >. Don't hesitate to ask any questions. We are here to
                help!</span
              >
            </dd>
          </div>
        </div>
        <div class="flex space-x-3">
          <svg
            class="flex-shrink-0 h-6 w-6 text-green-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <div class="space-y-2">
            <dt class="text-lg leading-6 font-medium text-gray-900">
              Get access to our end-to-end architectures
            </dt>
            <dd class="flex space-x-3">
              <span class="text-base leading-6 text-gray-500"
                >Are you interested in even saving even more time? We are
                offering complete end-to-end architectures such as Kubernetes,
                Compute, Serverless, Data Pipelines, and more. Talk to us and
                get an offer right away.
              </span>
            </dd>
          </div>
        </div>
        <div class="flex space-x-3">
          <svg
            class="flex-shrink-0 h-6 w-6 text-green-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <div class="space-y-2">
            <dt class="text-lg leading-6 font-medium text-gray-900">
              Best Practices & Compliance
            </dt>
            <dd class="flex space-x-3">
              <span class="text-base leading-6 text-gray-500"
                >Are you working in a regulated industry such as Fintech or
                Healthcare? We help you to launch infrastructure that is
                compliant with the CIS AWS Foundations Benchmark recommendations
                and others such as HIPAA or PCI DSS.
              </span>
            </dd>
          </div>
        </div>
        <div class="flex space-x-3">
          <svg
            class="flex-shrink-0 h-6 w-6 text-green-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <div class="space-y-2">
            <dt class="text-lg leading-6 font-medium text-gray-900">
              Support & Training
            </dt>
            <dd class="flex space-x-3 lg:border-t-0 lg:py-0 lg:pb-4">
              <span class="text-base leading-6 text-gray-500">
                We are offering paid support and training for all our modules,
                Terraform, and all DevOps, SRE, and Cloud related topics.
              </span>
            </dd>
          </div>
        </div>
      </dl>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
