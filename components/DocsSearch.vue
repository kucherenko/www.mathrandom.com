<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', { default: () => [], server: false })

const links = [{
  label: 'Events',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '/events'
}, {
  label: 'Tags',
  icon: 'i-simple-icons-stackblitz',
  to: '/tags'
}, {
  label: 'About',
  icon: 'i-heroicons-academic-cap',
  to: '/about'
}, {
  label: 'Submit your talk',
  icon: 'i-heroicons-book-open',
  to: '/submit'
}]
</script>

<template>
  <ClientOnly>
    <h1>Docs Search</h1>
  </ClientOnly>
</template>

