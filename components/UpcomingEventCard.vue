<template>
  <div class="grid grid-cols-4 gap-6">
    <div class="mt-7">
      <div
        v-for="(author, index) in event.authors"
        :key="index"
        class="text-right"
      >
        <AuthorImage :author="author" :size="getSize" />
        <div>
          <div class="font-bold text-gray-600">{{ author.name }}</div>
          <div class="text-gray-500">{{ author.title }}</div>
        </div>
      </div>
    </div>

    <div class="col-span-3">
      <div class="leading-5 align-middle text-gray-600">
        <IconCalendar classes="h-5 w-5 mr-2 inline float-left" />
        {{ eventDateString }}
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
          :href="'/events/' + event.slug + '/'"
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
        <div class="text-gray-500">
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
          :href="'/events/' + event.slug + '/'"
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
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { ICommunityEvent } from '~/models/community-event'
import AuthorImage from '~/components/AuthorImage.vue'
import Register from '~/components/Register.vue'
import IconPin from '~/components/Icon/Pin.vue'
import IconLanguage from '~/components/Icon/Language.vue'
import IconCalendar from '~/components/Icon/Calendar.vue'
import { displayDate } from '~/src/shared/dates'

@Component({
  components: { Register, AuthorImage, IconPin, IconLanguage, IconCalendar },
})
export default class extends Vue {
  @Prop() event: ICommunityEvent

  get eventDateString() {
    if (!this.event.edate) return
    return displayDate(this.event.edate, true)
  }

  get getSize() {
    if (this.event.authors.length > 1) {
      return 'xs'
    }

    return 's'
  }
}
</script>
