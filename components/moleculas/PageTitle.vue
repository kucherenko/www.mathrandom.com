<script setup lang="ts">
  import { useHead } from "#imports";

  const { heading, description } = defineProps<{
    heading: string
    description?: string
  }>()
</script>

<template>
  <div v-if="heading" class="space-y-2 pb-8 pt-6 md:space-y-5">
    <h1
      class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
      {{ heading }}
    </h1>
    <p v-if="description" class="text-lg leading-7 text-gray-500 dark:text-gray-400">
      {{ description }}
    </p>
  </div>
</template>
