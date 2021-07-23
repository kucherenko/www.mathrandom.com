<template>
  <div>
    <div
      v-if="showModal"
      class="
        overflow-x-hidden overflow-y-auto
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        justify-center
        items-center
        flex
      "
    >
      <div class="relative w-auto my-6 mx-auto max-w-6xl">
        <!--content-->
        <form @submit.prevent="onSubmit">
          <div
            class="
              border-8
              text-white
              border-graphite
              rounded-lg
              shadow-lg
              relative
              flex flex-col
              w-full
              bg-graphite-gray
              outline-none
              focus:outline-none
            "
          >
            <!--header-->
            <div class="flex items-start justify-between p-5 rounded-t">
              <h3 class="text-3xl font-semibold">
                {{ event.title }}
              </h3>
              <button
                class="
                  p-1
                  ml-auto
                  bg-transparent
                  border-0
                  text-black
                  float-right
                  text-3xl
                  leading-none
                  font-semibold
                  outline-none
                  focus:outline-none
                "
                @click="hideModal()"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <!--body-->
            <div class="relative p-6 flex-auto">
              <label v-if="step === 1" class="block">
                <p v-if="serverError" class="text-hot-red mb-2">
                  Server error, can't subscribe to the list, try again.
                </p>
                <span class="text-white">Email address</span>
                <input
                  v-model="email"
                  type="email"
                  class="
                    mt-1
                    text-graphite-gray
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                  "
                  :class="{ 'border-4 border-hot-red': isEmailError }"
                  placeholder="john@example.com"
                />
              </label>
              <div v-if="step === 1" class="block">
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
                      <span class="ml-2">
                        mail me news, events and digests</span
                      >
                    </label>
                  </div>
                </div>
              </div>
              <div v-if="step === 2" class="block p-3 transition lg:p-6">
                <add-to-calendar
                  :title="'Math.random() community event'"
                  :location="event.link"
                  :start="new Date(event.edate)"
                  :end="new Date(event.edate + 60 * 60 * 1000)"
                  :details="event.title + '\n\n' + event.link"
                  inline-template
                >
                  <div class="grid grid-cols-2 gap-4">
                    <google-calendar id="google-calendar">
                      <img
                        src="@/assets/img/icons/google-calendar.svg"
                        class="inline w-20 h-20"
                      />
                      Add to Google calendar
                    </google-calendar>

                    <microsoft-calendar id="microsoft-calendar">
                      <img
                        src="@/assets/img/icons/outlook.svg"
                        class="inline w-20 h-20"
                      />
                      Add to Microsoft live calendar
                    </microsoft-calendar>

                    <office365-calendar id="office365-calendar">
                      <img
                        src="@/assets/img/icons/office-365.svg"
                        class="inline w-20 h-20"
                      />
                      Add to Office365 outlook calendar
                    </office365-calendar>
                    <div>
                      <a :href="location">
                        <img
                          src="@/assets/img/icons/youtube.svg"
                          class="inline w-20 h-20"
                        />
                        Add Youtube Notification
                      </a>
                    </div>
                  </div>
                </add-to-calendar>
              </div>
            </div>
            <!--footer-->
            <div class="flex items-center justify-end p-6 rounded-b">
              <button
                v-if="step === 1"
                class="
                  text-hot-red
                  background-transparent
                  font-bold
                  uppercase
                  px-6
                  py-2
                  text-sm
                  outline-none
                  focus:outline-none
                  mr-1
                  mb-1
                  ease-linear
                  transition-all
                  duration-150
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
                Subscribe & Add to Calendar
              </button>
              <button
                v-if="step === 2"
                class="
                  text-hot-red
                  background-transparent
                  font-bold
                  uppercase
                  px-6
                  py-2
                  text-sm
                  outline-none
                  focus:outline-none
                  mr-1
                  mb-1
                  ease-linear
                  transition-all
                  duration-150
                "
                type="button"
                @click.prevent="hideModal"
              >
                Close
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div
      v-if="showModal"
      class="opacity-75 fixed inset-0 z-40 bg-black"
      @click="hideModal"
    ></div>
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
