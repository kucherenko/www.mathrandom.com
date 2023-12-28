<script setup lang="ts">
const { tags } = defineProps<{
  tags: string[]
}>();
</script>

<template>
  <div class="flex flex-wrap">
    <a v-for="(tag, index) in tags" :key="index"
      class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      :href="'/tags/' + tag">{{ tag }}</a>
    <a
      class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      href="/tags/next-js">next-js</a>
    <a
      class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      href="/tags/tailwind">tailwind</a>
    <a
      class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      href="/tags/guide">guide</a>
    <a
      class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      href="/tags/feature">feature</a>
  </div>
</template>
