<template>
  <a
    :href="'/events/' + event.slug + '/'"
    class="
      p-3
      flex
      items-center
      gap-4
      rounded
      bg-white
      text-gray-900
      shadow-md
      border-4 border-solid border-transparent
      hover:border-blue-300 hover:shadow-lg
      active:border-blue-300 active:shadow-lg
    "
  >
    <span class="min-w-max">
      <span
        v-for="(author, index) in event.authors"
        :key="index"
        class="block"
        :class="{ '-mt-7': index }"
      >
        <AuthorImage :author="author" size="xs" />
      </span>
    </span>

    <span class="flex flex-col justify-center">
      <h2 class="text-2xl tracking-tight font-extrabold">
        {{ event.title }}
      </h2>
      <span class="block">
        <span class="inline-block mr-4 text-gray-400">
          <IconCalendar />
          {{ eventDateFormatted }}
        </span>

        <span class="inline-block text-gray-400">
          <IconLanguage />
          {{ event.language }}
        </span>
      </span>
    </span>
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import AuthorImage from './AuthorImage.vue'
import IconCalendar from './Icon/Calendar.vue'
import IconLanguage from './Icon/Language.vue'
import IconPin from './Icon/Pin.vue'
import { ICommunityEvent } from '~/models/community-event'
import { displayDate } from '~/src/shared/dates'

@Component({
  components: { IconCalendar, IconLanguage, IconPin, AuthorImage },
})
export default class Card extends Vue {
  @Prop() event: ICommunityEvent

  get eventDateFormatted() {
    if (!this.event.edate) return
    return displayDate(this.event.edate, false)
  }
}
</script>
