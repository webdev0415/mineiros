<template>
  <div class="bg-white-50">
    <Header />
    <main>
      <Nuxt />
    </main>
    <client-only>
      <CookieConsent />
    </client-only>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="css">
/* Inter Google Font */
@import 'https://rsms.me/inter/inter.css';
</style>
