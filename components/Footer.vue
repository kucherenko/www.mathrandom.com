<script setup lang="ts">
import CommunityLinks from "~/components/moleculas/CommunityLinks.vue";

const year = new Date().getFullYear()
</script>

<template>
  <footer>
    <div class="mt-16 flex flex-col items-center">
      <div class="mb-3 flex space-x-4">
        <CommunityLinks />
      </div>
      <div class="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <div>Math.random(): JavaScript Community</div>
        <div> •</div>
        <div>© 2020-{{year}}</div>
      </div>
    </div>
  </footer>
</template>

