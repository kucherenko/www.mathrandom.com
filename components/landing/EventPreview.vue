<script setup lang="ts">

import type { CommunityEvent } from "~/types/community-event";
import Tags from "~/components/moleculas/Tags.vue";
import Authors from "~/components/moleculas/Authors.vue";

const { event } = defineProps<{
  event: CommunityEvent
}>();
</script>

<template>
  <article>
    <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
      <dl>
        <dt class="sr-only">Event date</dt>
        <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
          <time datetime="2023-08-05T00:00:00.000Z">{{ event.eventDate }}</time>
          <Tags :tags="event.tags || []" />
        </dd>
      </dl>
      <div class="space-y-5 xl:col-span-3">
        <div class="space-y-6">
          <div>
            <h2 class="text-2xl font-bold leading-8 tracking-tight">
              <a class="text-gray-900 dark:text-gray-100"
                 :href="event._path">
                {{ event.title }}
              </a>
            </h2>

          </div>
          <div class="prose max-w-none text-gray-500 dark:text-gray-400">
            {{ event.description }}
          </div>
        </div>
        <Authors :authors="event.authors || []" />
        <div class="text-base font-medium leading-6">
          <a
            class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            :aria-label="'Read more: &quot;'+ event.title + '&quot;'"
            :href="event._path">Read more →</a>
        </div>

      </div>
    </div>
  </article>
</template>
