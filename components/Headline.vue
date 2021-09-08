<template>
  <div class="text-center">
    <h1
      class="
        text-4xl
        leading-10
        font-bold
        text-gray-900
        sm:text-5xl sm:leading-none sm:tracking-tight
        lg:text-6xl
      "
    >
      {{ title }}
    </h1>
    <p class="mt-5 mx-auto text-xl leading-7 text-gray-500">
      <slot></slot>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
})
</script>
