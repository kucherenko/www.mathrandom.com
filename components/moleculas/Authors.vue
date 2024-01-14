<script setup lang="ts">
import type { Author } from "~/types/author";

const {authors} = defineProps<{
  authors: Author[]
}>();
</script>

<template>
  <UAvatarGroup size="3xl" :max="5">
      <UAvatar
        v-for="(author, index) in authors"
        :key="index"
        :alt="author.name"
        size="3xl"
        :chip-text="author.name"
        :src="author.image"
      />
  </UAvatarGroup>
</template>
