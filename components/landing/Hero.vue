<script setup lang="ts">
import CommunityLinks from "~/components/moleculas/CommunityLinks.vue";
import Subscribe from "~/components/moleculas/Subscribe.vue";
</script>

<template>
  <div class="py-24 sm:py-32 md:py-40 relative">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col"><!--[-->
      <div class="text-center flex flex-col items-center">
        <div class="flex mb-6">
          <span class="text-6xl flex-shrink-0 text-primary">
            🙌
          </span>
        </div>
        <h1
          class="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
          Math.random() JavaScript Community
        </h1>
        <p class="mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300">
        <span>
          Let's talk about JavaScript, TypeScript, Node.js, Deno, Bun and all things related to the web platform.
        </span>
        </p>
        <div class="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center">
          <CommunityLinks />
        </div>
        <Subscribe />
      </div>
    </div>
  </div>
</template>
