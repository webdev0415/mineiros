<template>
  <div class="relative z-50 bg-white-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="
          flex
          justify-between
          items-center
          border-b-0 border-gray-100
          py-6
          lg:justify-start lg:space-x-10
        "
      >
        <div class="lg:w-0 lg:flex-1">
          <NuxtLink to="/" class="flex">
            <Logo class="h-8 w-auto sm:h-10" />
          </NuxtLink>
        </div>
        <div class="-mr-2 -my-2 lg:hidden">
          <button
            type="button"
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-gray-400
              hover:text-gray-500 hover:bg-gray-100
              focus:outline-none focus:bg-gray-100 focus:text-gray-500
              transition
              duration-150
              ease-in-out
            "
            @click="toggleNavigation()"
          >
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <nav class="hidden lg:flex space-x-10 items-center">
          <NuxtLink
            to="/"
            class="
              text-base
              leading-6
              font-medium
              text-gray-500
              hover:text-gray-900
              focus:outline-none focus:text-gray-900
              transition
              ease-in-out
              duration-150
              secondary-color-dark
              uppercase
              ubuntu-500
            "
          >
            What We Do
          </NuxtLink>

          <div class="relative">
            <button
              type="button"
              :class="{ 'text-gray-900': showSolutionsMenu }"
              class="
                text-gray-500
                group
                inline-flex
                items-center
                space-x-2
                text-base
                leading-6
                font-medium
                hover:text-gray-900
                focus:outline-none focus:text-gray-900
                transition
                ease-in-out
                duration-150
                secondary-color-dark
                uppercase
                ubuntu-500
              "
              @click.stop="toggleSolutionsMenu()"
            >
              <span>Solutions</span>

              <svg
                class="
                  text-gray-400
                  h-5
                  w-5
                  group-hover:text-gray-500
                  group-focus:text-gray-500
                  transition
                  ease-in-out
                  duration-150
                "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div
                v-if="showSolutionsMenu"
                class="
                  absolute
                  -ml-4
                  mt-3
                  transform
                  px-2
                  w-screen
                  max-w-md
                  sm:px-0
                  lg:ml-0 lg:left-1/2 lg:-translate-x-1/2
                "
              >
                <div class="rounded-lg shadow-lg">
                  <div class="rounded-lg shadow-xs overflow-hidden">
                    <div
                      class="
                        z-20
                        relative
                        grid
                        gap-6
                        bg-white
                        px-5
                        py-6
                        sm:gap-8 sm:p-8
                      "
                    >
                      <NuxtLink
                        to="/solutions/terraform-library"
                        class="
                          -m-3
                          p-3
                          flex
                          items-start
                          space-x-4
                          rounded-lg
                          hover:bg-gray-50
                          transition
                          ease-in-out
                          duration-150
                        "
                        @click="toggleSolutionsMenu()"
                      >
                        <svg
                          class="flex-shrink-0 h-6 w-6 text-red"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                          />
                        </svg>
                        <div class="space-y-1">
                          <p
                            class="
                              text-base
                              leading-6
                              font-medium
                              text-gray-900
                            "
                          >
                            Terraform Library
                          </p>
                          <p class="text-sm leading-5 text-gray-500">
                            Start building your production-grade infrastructure
                            on AWS on top of our comprehensive library of
                            Terraform Modules.
                          </p>
                        </div>
                      </NuxtLink>
                      <NuxtLink
                        to="/solutions/landing-zone"
                        class="
                          -m-3
                          p-3
                          flex
                          items-start
                          space-x-4
                          rounded-lg
                          hover:bg-gray-50
                          transition
                          ease-in-out
                          duration-150
                        "
                        @click="toggleSolutionsMenu()"
                      >
                        <svg
                          class="flex-shrink-0 h-6 w-6 text-red"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                        <div class="space-y-1">
                          <p
                            class="
                              text-base
                              leading-6
                              font-medium
                              text-gray-900
                            "
                          >
                            Landing Zone
                          </p>
                          <p class="text-sm leading-5 text-gray-500">
                            Create and manage AWS accounts with a set of
                            customizable security baselines through code in
                            minutes instead of days. s
                          </p>
                        </div>
                      </NuxtLink>
                    </div>
                    <div
                      class="
                        px-5
                        py-5
                        bg-gray-50
                        space-y-6
                        sm:flex sm:space-y-0 sm:space-x-10 sm:px-8
                      "
                    >
                      <div class="flow-root">
                        <NuxtLink
                          to="/contact"
                          class="
                            -m-3
                            p-3
                            flex
                            items-center
                            space-x-3
                            rounded-md
                            text-base
                            leading-6
                            font-medium
                            text-gray-900
                            hover:bg-gray-100
                            transition
                            ease-in-out
                            duration-150
                          "
                          @click="showSolutionMenu = false"
                        >
                          <svg
                            class="flex-shrink-0 h-6 w-6 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          <span>Talk to Sales</span>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <NuxtLink
            to="/company"
            class="
              text-base
              leading-6
              font-medium
              text-gray-500
              hover:text-gray-900
              focus:outline-none focus:text-gray-900
              transition
              ease-in-out
              duration-150
              secondary-color-dark
              uppercase
              ubuntu-500
            "
          >
            Company
          </NuxtLink>
          <NuxtLink
            to="/blog"
            class="
              text-base
              leading-6
              font-medium
              text-gray-500
              hover:text-gray-900
              focus:outline-none focus:text-gray-900
              transition
              ease-in-out
              duration-150
              secondary-color-dark
              uppercase
              ubuntu-500
            "
          >
            Blog
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="
              text-base
              leading-6
              font-medium
              hover:text-gray-900
              focus:outline-none focus:text-gray-900
              transition
              ease-in-out
              duration-150
              text-white
              bg-red
              px-5
              py-2
              border-3
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
                d="M2.96624 3.48668C2.96819 3.48668 2.91941 3.53741 2.85795 3.5979C2.62186 3.82716 2.13309 4.30422 2.12816 5.30225C2.12041 6.69831 3.03843 9.29044 7.45881 13.7098C11.8587 18.1078 14.4469 19.0365 15.8459 19.0365H15.8664C16.8644 19.0317 17.3405 18.5419 17.5707 18.3068C17.641 18.2346 17.6976 18.1819 17.7376 18.1487C18.7093 17.1712 19.2068 16.4434 19.202 15.9771C19.1951 15.501 18.6029 14.9381 17.7844 14.1596C17.5239 13.9118 17.241 13.6425 16.9425 13.344C16.1688 12.5723 15.7854 12.704 14.9425 13.0006C13.7767 13.4094 12.1767 13.9654 9.69095 11.4787C7.20125 8.99093 7.75831 7.39292 8.16611 6.2271C8.46073 5.38419 8.59536 4.99981 7.82075 4.2252C7.51734 3.92277 7.24516 3.63595 6.99443 3.37254C6.22079 2.5589 5.66276 1.97062 5.1896 1.96379H5.18179C4.71449 1.96379 3.98865 2.46329 2.96136 3.49058C2.96429 3.48766 2.96527 3.48668 2.96624 3.48668ZM15.8469 20.4999C13.4157 20.4999 10.2461 18.5643 6.42469 14.7449C2.58869 10.9099 0.650203 7.73048 0.664754 5.29444C0.673617 3.68473 1.5175 2.86036 1.83456 2.5511C1.85115 2.53061 1.90773 2.475 1.92724 2.45549C3.32623 1.05552 4.26962 0.489686 5.20813 0.500268C6.29786 0.515051 7.07345 1.33064 8.05489 2.36378C8.29781 2.61939 8.56122 2.89743 8.85487 3.1901C10.2792 4.61446 9.87338 5.77638 9.54754 6.70904C9.19242 7.72657 8.88511 8.6046 10.7251 10.4446C12.567 12.2845 13.445 11.9772 14.4586 11.6192C15.3923 11.2933 16.5513 10.8855 17.9776 12.3099C18.2663 12.5986 18.5405 12.8591 18.7932 13.1001C19.8312 14.0864 20.6507 14.8659 20.6645 15.9586C20.676 16.8902 20.1102 17.8395 18.7132 19.2375L18.0946 18.818L18.6175 19.3292C18.3083 19.6463 17.4849 20.4911 15.8742 20.4999H15.8469Z"
                fill="white"
              />
            </svg>

            Contact
          </NuxtLink>
        </nav>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="showNavigation"
        class="
          absolute
          top-0
          inset-x-0
          p-2
          transition
          transform
          origin-top-right
          lg:hidden
        "
      >
        <div class="rounded-lg shadow-lg">
          <div class="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5 space-y-6">
              <div class="flex items-center justify-between">
                <div>
                  <NuxtLink to="/">
                    <Logo class="h-8 w-auto sm:h-10" />
                  </NuxtLink>
                </div>
                <div class="-mr-2">
                  <button
                    type="button"
                    class="
                      inline-flex
                      items-center
                      justify-center
                      p-2
                      rounded-md
                      text-gray-400
                      hover:text-gray-500 hover:bg-gray-100
                      focus:outline-none focus:bg-gray-100 focus:text-gray-500
                      transition
                      duration-150
                      ease-in-out
                    "
                    @click="toggleNavigation()"
                  >
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <nav class="grid gap-y-8">
                  <NuxtLink
                    to="/solutions/terraform-library"
                    class="
                      -m-3
                      p-3
                      flex
                      items-center
                      space-x-3
                      rounded-md
                      hover:bg-gray-50
                      transition
                      ease-in-out
                      duration-150
                    "
                  >
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-red"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                    <div class="text-base leading-6 font-medium text-gray-900">
                      Terraform Library
                    </div>
                  </NuxtLink>
                  <NuxtLink
                    to="/solutions/landing-zone"
                    class="
                      -m-3
                      p-3
                      flex
                      items-center
                      space-x-3
                      rounded-md
                      hover:bg-gray-50
                      transition
                      ease-in-out
                      duration-150
                    "
                  >
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-red"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <div class="text-base leading-6 font-medium text-gray-900">
                      Landing Zone
                    </div>
                  </NuxtLink>
                </nav>
              </div>
            </div>
            <div class="py-6 px-5 space-y-6">
              <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                <NuxtLink
                  to="/"
                  class="
                    text-base
                    leading-6
                    font-medium
                    text-gray-900
                    hover:text-gray-700
                    transition
                    ease-in-out
                    duration-150
                  "
                >
                  What We Do
                </NuxtLink>
                <NuxtLink
                  to="/company"
                  class="
                    text-base
                    leading-6
                    font-medium
                    text-gray-900
                    hover:text-gray-700
                    transition
                    ease-in-out
                    duration-150
                  "
                >
                  Company
                </NuxtLink>
                <a
                  href="https://www.mineiros.io/slack"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="
                    text-base
                    leading-6
                    font-medium
                    text-gray-900
                    hover:text-gray-700
                    transition
                    ease-in-out
                    duration-150
                  "
                >
                  Community
                </a>

                <a
                  href="https://medium.com/mineiros"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="
                    text-base
                    leading-6
                    font-medium
                    text-gray-900
                    hover:text-gray-700
                    transition
                    ease-in-out
                    duration-150
                  "
                >
                  Blog
                </a>

                <NuxtLink
                  to="/contact"
                  class="
                    text-base
                    leading-6
                    font-medium
                    text-gray-900
                    hover:text-gray-700
                    transition
                    ease-in-out
                    duration-150
                  "
                >
                  Contact
                </NuxtLink>
              </div>
              <div class="space-y-6">
                <span class="w-full flex rounded-md shadow-sm">
                  <NuxtLink
                    to="/contact"
                    class="
                      w-full
                      flex
                      items-center
                      justify-center
                      px-4
                      py-2
                      border border-transparent
                      text-base
                      leading-6
                      font-medium
                      rounded-md
                      text-white
                      bg-red
                      hover:darkred
                      focus:outline-none focus:border-darkred
                      active:bg-darkred
                      transition
                      ease-in-out
                      duration-150
                    "
                  >
                    Talk to Us
                  </NuxtLink>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    showNavigation(): boolean {
      return this.$store.state.showNavigation
    },
    showSolutionsMenu(): boolean {
      return this.$store.state.showSolutionsMenu
    },
  },
  methods: {
    toggleNavigation() {
      this.$store.dispatch('toggleNavigation')
    },
    toggleSolutionsMenu() {
      this.$store.dispatch('toggleSolutionsMenu')

      this.showSolutionsMenu &&
        this.$nextTick(() => {
          document.addEventListener('click', this.closeSolutionsMenu)
        })
    },
    closeSolutionsMenu() {
      this.$store.dispatch('closeSolutionsMenu')
      document.removeEventListener('click', this.closeSolutionsMenu)
    },
  },
})
</script>

<style lang="css" scoped>
.NuxtLink-exact-active {
  @apply text-gray-900;
}

.cta-button .NuxtLink-exact-active,
.cta-button .NuxtLink-active {
  @apply text-white;
}
</style>
