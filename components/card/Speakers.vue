<script setup lang="ts">
import type { Author } from "~/types/author";

const { authors } = defineProps<{
  authors: Author[]
}>();
</script>

<template>
  <dl>
    <dd v-for="(author, index) in authors" :key="index" class="content-center text-center items-center">
      <ul class="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
        <li class="flex items-center space-x-2">
          <img
            :alt="author.name"
            loading="lazy"
            width="38" height="38"
            decoding="async"
            data-nimg="1"
            :src="author.image"
            class="h-10 w-10 rounded-full"
          />
          <dl class="whitespace-nowrap text-sm font-medium leading-5">
            <dd class="text-">{{ author.name }}</dd>
            <dd>
                <span class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                  {{ author.title }}
                </span>
            </dd>
          </dl>
        </li>
      </ul>
    </dd>
  </dl>
</template>
