<template>
  <div
    class="
      max-w-screen-xl
      mx-auto
      pt-16
      px-4
      sm:px-6
      lg:pt-24 lg:px-8
      block
      pb-20
    "
  >
    <div class="text-center mb-20">
      <h2
        class="
          text-base
          leading-6
          text-red
          font-semibold
          tracking-wide
          uppercase
          text-center
          ubuntu-500
        "
      >
        Solutions
      </h2>
      <p
        class="
          mt-2
          text-3xl
          leading-9
          font-extrabold
          text-gray-900 text-center
          secondary-color-dark
          line-height-62
          font-size-60
          ubuntu-700
        "
      >
        Get up and running with our
        <span class="text-red">infrastructure</span> as code solutions
      </p>
      <p
        class="
          mt-4
          text-lg
          leading-7
          text-gray-500
          lg:w-7/12 lg:mx-auto
          ubuntu-400
        "
      >
        Save weeks of engineering hours by building your infrastructure on top
        of our infrastructure as code library that has been proven in production
        at dozens of companies and is maintained and supported by our DevOps
        experts.
      </p>
    </div>
    <div class="mt-12 lg:mt-0 lg:grid lg:grid-cols-2">
      <dl class="space-y-10 sm:space-y-0 m-auto">
        <div
          v-for="(items, index) of solutions"
          :key="index"
          class="flex space-x-3 pt-3 pb-3 cursor-pointer"
          :class="{ 'border-b-2': index !== solutions.length - 1 }"
          @click="expandRow(index)"
        >
          <img
            v-if="isExpanded(index)"
            class="w-4 h-4"
            src="~/assets/img/solution-overview/plus.jpg"
          />
          <img
            v-if="!isExpanded(index)"
            class="w-4 h-1 mt-2"
            src="~/assets/img/solution-overview/minus.jpg"
          />
          <div class="space-y-2">
            <dt
              class="
                text-lg
                leading-6
                font-medium
                text-gray-900
                behave-accordian
                ubuntu-500
              "
            >
              {{ items.title }}
            </dt>
            <dd
              class="flex space-x-3 lg:py-0 lg:pb-4"
              :class="{ hidden: isExpanded(index) }"
            >
              <span
                class="text-base leading-6 text-gray-500 ubuntu-300"
                v-html="items.description"
              ></span>
            </dd>
          </div>
        </div>
      </dl>
      <div
        class="
          wrap-solution-overview-image
          flex
          items-center
          justify-center
          p-12
        "
      >
        <img src="~/assets/img/solution-overview/infastructure.jpg" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      solutions: [
        {
          title: 'You need to go to production on AWS',
          description: `You're launching a new product, or you need to migrate your
                existing infrastructure to the cloud. You are required to
                implement networking, databases, continuous integration &
                deployment, monitoring & logging, queues, data pipelines, and
                orchestration, but you don't have the time or expertise to
                implement it all from scratch.`,
        },
        {
          title: 'Start building on top of our open-source modules',
          description: `You planned your project and discovered all the requirements.
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
                right away.`,
        },
        {
          title: 'Get access to our end-to-end architectures',
          description: `Are you interested in even saving even more time? We are
                offering complete end-to-end architectures such as Kubernetes,
                Compute, Serverless, Data Pipelines, and more. Talk to us and
                get an offer right away.`,
        },
        {
          title: 'Best Practices & Compliance',
          description: `Are you working in a regulated industry such as Fintech or
                Healthcare? We help you to launch infrastructure that is
                compliant with the CIS AWS Foundations Benchmark recommendations
                and others such as HIPAA or PCI DSS.`,
        },
      ],
      expandedRows: [],
    }
  },
  methods: {
    expandRow(index: any) {
      if (this.expandedRows.filter((x) => x === index).length > 0) {
        this.expandedRows = this.expandedRows.filter((x) => x !== index)
      } else {
        const pushIndex = index as never
        this.expandedRows.push(pushIndex)
      }
    },
    isExpanded(index: any) {
      return this.expandedRows.filter((x) => x === index).length === 0
    },
  },
})
</script>
