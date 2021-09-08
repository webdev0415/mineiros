<template>
  <div class="flex items-center">
    <div class="flex-shrink-0">
      <img
        class="h-16 w-16 rounded-full"
        :src="require(`~/assets/img/team/${author.img}`)"
        :alt="author.name"
      />
    </div>
    <div class="ml-3">
      <span class="text-lg leading-5 font-medium text-gray-900">
        {{ author.name }}
      </span>
      <div class="flex text-sm leading-5 text-gray-500">
        <time :datetime="datetime">{{ formattedDate }}</time>
        <span class="mx-1">&middot;</span>
        <span>6 min read</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { Author } from './types'
import { formatDate, dateTime } from './utils'

export default defineComponent({
  props: {
    author: {
      type: Object as () => Author,
      required: true,
    },
    createdAt: {
      type: Date as PropType<Date>, // TODO: hack around limitation in nuxt / vue2
      required: true,
    },
  },
  setup(props) {
    const datetime = dateTime(props.createdAt)
    const formattedDate = formatDate(new Date(props.createdAt))
    return { datetime, formattedDate }
  },
})
</script>
