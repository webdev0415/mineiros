<template>
  <div class="relative py-16">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="prose mx-auto mb-6 text-center">
        <p
          class="
            text-2xl text-center
            leading-6
            text-red
            font-semibold
            tracking-wide
            uppercase
          "
        >
          Mineiros Terraform AWS Landing Zone
        </p>
        <h1
          class="
            mx-auto
            max-w-3/4
            mt-2
            mb-8
            text-3xl text-center
            leading-8
            font-bold
            tracking-tight
            text-gray-900
            sm:text-4xl sm:leading-10
          "
        >
          Set up a compliant and secure baseline in days instead of weeks
        </h1>
        <p class="mx-auto max-w-3/4 text-xl text-gray-500 leading-8">
          Create and manage AWS accounts with a set of customizable security
          baselines through code in minutes instead of days.
        </p>
      </div>
      <div class="prose text-gray-500 mx-auto text-justify">
        <p>
          Mineiros Landing Zone is a solution that helps customers more quickly
          set up a secure, multi-account AWS environment based on AWS best
          practices through code. With the large number of design choices,
          setting up a multi-account environment can take a significant amount
          of time, involve the configuration of multiple accounts and services,
          and require a deep understanding of AWS services.
        </p>
        <p>
          Our Landing Zone solution helps our customers to easily manage and
          deploy a secure multi-account AWS environment based on AWS
          best-practices, with strong isolation between workloads. This solution
          saves time by automating the provisioning of accounts and is fully
          audible, customizable, and easy to hook up with existing CI solutions.
          It allows for enabling a self-service and secure infrastructure on
          AWS.
        </p>
        <h2>What's included in the Landing Zone solution?</h2>
        <p>
          Our Landing Zone solution is a pre-configured, secure, scalable,
          multi-account AWS environment based on AWS best practices that comes
          with the following set of pre-configures AWS services:
        </p>
        <ul>
          <li>AWS Organizations</li>
          <li>AWS Key Management Service (KMS)</li>
          <li>AWS CloudTrail</li>
          <li>AWS Config</li>
          <li>AWS Config Rules</li>
          <li>AWS Identity and Access Management</li>
          <li>Cross Acccount Access</li>
          <li>Amazon Virtual Private Cloud (VPC)</li>
          <li>AWS Landing Zone Notifications</li>
          <li>Amazon GuardDuty</li>
        </ul>
        <p>
          We are constantly updating and improving our solution and are offering
          it to customers on a subscription basis. If you are interested in a
          demo or in working with us, please set up a call using the button
          below.
        </p>
      </div>
    </div>
    <div class="mx-auto sm:w-full md:max-w-3xl mt-10 px-4 relative z-10">
      <div class="mx-auto rounded-md shadow w-full md:max-w-xs mt-10">
        <a
          href="/contact"
          class="
            w-full
            flex
            items-center
            justify-center
            px-8
            py-3
            border border-transparent
            text-base
            leading-6
            font-medium
            rounded-md
            text-white
            bg-red
            hover:bg-darkred
            focus:outline-none focus:border-red
            transition
            duration-150
            ease-in-out
            md:py-4 md:text-lg md:px-10
          "
        >
          Talk to our Experts</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    title: () => {
      return 'Create and manage AWS accounts with a set of customizable security baselines through code in minutes instead of days.'
    },
    description: () => {
      return 'Mineiros Landing Zone is a solution that helps customers more quickly set up a secure, multi-account AWS environment based on AWS best practices through code.'
    },
  },
  head() {
    return {
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.title,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description,
        },
      ],
    }
  },
})
</script>
