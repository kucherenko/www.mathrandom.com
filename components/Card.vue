<template>
  <a
    :href="'events/' + event.slug"
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
    <div class="min-w-max">
      <div
        v-for="(author, index) in event.authors"
        :key="index"
        class="block"
        :class="{ '-mt-7': index }"
      >
        <AuthorImage :author="author" size="xs" />
      </div>
    </div>

    <div class="flex flex-col justify-center">
      <h2 class="text-2xl tracking-tight font-extrabold">
        {{ event.title }}
      </h2>
      <div>
        <div class="inline-block mr-4 text-gray-400">
          <IconCalendar />
          {{ eventDate }}
        </div>

        <div class="inline-block text-gray-400">
          <IconLanguage />
          {{ event.language }}
        </div>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import AuthorImage from './AuthorImage.vue'
import IconCalendar from './Icon/Calendar.vue'
import IconLanguage from './Icon/Language.vue'
import IconPin from './Icon/Pin.vue'
import { ICommunityEvent } from '~/models/community-event'

@Component({
  components: { IconCalendar, IconLanguage, IconPin, AuthorImage },
})
export default class Card extends Vue {
  @Prop() event: ICommunityEvent

  get eventDate() {
    try {
      const dt = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' })
      const formatted = dt.format(this.event.edate)
      return formatted
    } catch {
      return new Date(this.event.eventDate).toLocaleString()
    }
  }
}
</script>

<style>
.card {
  min-height: 270px;
}
</style>
