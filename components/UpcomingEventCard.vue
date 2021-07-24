<template>
  <main class="mx-auto max-w-4xl my-4 text-gray-900">
    <div class="grid grid-cols-4 gap-6 mb-6">
      <div class="col-start-1 col-end-4 text-3xl text-extrabold text-blue-400">
        # Join our upcoming event:
      </div>
    </div>

    <div class="grid grid-cols-4 gap-6">
      <div class="mt-7">
        <div
          v-for="(author, index) in event.authors"
          :key="index"
          class="text-right"
        >
          <AuthorImage
            :color="$getThemeColor(event.theme)"
            :author="author"
            size="s"
          />
          <div>
            <div class="font-bold text-gray-600">{{ author.name }}</div>
            <div class="text-gray-400">{{ author.title }}</div>
          </div>
        </div>
      </div>
      <div class="md:col-span-3">
        <div class="leading-5 align-middle text-gray-500">
          <!-- TODO: make fullsized add-to-calendar link -->
          <!-- TODO: verify SSR of this element -->
          <add-to-calendar
            :title="'Math.random() — ' + event.title"
            :location="event.link"
            :start="new Date(event.edate)"
            :end="new Date(event.edate + 60 * 60 * 1000)"
            :details="event.title + '\n\n' + event.link"
            inline-template
          >
            <google-calendar>
              <IconCalendar classes="h-5 w-5 mr-2 inline float-left" />
            </google-calendar>
          </add-to-calendar>
          {{ eventDate }}
        </div>

        <h2
          class="
            text-2xl
            tracking-tight
            font-bold
            mt-1
            mb-2
            sm:text-3xl
            md:text-4xl
          "
        >
          <a
            class="
              text-black
              animate
              transition
              duration-75
              hover:text-yellow-800
              active:text-yellow-800
            "
            :href="'/events/' + event.slug"
          >
            {{ event.title }}
          </a>
        </h2>

        <div>
          <NuxtContent :document="event" />
        </div>

        <!-- FOOTER -->
        <div class="flex items-center pt-4">
          <!-- info icons -->
          <div class="text-gray-400">
            <div class="inline-block mr-4">
              <IconPin classes="h-6 w-6 mr-1 inline float-left" />
              Online
            </div>

            <div class="inline-block">
              <IconLanguage classes="h-6 w-6 mr-1 inline float-left" />
              {{ event.language }}
            </div>
          </div>

          <div class="flex-grow"></div>

          <a
            :href="'/events/' + event.slug"
            class="
              text-base
              font-bold
              py-3
              px-6
              rounded-md
              text-white
              bg-yellow-500
              shadow
              hover:shadow-md hover:bg-yellow-600
            "
          >
            Register
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { CommunityEvent } from '~/models/community-event'
import { Author } from '~/models/author'
import AuthorImage from '~/components/Author/Image.vue'
import Register from '~/components/Register.vue'

@Component({
  components: { Register, AuthorImage },
})
export default class extends Vue {
  @Prop() event: CommunityEvent

  showRegister = false

  get eventDate() {
    try {
      const dt = new Intl.DateTimeFormat('en-US', {
        dateStyle: 'medium',
        timeStyle: 'long',
      })
      const formatted = dt.format(this.event.edate)
      return formatted
    } catch {
      return new Date(this.event.eventDate).toLocaleString()
    }
  }

  getSize(authors: Array<Author>) {
    if (authors.length === 1) {
      return 'm'
    }
    if (authors.length === 2) {
      return 's'
    }

    return 'xs'
  }
}
</script>

<style>
.slide {
  min-height: 630px;
}

@media only screen and (min-width: 768px) {
  .test {
    min-height: 400px;
  }
}
</style>
