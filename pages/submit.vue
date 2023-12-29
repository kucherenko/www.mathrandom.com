<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', { default: () => [], server: false })

const { toggleDocsSearch } = useUIState()

const links = [{
  label: 'Documentation',
  icon: 'i-heroicons-book-open',
  to: '/getting-started'
}, {
  label: 'Playground',
  icon: 'i-simple-icons-stackblitz',
  to: '/playground'
}, {
  label: 'Roadmap',
  icon: 'i-heroicons-academic-cap',
  to: '/roadmap'
}, {
  label: 'Pro',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '/pro'
}, {
  label: 'Releases',
  icon: 'i-heroicons-rocket-launch',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}]

const ui = /*ui*/ {
  background: 'bg-white dark:bg-slate-900'
}

</script>

<template>
  <UCard :ui="ui">
    <UButton color="indigo" @click="toggleDocsSearch" variant="outline">Button</UButton>
  </UCard>

  <ClientOnly>
    <LazyUDocsSearch :files="files" :navigation="navigation || []" :links="links" />
  </ClientOnly>

</template>

