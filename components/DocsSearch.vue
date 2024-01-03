<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', { default: () => [], server: false })

const showModal = ref(false)

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
  <span>
    <UButton
      variant="link"
      aria-label="Search"
      @click="showModal = true"
    >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
         class="h-6 w-6 text-gray-900 dark:text-gray-100">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
    </svg>
  </UButton>
  <UModal v-model="showModal">
      <UCard>
        <template #header>
          <UInput :padded="false" placeholder="Search..." variant="none" class="w-full" />
        </template>

        <ul>
          <li>1. TODO: Implement search</li>
          <li>2. Add services</li>
          <li>3. ololo</li>
        </ul>

      </UCard>
    </UModal>
  </span>
</template>

