<script setup lang="ts">

import type { CommunityEvent } from "~/types/community-event";
import EventPreview from "~/components/landing/EventPreview.vue";
import PageTitle from "~/components/moleculas/PageTitle.vue";

const { events } = defineProps<{
  events: CommunityEvent[],
  allEventsLink?: boolean,
}>();


</script>

<template>
  <div class="divide-y divide-gray-200 dark:divide-gray-700">
    <PageTitle heading="Events" description="List of past and upcoming events in Math.random() JavaScript Community"/>
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
