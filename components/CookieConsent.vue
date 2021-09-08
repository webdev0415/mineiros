<template>
  <div>
    <div
      v-if="showCookieConsentHint"
      class="bg-red py-4 px-4 fixed z-50 bottom-0 w-full"
    >
      <div class="flex flex-col lg:flex-row max-w-screen-xl md:mx-auto">
        <div class="lg:w-3/5">
          <p class="font-bold text-white">Cookies</p>
          <p class="text-sm text-white">
            We would like to use cookies to better understand your use of this
            website. This enables us to improve your future experience on our
            website. Detailed information about the use of cookies can be found
            in our
            <NuxtLink to="/dataprivacy" class="underline">
              privacy policy</NuxtLink
            >.
          </p>
        </div>
        <div
          class="
            flex
            w-full
            lg:w-2/5
            mt-5
            lg:mt-0 lg:justify-end
            items-center
            justify-between
          "
        >
          <span class="rounded-md shadow-sm lg:ml-2">
            <button
              type="button"
              class="
                inline-flex
                items-center
                px-4
                py-2
                border border-gray-300
                text-sm
                leading-5
                font-medium
                rounded-md
                text-gray-700
                bg-white
                hover:text-gray-500
                focus:outline-none focus:border-blue-300 focus:ring-blue-300
                active:text-gray-800 active:bg-gray-50
                transition
                ease-in-out
                duration-150
              "
              @click="allowCookies()"
            >
              Accept all Cookies
            </button>
          </span>
          <button class="ml-5" @click="denyCookies()">
            <svg
              class="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapGetters(['cookieConsent', 'showCookieConsentHint']),
  },
  methods: {
    allowCookies() {
      this.$store.dispatch('enableCookies')
      this.$store.dispatch('hideCookieConsentHint')
      // Refreshs current page
      this.$router.go(0)
    },
    denyCookies() {
      this.$store.dispatch('disableCookies')
      this.$store.dispatch('hideCookieConsentHint')
    },
  },
})
</script>
