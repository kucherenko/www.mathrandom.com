<script setup lang="ts">

import type { CommunityEvent } from "~/types/community-event";
import EventPreview from "~/components/landing/EventPreview.vue";

const { events } = defineProps<{
  events: CommunityEvent[],
  title?: string,
  description?: string,
  allEventsLink?: boolean,
}>();


</script>

<template>
  <div class="divide-y divide-gray-200 dark:divide-gray-700">
    <div v-if="title" class="space-y-2 pb-8 pt-6 md:space-y-5">
      <h1
        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
        {{ title }}
      </h1>
      <p v-if="description" class="text-lg leading-7 text-gray-500 dark:text-gray-400">{{ description }}</p>
    </div>
    <ul class="divide-y divide-gray-200 dark:divide-gray-700">
      <li v-for="(event, index) in events" :key="index" class="py-12">
        <EventPreview :event="event" />
      </li>
    </ul>
  </div>
  <div v-if="allEventsLink" class="flex justify-end text-base font-medium leading-6">
    <a
      class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      aria-label="All events"
      href="/events"
    >
      All Events →
    </a>
  </div>
</template>
