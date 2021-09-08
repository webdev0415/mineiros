<template>
  <div class="py-20 bg-gray-50 what-we-do">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-left">
        <p
          class="
            text-base
            leading-6
            text-red
            font-semibold
            tracking-wide
            uppercase
            ubuntu-500
          "
        >
          What We Do
        </p>
        <h2
          class="
            mt-5
            text-3xl
            leading-8
            font-extrabold
            tracking-tight
            text-gray-900
            sm:text-4xl sm:leading-10
            secondary-color-dark
            font-size-60
            line-height-62
            ubuntu-700
          "
        >
          We build and manage <span class="text-red">infrastructure</span> so
          your team can focus on your product
        </h2>
      </div>

      <div class="mt-20">
        <ul class="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <li>
            <div class="block">
              <div class="flex-shrink-0">
                <div class="feature-icon bg-red">
                  <img src="~/assets/img/what-we-do/cloud.png" />
                </div>
              </div>
              <div class="mt-4">
                <h4 class="feature-headline">Cloud Migration</h4>
                <p class="feature-description">
                  We analyze existing applications as well as structure, and
                  delivery processes. We create assessments of source and target
                  clouds (efficiency, running costs, migration costs, etc.) and
                  design, plan and implement complex architectures, and
                  processes.
                </p>
              </div>
            </div>
          </li>
          <li class="mt-10 md:mt-0">
            <div class="block">
              <div class="flex-shrink-0">
                <div class="feature-icon bg-red">
                  <img src="~/assets/img/what-we-do/open-source.png" />
                </div>
              </div>
              <div class="mt-4">
                <h4 class="feature-headline">Open-Source</h4>
                <p class="feature-description">
                  We love open-source and continuously develop and open-source
                  products that support development teams to create better
                  software. All our solutions are available on
                  <a
                    href="https://www.github.com/mineiros-io"
                    target="_blank"
                    class="underline"
                    rel="noopener noreferrer"
                    >GitHub</a
                  >.
                </p>
              </div>
            </div>
          </li>
          <li class="mt-10 md:mt-0">
            <div class="block">
              <div class="flex-shrink-0">
                <div class="feature-icon bg-red">
                  <img src="~/assets/img/what-we-do/compliance.png" />
                </div>
              </div>
              <div class="mt-4">
                <h4 class="feature-headline">Compliance</h4>
                <p class="feature-description">
                  We help our customers to achieve and maintain compliance with
                  the CIS AWS Foundations Benchmark recommendations.
                </p>
              </div>
            </div>
          </li>
          <li class="mt-10 md:mt-0">
            <div class="block">
              <div class="flex-shrink-0">
                <div class="feature-icon bg-red">
                  <img src="~/assets/img/what-we-do/native.png" />
                </div>
              </div>
              <div class="mt-4">
                <h4 class="feature-headline">Cloud Native & Kubernetes</h4>
                <p class="feature-description">
                  We design and implement container-based workloads on
                  Kubernetes or Elastic Container Service. We accelerate your
                  developer experience and automate all Day 2 operations.
                </p>
              </div>
            </div>
          </li>
          <li class="mt-10 md:mt-0">
            <div class="block">
              <div class="flex-shrink-0">
                <div class="feature-icon bg-red">
                  <img src="~/assets/img/what-we-do/devops.png" />
                </div>
              </div>
              <div class="mt-4">
                <h4 class="feature-headline">
                  DevOps & Site-Reliability-Engineering
                </h4>
                <p class="feature-description">
                  We focus on automating infrastructure and deployments to
                  increase velocity and agility. We reduce risks through
                  monitoring and improving reliability and scalability.
                </p>
              </div>
            </div>
          </li>
          <li class="mt-10 md:mt-0">
            <div class="block">
              <div class="flex-shrink-0">
                <div class="feature-icon bg-red">
                  <img src="~/assets/img/what-we-do/trainings.png" />
                </div>
              </div>
              <div class="mt-4">
                <h4 class="feature-headline">Trainings</h4>
                <p class="feature-description">
                  We coach teams to accelerate their knowledge building while
                  working with infrastructure as code, Terraform, Docker,
                  Packer, AWS, GCP, security, and more.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.feature-icon {
  @apply flex;
  @apply items-center;
  @apply justify-center;
  @apply h-12;
  @apply w-12;
}

.feature-headline {
  @apply text-lg;
  @apply leading-6;
  @apply font-medium;
  @apply text-gray-900;
}

.feature-description {
  @apply mt-2;
  @apply text-base;
  @apply leading-6;
  @apply text-gray-500;
}
</style>
