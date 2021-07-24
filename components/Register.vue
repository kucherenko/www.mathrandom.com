<template>
  <div>
    <div>
      <div class="relative w-auto mx-auto">

        <!--STEP 1-->
        <form v-if="step === 1" @submit.prevent="onSubmit">
          <!--body-->
          <div class="relative flex gap-2">
            <label class="block flex-grow">
              <input
                v-model="email"
                type="email"
                name="email"
                class="
                  text-graphite-gray
                  block
                  w-full
                  rounded-md
                  border-2
                  border-gray-300
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                "
                :class="{ 'border-hot-red': isEmailError }"
                placeholder="john@example.com"
              />
            </label>

            <button
              v-if="step === 1"
              class="
                text-base
                font-bold
                px-6
                rounded-md
                text-white
                bg-yellow-500
                shadow
                hover:shadow-md
                hover:bg-yellow-600
              "
              type="submit"
            >
              <svg
                v-if="loader"
                class="animate-spin mb-1 mr-3 h-5 w-5 text-gray-500 inline"
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
              Register
            </button>
          </div>

          <div class="block">
            <div class="mt-2">
              <div>
                <label class="inline-flex items-center">
                  <input
                    v-model="subscribeGlobal"
                    type="checkbox"
                    class="
                      rounded
                      border-gray-300
                      text-indigo-600
                      shadow-sm
                      focus:border-indigo-300
                      focus:ring
                      focus:ring-offset-0
                      focus:ring-indigo-200
                      focus:ring-opacity-50
                    "
                    checked=""
                  />
                  <span class="ml-2"> mail me news, events and digests</span>
                </label>
              </div>
            </div>
          </div>

          <p v-if="serverError" class="text-red-600 py-2">
            Server error. Please, try again
          </p>

          <p v-if="isEmailError" class="text-red-600 py-2">
            Sorry, we couldn't recognize your email
          </p>
        </form>

        <!-- STEP 2 -->
        <div v-if="step === 2" class="block text-gray-800 transition">
          <div class="text-lg font-bold mb-4">
            We'll notify you about the event, see you there!
          </div>

          <add-to-calendar
            :title="'Math.random() community event'"
            :location="event.link"
            :start="new Date(event.edate)"
            :end="new Date(event.edate + 60 * 60 * 1000)"
            :details="event.title + '\n\n' + event.link"
            inline-template
          >
            <div class="grid grid-cols-2 gap-4 text-center text-sm">

              <google-calendar id="google-calendar">
                <div class="bg-white p-2 rounded-md shadow-md">
                  <div>
                    <img
                      src="@/assets/img/icons/google-calendar.svg"
                      class="inline w-12 h-12"
                    />
                  </div>
                  Add to Google calendar
                </div>
              </google-calendar>

              <microsoft-calendar id="microsoft-calendar">
                <div class="bg-white p-2 rounded-md shadow-md">
                  <div>
                    <img
                      src="@/assets/img/icons/outlook.svg"
                      class="inline w-12 h-12"
                    />
                  </div>
                  Add to Microsoft live calendar
                </div>
              </microsoft-calendar>

              <office365-calendar id="office365-calendar">
                <div class="bg-white p-2 rounded-md shadow-md">
                  <div>
                    <img
                      src="@/assets/img/icons/office-365.svg"
                      class="inline w-12 h-12"
                    />
                  </div>
                  Add to Office365 outlook calendar
                </div>
              </office365-calendar>

              <div class="bg-white p-2 rounded-md shadow-md">
                <a :href="location">
                  <div>
                    <img
                      src="@/assets/img/icons/youtube.svg"
                      class="inline w-12 h-12"
                    />
                  </div>
                  Add Youtube Notification
                </a>
              </div>

            </div>
          </add-to-calendar>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { CommunityEvent } from '~/models/community-event'

const { validate } = require('isemail')

@Component({})
export default class extends Vue {
  @Prop() showModal: boolean
  @Prop() event: CommunityEvent
  $recaptcha: any

  email = ''
  subscribeGlobal = true
  isEmailError = false
  serverError = false
  loader = false
  step = 1

  async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  }

  private setDefaults() {
    this.email = ''
    this.subscribeGlobal = true
    this.isEmailError = false
    this.serverError = false
    this.loader = false
    this.step = 1
  }

  hideModal() {
    this.setDefaults()
    this.$emit('hide')
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
          listId: this.event.listId,
          subscribeGlobal: this.subscribeGlobal,
        })
        this.step = 2
        this.loader = false
      } catch (error) {
        this.loader = false
        this.serverError = true
      }
    }
  }

  beforeDestroy() {
    this.$recaptcha.destroy()
  }
}
</script>
