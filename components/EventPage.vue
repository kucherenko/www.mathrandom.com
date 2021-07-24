<template>
  <div>
    <Header />

    <div class="max-w-4xl mx-auto py-24">

      <!-- INFO ICONS -->
      <div class="text-gray-500 flex gap-3">
        <div class="inline-block">
          <IconCalendar />
          {{ new Date(event.eventDate).toLocaleString() }}
        </div>
      </div>

      <main class="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-4">

        <!-- LEFT SIDE -->
        <div class="col-span-2">

          <h1
            class="
              text-xl
              tracking-tight
              font-bold
              mt-1
              mb-2
              sm:text-2xl
              md:text-3xl
            "
          >
            {{ event.title }}
          </h1>

          <div>
            <NuxtContent
              class="prose-sm sm:prose lg:prose-lg xl:prose-2xl"
              :document="event"
            />
          </div>

          <div class="text-gray-500">
            <div class="inline-block">
              <IconPin />
              <a :href="event.link">Online</a>
            </div>

            <div class="inline-block">
              <IconLanguage />
              {{ event.language }}
            </div>
          </div>

        </div>

        <!-- RIGHT SIDE -->
        <div class="col-span-3">

          <!-- YOUTUBE -->
          <!-- TODO: implicitly set height -->
          <div
            v-if="getYoutubeId()"
            class="mx-auto overflow-hidden rounded-md"
          >
            <youtube width="100%" :video-id="getYoutubeId()"></youtube>
          </div>

          <!-- REGISTER -->
          <div
            v-if="event.edate > new Date().getTime() + 60 * 60 * 1000"
            class="mt-4 p-4 bg-blue-100 rounded-md"
          >
            <div>
              <h2>REGISTER</h2>

              <input id="register" class="border-3 border-blue-400" />
            </div>

            <a
              href="#"
              class="
                w-full
                flex
                items-center
                justify-center
                py-3
                border border-transparent
                text-base
                shadow
                font-bold
                uppercase
                rounded-md
                text-graphite-gray
                md:py-4
                md:text-lg
                md:px-10
              "
              @click.prevent="showRegister = true"
            >
              Register
            </a>

            <Register
              :show-modal="showRegister"
              :event="event"
              @hide="showRegister = false"
            />
          </div>

        </div>

      </main>

      <div class="flex flex-col gap-4 mt-4">
        <AuthorCard
          v-for="(author, index) in event.authors"
          :key="index"
          :user="author"
        />
      </div>

      <div class="text-8xl pt-32 text-center">
        🙌
      </div>

    </div>

    <div class="bg-gray-800">
      <div class="mx-auto max-w-4xl">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { CommunityEvent } from '~/models/community-event'
import AuthorCard from '~/components/AuthorCard.vue'

const { Youtube } = require('vue-youtube')

@Component({
  components: { AuthorCard, Youtube },
})
export default class extends Vue {
  @Prop() event: CommunityEvent

  showRegister = false

  getYoutubeId() {
    const regExp =
      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = this.event.link.match(regExp)
    if (match && match[2].length === 11) {
      return match[2]
    } else {
      // error
    }
  }
}
</script>
