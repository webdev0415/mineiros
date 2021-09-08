<template>
  <article class="pt-6 pb-20">
    <img
      :src="require(`~/assets/img/articles/${article.slug}/${article.img}`)"
      class="sm:object-cover sm:w-full"
      alt="article.alt"
    />

    <div class="px-4 py-5 mx-auto prose nuxt-content">
      <h1>{{ article.title }}</h1>
    </div>

    <div class="px-4 py-2 mx-auto prose nuxt-content">
      <author
        :author="article.author"
        :created-at="new Date(article.created)"
      ></author>
    </div>

    <nuxt-content
      class="px-4 py-5 mx-auto text-justify prose"
      :document="article"
    />

    <div class="px-4 py-5 mx-auto prose nuxt-content">
      <p class="text-sm text-gray-400">
        Article last updated: {{ formatDate(article.updatedAt) }}
      </p>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Article } from '~/components/Blog/types'
import { formatDate } from '~/components/Blog/utils'

export default Vue.extend({
  async asyncData({ $content, params }) {
    const article = await $content(`articles/${params.slug}`).fetch<Article>()

    return { article }
  },
  methods: {
    formatDate(date: Date) {
      return formatDate(date)
    },
  },
  head() {
    // TODO THis is really ugly, waiting for a patch
    //  https://github.com/vuejs/vue/issues/8721
    const title = (this as any).article.title
    const description = (this as any).article.description

    return {
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: `${title} | Mineiros Blog`,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${title} | Mineiros Blog`,
        },
        {
          hid: 'description',
          name: 'description',
          content: `${description} | Mineiros Blog`,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${description} | Mineiros Blog`,
        },
      ],
    }
  },
})
</script>
