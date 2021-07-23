<template>
  <div
    class="bg-no-repeat bg-cover p-5 rounded bg-graphite-gray border-l-8 card"
    :class="['bg-hero-' + event.theme, 'border-' + $getThemeColor(event.theme)]"
  >
    <div class="grid grid-cols-1 gap-2">
      <div
        class="w-full flex object-right font-bold"
        :class="'text-' + $getThemeColor(event.theme)"
      >
        <a class="flex items-center" :href="event.link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 mr-1 inline"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
            />
          </svg>
          Video
        </a>
      </div>
      <div>
        <h2 class="text-2xl text-white tracking-tight font-extrabold">
          <a :href="'events/' + event.slug"
            ><span class="block xl:inline">{{ event.title }}</span></a
          >
        </h2>
      </div>
      <div class="mt-3">
        <div
          v-for="(author, index) in event.authors"
          :key="index"
          class="flex items-center mb-3"
        >
          <img
            class="w-16 h-16 border-4 rounded-full mr-4 object-cover"
            :src="author.image"
            :alt="author.name + ' ' + author.title"
          />
          <div>
            <p
              class="text-lg font-bold"
              :class="'text-' + $getThemeColor(event.theme)"
            >
              {{ author.name }}
            </p>
            <p class="text-white text-sm">{{ author.title }}</p>
          </div>
        </div>
      </div>
      <div :class="'text-' + $getThemeColor(event.theme)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 inline"
          :class="'text-' + $getThemeColor(event.theme)"
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
      <div :class="'text-' + $getThemeColor(event.theme)">
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
      <div class="mt-3">
        <a
          :href="'events/' + event.slug"
          class="underline hover:no-underline"
          :class="'text-' + $getThemeColor(event.theme)"
        >
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
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
          More info...
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { CommunityEvent } from '~/models/community-event'

@Component({})
export default class extends Vue {
  @Prop() event: CommunityEvent
}
</script>

<style>
.card {
  min-height: 270px;
}
</style>
