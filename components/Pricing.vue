<template>
  <div class="bg-gray-800">
    <div class="pt-12 sm:pt-16 lg:pt-24">
      <div class="max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto space-y-2 lg:max-w-none">
          <h2
            class="
              text-lg
              leading-6
              font-semibold
              text-red
              uppercase
              tracking-wider
            "
          >
            Pricing
          </h2>
          <p
            class="
              text-3xl
              leading-9
              font-extrabold
              text-white
              sm:text-4xl sm:leading-10
              lg:text-5xl lg:leading-none
            "
          >
            Get started now
          </p>
          <p class="text-xl leading-7 text-gray-300">
            Start building on top of our open-source modules today.
            <NuxtLink to="/contact">Talk to us</NuxtLink>
            for production-grade end-to-end architectures, compliance and
            support.
          </p>
        </div>
      </div>
    </div>
    <div class="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
      <div class="relative">
        <div class="absolute inset-0 h-3/4 bg-gray-800"></div>
        <div class="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            class="
              max-w-md
              mx-auto
              space-y-4
              lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0
            "
          >
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="px-6 py-8 bg-gray-50 sm:p-10 sm:pb-6">
                <div>
                  <h3
                    id="tier-standard"
                    class="
                      inline-flex
                      px-4
                      py-1
                      rounded-full
                      text-sm
                      leading-5
                      font-semibold
                      tracking-wide
                      uppercase
                      bg-red
                      text-white
                    "
                  >
                    Open-Source
                  </h3>
                </div>
                <div
                  class="
                    mt-4
                    flex
                    items-baseline
                    text-4xl
                    leading-none
                    font-extrabold
                  "
                >
                  FREE
                </div>
                <p class="mt-5 text-lg leading-7 text-gray-500">
                  Start implementing your infrastructure on top of our
                  open-source modules for free right away.
                </p>
              </div>
              <div
                class="
                  flex-1 flex flex-col
                  justify-between
                  px-6
                  pt-6
                  pb-8
                  bg-gray-50
                  space-y-6
                  sm:p-10 sm:pt-6
                "
              >
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: check -->
                      <svg
                        class="h-6 w-6 text-green-500"
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
                    </div>
                    <p class="ml-3 text-base leading-6 text-gray-700">
                      Wide Range of Open Source Modules
                    </p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: check -->
                      <svg
                        class="h-6 w-6 text-green-500"
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
                    </div>
                    <p class="ml-3 text-base leading-6 text-gray-700">
                      Examples, Best Practices, Test & Documentation
                    </p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: check -->
                      <svg
                        class="h-6 w-6 text-green-500"
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
                    </div>
                    <p class="ml-3 text-base leading-6 text-gray-700">
                      Free Support through our Community Slack
                    </p>
                  </li>
                </ul>
                <div class="rounded-md shadow">
                  <a
                    href="https://github.com/mineiros-io"
                    target="_blank"
                    rel="noopener noreferrer"
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
                      text-black
                      bg-white
                      hover:text-gray-500
                      focus:outline-none focus:border-gray-500
                      transition
                      duration-150
                      ease-in-out
                      md:py-4 md:text-lg md:px-10
                    "
                    aria-describedby="tier-standard"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>

            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="px-6 py-8 bg-gray-50 sm:p-10 sm:pb-6">
                <div>
                  <h3
                    id="tier-enterprise"
                    class="
                      inline-flex
                      px-4
                      py-1
                      rounded-full
                      text-sm
                      leading-5
                      font-semibold
                      tracking-wide
                      uppercase
                      bg-red
                      text-white
                    "
                  >
                    Enterprise
                  </h3>
                </div>
                <div
                  class="
                    mt-4
                    flex
                    items-baseline
                    text-4xl
                    leading-none
                    font-extrabold
                  "
                >
                  Contact Us
                </div>
                <p class="mt-5 text-lg leading-7 text-gray-500">
                  Access to our ready-to-deploy end-to-end architectures,
                  compliance & security, and support.
                </p>
              </div>
              <div
                class="
                  flex-1 flex flex-col
                  justify-between
                  px-6
                  pt-6
                  pb-8
                  bg-gray-50
                  space-y-6
                  sm:p-10 sm:pt-6
                "
              >
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: check -->
                      <svg
                        class="h-6 w-6 text-green-500"
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
                    </div>
                    <p class="ml-3 text-base leading-6 text-gray-700">
                      Ready-to-Deploy Architectures
                    </p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: check -->
                      <svg
                        class="h-6 w-6 text-green-500"
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
                    </div>
                    <p class="ml-3 text-base leading-6 text-gray-700">
                      Ongoing Updates & Maintenance
                    </p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: check -->
                      <svg
                        class="h-6 w-6 text-green-500"
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
                    </div>
                    <p class="ml-3 text-base leading-6 text-gray-700">
                      Compliance & Security Modules
                    </p>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: check -->
                      <svg
                        class="h-6 w-6 text-green-500"
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
                    </div>
                    <p class="ml-3 text-base leading-6 text-gray-700">
                      Enterprise Support
                    </p>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: check -->
                      <svg
                        class="h-6 w-6 text-green-500"
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
                    </div>
                    <p class="ml-3 text-base leading-6 text-gray-700">
                      Same Business Day SLA
                    </p>
                  </li>
                </ul>
                <div class="rounded-md shadow">
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
                      focus:border-red focus:outline-none
                      transition
                      duration-150
                      ease-in-out
                      md:py-4 md:text-lg md:px-10
                    "
                    aria-describedby="tier-standard"
                  >
                    Talk to Sales
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
