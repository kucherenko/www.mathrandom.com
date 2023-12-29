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
        <div class="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center">

          <div class="flex content-center items-center justify-between text-sm"><label
            class="block font-medium text-gray-700 dark:text-gray-200" for="sbscrb">Subscribe to our
            newsletter</label>
          </div>
          <div class="mt-1 relative">
            <div class="relative">
              <input
                id="sbscrb"
                name="email"
                type="email"
                class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-3.5 py-2.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 pe-11"
              >
              <span
                class="absolute inset-y-0 end-0 flex items-center px-3.5">
                  <button type="submit"
                          class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-xs gap-x-1 px-2 py-1 shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center">
                    <span>Subscribe</span>
                  </button>
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import CommunityLinks from "~/components/moleculas/CommunityLinks.vue";
</script>
