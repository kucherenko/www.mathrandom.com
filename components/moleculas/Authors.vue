<script setup lang="ts">
import type { Author } from "~/types/author";

const {authors} = defineProps<{
  authors: Author[]
}>();
</script>

<template>
  <div class="p-3 flex">
    <span v-for="(author, index) in authors" :key="index" class="-m-3">
      <img
        :alt="author.name"
        :title="author.name"
        :src="author.image"
        class="w-20 h-20 rounded-full border-amber-400 border-4" />
    </span>
  </div>
</template>
