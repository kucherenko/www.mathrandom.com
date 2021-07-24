<template>
  <div
    class="
      mx-auto
      max-w-4xl
      px-4
      sm:px-6
      lg:px-8
      flex flex-wrap
      items-start
      sm:pt-4
    "
  >
    <div
      class="
        flex flex-col
        w-full
        mx-auto
        mt-10
        item-start
        sm:w-auto sm:space-y-2
      "
    >
      <div class="mt-4 text-center text-xl text-white mb-2">
        <div>Subscribe to our future events and news.</div>
        <div>No ads, no spam, just events.</div>
      </div>

      <form class="flex flex-col w-full">
        <input type="hidden" name="form-name" value="wickedUpdates" />
        <div class="flex flex-col w-full gap-2 md:justify-start md:flex-row">
          <div class="relative">
            <input
              v-model="email"
              type="email"
              name="email"
              placeholder="email@example"
              :class="{ 'border-hot-red': isEmailError }"
              class="
                border-4 border-transparent
                flex-grow
                w-full
                px-4
                py-2
                mb-4
                text-base text-black
                transition
                ease-in-out
                transform
                bg-white
                rounded-md
                duration-650
                lg:w-auto
                focus:outline-none focus:border-graphite-gray
                sm:mb-0
                focus:bg-white focus:shadow-outline focus:ring-2
                ring-offset-current ring-offset-2
              "
            />
          </div>
          <button
            type="submit"
            class="
              border-4 border-transparent
              flex
              items-center
              px-6
              py-2
              mt-auto
              font-semibold
              transition
              duration-500
              ease-in-out
              transform
              text-graphite-gray
              bg-blue-300
              rounded-md
              uppercase
              focus:shadow-outline focus:outline-none focus:ring-2
              ring-offset-current ring-offset-2
            "
            @click.prevent="onSubmit"
          >
            <svg
              v-if="loader"
              class="animate-spin mr-1 h-5 w-5 text-graphite-gray inline"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Subscribe
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

const { validate } = require('isemail')

@Component({})
export default class Subscribe extends Vue {
  isEmailError = false
  serverError = false
  email = ''
  loader = false

  $recaptcha: any

  async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  }

  async onSubmit() {
    this.isEmailError = validate(this.email, { errorLevel: true }) !== 0
    if (!this.isEmailError) {
      this.serverError = false
      this.loader = true
      try {
        const token = await this.$recaptcha.execute('subscribe')
        await this.$axios.post('/api/v1/subscribe', {
          token,
          email: this.email,
        })
        this.loader = false
      } catch (error) {
        this.loader = false
        this.serverError = true
      }
    }
  }
}
</script>
