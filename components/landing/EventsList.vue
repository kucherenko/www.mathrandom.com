<script setup lang="ts">

import type { CommunityEvent } from "~/types/community-event";
import EventPreview from "~/components/landing/EventPreview.vue";

const { events } = defineProps<{
  events: CommunityEvent[]
}>()



</script>

<template>
  <ul class="divide-y divide-gray-200 dark:divide-gray-700">
    <li v-for="(event, index) in events" :key="index" class="py-12">
      <EventPreview :event="event"/>
    </li>
  </ul>
</template>
