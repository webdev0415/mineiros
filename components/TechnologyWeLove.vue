<template>
  <div class="py-20 technology-we-love">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 gap-4">
        <h2 class="secondary-color-dark line-height-62 font-size-60 ubuntu-700">
          Technologies <br />
          we <br />
          <span class="text-red">love!</span>
        </h2>
        <div class="technology-wrapper flex flex-wrap">
          <img
            v-for="(techno, index) of technologyList"
            :key="index"
            :src="require(`~/assets/img/technology-we-love/${techno}`)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      technologyList: [
        'technology-1.jpg',
        'technology-2.jpg',
        'technology-3.jpg',
        'technology-4.jpg',
        'technology-5.jpg',
        'technology-6.jpg',
        'technology-7.jpg',
        'technology-8.jpg',
        'technology-9.jpg',
        'technology-10.jpg',
      ],
    }
  },
})
</script>
