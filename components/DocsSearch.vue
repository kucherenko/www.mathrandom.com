<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

const q = ref([])
const showModal = ref(false)

const { data: navigation } = await useAsyncData("navigation", () => fetchContentNavigation())
const { data: files } = useLazyFetch<ParsedContent[]>("/api/search.json", { default: () => [], server: false })

const groups = computed(() => {
  const sources: any[] = []
  let index = 0
  for (const file of files.value) {
    sources.push({
      id: index,
      label: file.title,
      to: file._path,
      icon: file.icon,
    })
    index++
  }
  console.log(navigation.value)
  return [
      { key: 'files', commands: sources },
      // { key: 'navigation', commands: navigation.value },
    ]
})

function onSelect (option: {to?: string, href?: string}) {
  if (option.to) {
    window.open(option.to, '_self')
  }
}
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
      <UCommandPalette
        v-model="q"
        :autoselect="false"
        :groups="groups"
        :fuse="{ resultLimit: 10, fuseOptions: { threshold: 0.1 } }"
        @update:model-value="onSelect"
      />
    </UModal>
  </span>
</template>

