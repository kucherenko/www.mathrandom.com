<script setup lang="ts">
const { tags } = defineProps<{
  tags: string[]
}>();
</script>

<template>
  <div class="flex flex-wrap">
    <a v-for="(tag, index) in tags" :key="index"
      class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      :href="'/tags/' + tag">{{ tag }}
    </a>
  </div>
</template>
