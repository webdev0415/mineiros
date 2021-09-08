<template>
  <form
    id="mc-embedded-subscribe-form"
    ref="subscribe"
    tag="form"
    class="mt-4 sm:flex sm:max-w-md"
    action="https://mineiros.us18.list-manage.com/subscribe/post?u=5eff36914cbc6da1880334246&amp;id=d647c68662"
    method="post"
    name="mc-embedded-subscribe-form"
    target="_blank"
  >
    <label for="emailAddress" class="sr-only">Email address</label>

    <input
      id="mce-EMAIL"
      v-model="form.email"
      type="email"
      name="EMAIL"
      style="background: transparent; color: #fff; border: 1px solid #fff"
      class="
        email
        appearance-none
        min-w-0
        w-full
        bg-white
        border border-transparent
        rounded-md
        py-2
        px-4
        text-base
        leading-6
        text-gray-900
        placeholder-gray-500
        focus:outline-none focus:ring-gray-400 focus:placeholder-gray-400
        transition
        duration-150
        ease-in-out
      "
      placeholder="Your email address"
    />

    <div style="position: absolute; left: -5000px" aria-hidden="true">
      <input
        type="text"
        name="b_5eff36914cbc6da1880334246_d647c68662"
        tabindex="-1"
        value=""
      />
    </div>

    <div class="rounded-md sm:flex-shrink-0 flex relative">
      <button
        type="submit"
        class="
          w-full
          absolute
          transition
          duration-150
          ease-in-out
          top-1/2
          right-8
          translate-y-50
        "
      >
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.11803 10.0398L10.0744 14.8361C10.2037 15.0463 10.4058 15.0438 10.4875 15.0325C10.5691 15.0212 10.7656 14.9711 10.8367 14.7326L14.5336 2.24667C14.5983 2.02597 14.4794 1.87561 14.4261 1.82225C14.3744 1.7689 14.2264 1.65491 14.0122 1.71554L1.51735 5.37442C1.28048 5.44394 1.22874 5.64281 1.21743 5.72446C1.20611 5.80773 1.20287 6.01387 1.41225 6.14565L6.26354 9.17962L10.5497 4.84814C10.785 4.61047 11.169 4.60804 11.4075 4.84329C11.646 5.07854 11.6476 5.46335 11.4123 5.70102L7.11803 10.0398ZM10.4244 16.25C9.86179 16.25 9.34602 15.9638 9.04206 15.4723L5.90784 10.3866L0.769565 7.17314C0.215802 6.82633 -0.0736101 6.2087 0.0161238 5.55955C0.105049 4.91039 0.550485 4.39462 1.1762 4.21111L13.671 0.552236C14.2458 0.384086 14.8618 0.543343 15.2854 0.965335C15.709 1.39137 15.8667 2.01385 15.6953 2.59105L11.9984 15.0762C11.8133 15.7043 11.2959 16.1481 10.6484 16.2346C10.5724 16.2443 10.4988 16.25 10.4244 16.25Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      form: {
        email: '',
      },
      cachedForm: {},
    }
  },
  mounted() {
    this.cachedForm = { ...this.form }
  },
})
</script>

<style scoped>
.disabled {
  @apply opacity-50;
  @apply cursor-not-allowed;
}

input#mce-EMAIL::placeholder {
  color: #fff;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 300;
}
</style>
