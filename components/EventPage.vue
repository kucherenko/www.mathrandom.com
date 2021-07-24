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

      <main class="grid grid-cols-1 md:grid-cols-5 gap-4">
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

          <div class="mt-2 text-gray-400">
            <div class="inline-block mr-2">
              <IconPin />
              Online
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
          <!-- TODO: implicitly set proper height -->
          <div
            v-if="getYoutubeId()"
            class="mx-auto overflow-hidden rounded-md"
            style="height: 360px"
          >
            <youtube width="100%" :video-id="getYoutubeId()"></youtube>
          </div>

          <!-- REGISTER -->
          <div
            v-if="event.edate > new Date().getTime() + 60 * 60 * 1000"
            class="mt-4 p-4 bg-gray-100 rounded-md"
          >
            <Register :event="event" />
          </div>
        </div>
      </main>

      <div class="flex flex-col my-8 gap-4">
        <AuthorCard
          v-for="(author, index) in event.authors"
          :key="index"
          :user="author"
        />
      </div>

      <div class="text-8xl mt-32 text-center">🙌</div>
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
import AuthorCard from '~/components/AuthorCard.vue'
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'
import IconCalendar from '~/components/Icon/Calendar.vue'
import IconLanguage from '~/components/Icon/Language.vue'
import IconPin from '~/components/Icon/Pin.vue'
import Register from '~/components/Register.vue'
import { ICommunityEvent } from '~/models/community-event'

const { Youtube } = require('vue-youtube')

@Component({
  components: { AuthorCard, Header, Footer, Register, IconPin, IconLanguage, IconCalendar, Youtube },
})
export default class EventPage extends Vue {
  @Prop() event: ICommunityEvent

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
