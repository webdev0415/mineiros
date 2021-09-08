<template>
  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div class="flex-shrink-0">
      <NuxtLink
        :to="{ name: 'blog-slug', params: { slug: article.slug } }"
        class="block"
      >
        <img
          class="h-48 w-full object-cover"
          :src="require(`~/assets/img/articles/${article.slug}/${article.img}`)"
          :alt="article.title"
        />
      </NuxtLink>
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
      <div class="flex-1">
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="block"
        >
          <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
            {{ article.title }}
          </h3>
          <p class="mt-3 text-base leading-6 text-gray-500">
            {{ article.description }}
          </p>
        </NuxtLink>
      </div>
      <div class="mt-6 flex items-center">
        <div class="flex-shrink-0">
          <img
            class="h-10 w-10 rounded-full"
            :src="require(`~/assets/img/team/${article.author.img}`)"
            alt=""
          />
        </div>
        <div class="ml-3">
          <p class="text-sm leading-5 font-medium text-gray-900">
            {{ article.author.name }}
          </p>
          <div class="flex text-sm leading-5 text-gray-500">
            <time :datetime="datetime">
              {{ formattedDate }}
            </time>
            <span class="mx-1"> &middot; </span>
            <span> {{ article.readingTime }} min read </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { formatDate, dateTime } from '@/components/Blog/utils'
import { Article } from './types'

export default defineComponent({
  props: {
    article: {
      type: Object as () => Article,
      required: true,
    },
  },
  setup(props) {
    const datetime = dateTime(new Date(props.article.created))

    const formattedDate = formatDate(new Date(props.article.created))

    return { datetime, formattedDate }
  },
})
</script>
