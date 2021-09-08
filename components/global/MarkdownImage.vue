<template>
  <img :src="imgSrc()" :alt="alt" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  methods: {
    imgSrc() {
      try {
        return require(`~/assets/img/articles/${this.src}`)
      } catch (error) {
        return null
      }
    },
  },
})
</script>
