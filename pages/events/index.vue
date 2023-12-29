<script setup lang="ts">

import type { CommunityEvent } from "~/types/community-event";
import EventsList from "~/components/landing/EventsList.vue";
import Subscribe from "~/components/Subscribe.vue";


const { data: events } = await useAsyncData('events', () => queryContent('events').find(), {
  transform: (events: CommunityEvent[]) => {
    return events.map((c) => {
      return { ...c, date: Date.parse(c.eventDate) }
    }).sort((first, second) => {
      return first.date < second.date ? 1 : -1
    })
  },
})

</script>

<template>
  <div>
    <EventsList title="Events" description="List of past and upcoming events in Math.random() JavaScript Community" :events="events || []"/>
    <Subscribe />
  </div>
</template>
