<template>
  <div class="company">
    <div class="px-4 py-16 sm:px-6 lg:px-8 bg-silver">
      <div
        class="
          my-10
          mx-auto
          px-4
          sm:my-12 sm:px-6
          lg:my-16 lg:my-20
          xl:my-24
          text-center
          grid grid-cols-2
          gap-4
        "
      >
        <div class="company-section-1 lg:pl-20 text-left lg:pt-20">
          <div class="lg:w-8/12 mx-auto">
            <h1
              class="
                mx-auto
                max-w-3/4
                mt-2
                mb-8
                text-3xl text-left
                leading-8
                font-bold
                tracking-tight
                text-gray-900
                line-height-62
                font-size-60
                ubuntu-700
              "
            >
              Who are <br /><span class="text-red">MINEIROS?</span>
            </h1>
            <p class="mx-auto max-w-3/4 text-xl scd leading-8 ubuntu-400">
              We are a remote-first company headquartered in Berlin, Germany
              that solves development, automation and security challenges in
              cloud infrastructure. We are working on open-source products that
              support development teams to create better software.
            </p>
            <div class="rounded-md shadow lg:w-6/12 mt-10">
              <nuxt-link
                to="/contact"
                class="
                  flex
                  content-center
                  items-center
                  border-3
                  custom-responsive-buttons
                  p-5
                  border border-transparent border-red
                  rounded-md
                  text-red
                  ubuntu-500
                "
              >
                <svg
                  class="inline-block mr-1.5"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.80157 3.48667C2.80352 3.48667 2.75474 3.5374 2.69328 3.59788C2.45719 3.82715 1.96842 4.30421 1.96349 5.30223C1.95574 6.69829 2.87376 9.29042 7.29414 13.7098C11.694 18.1078 14.2822 19.0365 15.6812 19.0365H15.7017C16.6997 19.0316 17.1758 18.5419 17.4061 18.3068C17.4763 18.2346 17.5329 18.1819 17.5729 18.1487C18.5446 17.1712 19.0421 16.4434 19.0373 15.9771C19.0304 15.501 18.4382 14.9381 17.6197 14.1596C17.3592 13.9118 17.0763 13.6425 16.7778 13.344C16.0042 12.5723 15.6208 12.704 14.7778 13.0006C13.612 13.4093 12.0121 13.9654 9.52627 11.4787C7.03658 8.99092 7.59364 7.39291 8.00143 6.22708C8.29606 5.38418 8.43069 4.9998 7.65608 4.22518C7.35267 3.92275 7.08048 3.63593 6.82976 3.37252C6.05612 2.55889 5.49808 1.97061 5.02493 1.96378H5.01712C4.54982 1.96378 3.82398 2.46328 2.79669 3.49057C2.79962 3.48764 2.80059 3.48667 2.80157 3.48667ZM15.6822 20.4999C13.2511 20.4999 10.0814 18.5643 6.26002 14.7449C2.42402 10.9099 0.48553 7.73046 0.500081 5.29443C0.508944 3.68471 1.35282 2.86034 1.66989 2.55108C1.68647 2.53059 1.74306 2.47499 1.76257 2.45547C3.16156 1.05551 4.10495 0.48967 5.04346 0.500252C6.13319 0.515036 6.90878 1.33062 7.89022 2.36377C8.13314 2.61937 8.39655 2.89741 8.6902 3.19009C10.1146 4.61444 9.70871 5.77636 9.38286 6.70902C9.02775 7.72656 8.72044 8.60458 10.5604 10.4445C12.4023 12.2845 13.2803 11.9772 14.294 11.6191C15.2276 11.2933 16.3866 10.8855 17.8129 12.3099C18.1017 12.5986 18.3758 12.8591 18.6285 13.1001C19.6665 14.0864 20.486 14.8659 20.4998 15.9585C20.5114 16.8902 19.9455 17.8395 18.5485 19.2375L17.93 18.818L18.4529 19.3292C18.1436 19.6463 17.3202 20.4911 15.7095 20.4999H15.6822Z"
                    fill="#F22751"
                  />
                </svg>

                Talk to our Experts
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="company-section-2">
          <img src="~/assets/img/about-us/about-us-landing-image.png" />
        </div>
      </div>
    </div>
    <div class="text-center mx-auto text-justify bg-red px-4 py-16 sm:px-6">
      <p
        class="text-center uppercase text-white font-16 mb-10 ubuntu-500 pt-20"
      >
        What we are doing?
      </p>
      <h2 class="font-size-60 line-height-62 text-white text-center ubuntu-700">
        Our Mission
      </h2>
      <p class="text-white text-center mt-5 lg:w-3/12 mx-auto pb-20 ubuntu-400">
        Save weeks of engineering time by choosing from pre-configured
        end-to-end architectures such as Kubernetes, ECS, Compute and
        Serverless.
      </p>
    </div>
    <div class="max-w-prose mx-auto mt-10 pt-20 pb-20">
      <h2 class="text-3xl leading-10 font-bold ubuntu-500 text-center text-red">
        Partner
      </h2>
      <h2
        class="
          text-3xl
          leading-10
          font-bold
          ubuntu-700
          text-center
          secondary-color-dark
          font-size-60
          line-height-62
          my-5
        "
      >
        Meet the Team
      </h2>
      <div class="flex flex-wrap mt-5">
        <div class="wrap-partners">
          <Partner
            name="Sören Martius"
            title="Co-Founder, CEO"
            bio="Soren is a technologist who loves building and delivering
                    digital products and managing and scaling engineering teams
                    for various kinds of businesses. He has 15+ years of
                    industry experience and has been working in various CTO
                    positions for successful startups prior to founding
                    Mineiros."
            img="soerenmartius.jpg"
            twitter="https://twitter.com/sorenmartius"
            linkedin="https://www.linkedin.com/in/soerenmartius/"
          />
          <Partner
            name="Marius Tolzmann"
            title="Co-Founder, CTO"
            bio="Marius is a true industry veteran who has spent 20+ years in
                    solving problems in both on-premise and cloud environments.
                    After working 10+ years in academics and science, Marius
                    moved on to the startup industry. During this time, He
                    managed and scaled engineering teams for a broad set of
                    successful startups. Before founding Minerios, he worked as
                    the Platform Engineering Lead of Marley Spoon."
            img="mariustolzmann.jpg"
            linkedin="https://www.linkedin.com/in/marius-tolzmann-69a90790/"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    title: () => {
      return 'Mineiros - About Us'
    },
    description: () => {
      return 'Mineiros is a remote-first company headquartered in Berlin, Germany that solves development, automation and security challenges in cloud infrastructure.'
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
