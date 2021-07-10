<template>
  <div>
    <div v-if="showModal"
         class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-6xl">
        <!--content-->
        <form @submit.prevent="onSubmit">
          <div
            class="border-8 text-white border-graphite rounded-lg shadow-lg relative flex flex-col w-full bg-graphite-gray outline-none focus:outline-none">
            <!--header-->
            <div class="flex items-start justify-between p-5 rounded-t">
              <h3 class="text-3xl font-semibold">
                {{ event.title }}
              </h3>
              <button
                class="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                v-on:click="hideModal()">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <!--body-->
            <div class="relative p-6 flex-auto">
              <label class="block">
                <span class="text-white">Email address</span>
                <input type="email"
                       class="mt-1 text-graphite-gray block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                       placeholder="john@example.com">
              </label>
              <div class="block">
                <div class="mt-2">
                  <div>
                    <label class="inline-flex items-center">
                      <input type="checkbox"
                             class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
                             checked="">
                      <span class="ml-2"> mail me news, events and digests</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <!--footer-->
            <div class="flex items-center justify-end p-6 rounded-b">
              <button
                class="text-hot-red background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button" v-on:click="hideModal()">
                Subscribe & Add to Calendar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div v-if="showModal" @click="hideModal" class="opacity-75 fixed inset-0 z-40 bg-black "></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { CommunityEvent } from "~/models/community-event";

@Component({})
export default class extends Vue {
  @Prop() showModal: boolean = false;
  @Prop() event: CommunityEvent;

  async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.error(e);
    }
  }

  hideModal() {
    this.$emit("hide");
  }
  async onSubmit() {
    try {
      const token = await this.$recaptcha.execute('login')
      console.log('ReCaptcha token:', token)

      // send token to server alongside your form data

    } catch (error) {
      console.log('Login error:', error)
    }
  }
}
</script>
