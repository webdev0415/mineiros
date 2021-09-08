<template>
  <div class="px-4 py-5 sm:px-6 lg:px-8">
    <div class="text-lg max-w-prose mx-auto mb-6">
      <h1
        class="
          mt-2
          mb-8
          text-3xl text-center
          leading-8
          font-bold
          tracking-tight
          text-gray-900
          sm:text-4xl sm:leading-10
        "
      >
        Imprint
      </h1>
      <div class="prose prose-lg text-gray-500 mx-auto">
        <h2 class="mt-2 mb-8 text-2xl leading-8 font-bold text-gray-900">
          Contact Details
        </h2>
        <p>
          Mineiros GmbH<br />Köpenicker Str. 124e<br />10179 Berlin<br />Germany<br /><br />Phone:
          +49 151 407 669 46<br />Mail:
          <a href="mailto:hello@mineiros.io">hello@mineiros.io</a><br />Website:
          <a href="https://www.mineiros.io">https://www.mineiros.io</a
          ><br /><br />Managing Directors: Sören Martius, Marius Tolzmann<br />Registered
          at the District Court of Berlin Charlottenburg - HRB&nbsp;218370 B<br />VAT-ID
          according to §27a UStG: DE332314130<br /><br />Responsible for the
          content of mineiros.io ref. § 55 II RStV: Sören Martius, Marius
          Tolzmann
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    title: () => {
      return 'Mineiros - Imprint'
    },
    description: () => {
      return 'Imprint and contact details of the Mineiros GmbH.'
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
