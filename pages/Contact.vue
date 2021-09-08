<template>
  <div class="bg-gray-50">
    <div
      class="
        relative
        max-w-screen-xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        overflow-hidden
      "
    >
      <svg
        class="absolute left-full transform translate-x-1/2"
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
      >
        <defs>
          <pattern
            id="85737c0e-0916-41d7-917f-596dc7edfa27"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
        />
      </svg>
      <svg
        class="absolute right-full bottom-0 transform -translate-x-1/2"
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
      >
        <defs>
          <pattern
            id="85737c0e-0916-41d7-917f-596dc7edfa27"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
        />
      </svg>
    </div>
    <div class="px-4 py-16 sm:px-6 lg:px-8">
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
          We are here to help
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
          Contact Us
        </h1>
        <p class="mx-auto max-w-3/4 text-xl text-gray-500 leading-8">
          Are you interested in working with us? <br />
          Please schedule a call with us or drop us a line at
          <a href="mailto:hello@minerios.io?subject=Get in touch with Minerios"
            ><strong>hello@minerios.io</strong></a
          >
        </p>
      </div>

      <div
        class="calendly-inline-widget"
        data-url="https://calendly.com/mineiros-soeren-martius/hello"
        style="height: 1000px"
      ></div>
      <!-- Calendly inline widget end -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    title: () => {
      return 'Mineiros - Contact Us'
    },
    description: () => {
      return 'Get in touch with us now. We are answering all requests within 24 hours.'
    },
  },
  head() {
    return {
      script: [
        {
          hid: 'calendly',
          src: 'https://assets.calendly.com/assets/external/widget.js',
          defer: true,
        },
      ],
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
