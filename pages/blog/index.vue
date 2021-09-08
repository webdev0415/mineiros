<template>
  <div
    class="
      relative
      px-4
      pt-8
      pb-20
      bg-gray-100
      sm:px-6
      lg:pt-8 lg:pb-28 lg:px-8
    "
  >
    <div class="absolute inset-0">
      <div class="bg-gray-50 h-1/3 sm:h-2/3"></div>
    </div>
    <div class="relative mx-auto max-w-7xl">
      <div class="text-center">
        <h2
          class="
            text-3xl
            leading-9
            tracking-tight
            font-extrabold
            text-gray-900
            sm:text-4xl sm:leading-10
          "
        >
          Mineiros Blog
        </h2>
        <p
          class="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4"
        >
          The latest news about DevOps and SRE and Minerios.
        </p>
      </div>
      <div
        class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none"
      >
        <PostCard
          v-for="article in articles"
          :key="article.slug"
          :article="article"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { Article } from '~/components/Blog/types'
import PostCard from '~/components/Blog/PostCard.vue'

export default Vue.extend({
  components: { PostCard },
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only([
        'title',
        'description',
        'img',
        'slug',
        'author',
        'readingTime',
        'created',
        'createdAt',
      ])
      .sortBy('created', 'desc')
      .fetch()

    return {
      articles,
    }
  },
  data() {
    const articles: Article[] = []

    return { articles }
  },
  computed: {
    title: () => {
      return 'Mineiros - The latest news about Minerios, DevOps and SRE.'
    },
    description: () => {
      return 'The latest news about Minerios, DevOps and SRE.'
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
