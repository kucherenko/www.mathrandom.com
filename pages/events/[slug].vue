<script setup lang="ts">
import Tags from "~/components/moleculas/Tags.vue";
import AuthorsList from "~/components/moleculas/AuthorsList.vue";
import type { CommunityEvent } from "~/types/community-event";

const { params } = useRoute<any>();
const { data } = await useAsyncData('event', () => queryContent<CommunityEvent>('events', params.slug).findOne())
const event = data.value
if (!event) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}
</script>

<template>
  <section class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
    <div class="fixed bottom-8 right-8 hidden flex-col gap-3 md:hidden">
      <button aria-label="Scroll To Top"
              class="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600">
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
                d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
    <article>
      <div class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
        <header class="pt-6 xl:pb-6">
          <div class="space-y-1 text-center">
            <dl class="space-y-10">
              <div>
                <dt class="sr-only">Published on</dt>
                <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time datetime="2023-08-05T00:00:00.000Z">{{ event.eventDate }}</time>
                </dd>
              </div>
            </dl>
            <div>
              <h1
              class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                {{ event.title }}
              </h1>
            </div>
          </div>
        </header>
        <div
          class="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
          <dl class="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
            <dt class="sr-only">Authors</dt>
            <dd>
              <AuthorsList :authors="event.authors || []"/>
            </dd>
          </dl>
          <div class="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
            <div class="prose max-w-none p-10 dark:prose-invert">
              <div>
                <YouTube :src="event.link"/>
              </div>
              <ContentRenderer :value="event"/>
            </div>
          </div>
          <footer>
            <div
              class="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
              <div class="py-4 xl:py-8"><h2 class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Tags</h2>
                <Tags :tags="event.tags || []"/>
              </div>
            </div>
            <div class="pt-4 xl:pt-8"><a class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                         aria-label="Back to the blog" href="/events">← Back to the events</a></div>
          </footer>
        </div>
      </div>
    </article>
  </section>

</template>
