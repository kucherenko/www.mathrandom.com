<template>
  <div
    class="bg-no-repeat bg-cover rounded bg-graphite-gray slide"
    :class="'bg-hero-' + event.theme"
  >
    <main class="mt-5 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="w-full">
        <Logo :theme="event.theme" />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-4">
        <div class="md:col-span-2 test">
          <h1
            class="
              text-4xl
              pt-10
              pb-3
              text-white
              tracking-tight
              font-extrabold
              sm:text-5xl
              md:text-6xl
            "
          >
            <span class="block xl:inline">{{ event.title }}</span>
          </h1>
          <div
            class="flex gap-4 whitespace-nowrap font-bold"
            :class="'text-' + $getThemeColor(event.theme)"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {{ new Date(event.eventDate).toLocaleString() }}
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <a :href="event.link">Online</a>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
              {{ event.language }}
            </div>
          </div>
          <div class="my-5 text-white">
            <div
              v-if="event.edate > new Date().getTime() + 60 * 60 * 1000"
              class="my-3 sm:mt-0"
            >
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
                  md:py-4 md:text-lg md:px-10
                "
                :class="'bg-' + $getThemeColor(event.theme)"
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
            <div class="mx-auto p-3 bg-dark-gray rounded-md">
              <youtube width="100%" :video-id="getYoutubeId()"></youtube>
            </div>
            <NuxtContent
              class="
                p-3
                prose prose-sm
                sm:prose
                lg:prose-lg
                xl:prose-2xl
                mx-auto
              "
              :document="event"
            />
          </div>
        </div>
        <div class="object-center text-center grid gap-4">
          <AuthorCard
            v-for="(author, index) in event.authors"
            :key="index"
            :color="$getThemeColor(event.theme)"
            :user="author"
          />
        </div>
      </div>
    </main>
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
