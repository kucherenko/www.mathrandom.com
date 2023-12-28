<script setup lang="ts">
  import type { Author } from "~/types/author";
  import Link from "~/components/moleculas/Link.vue";

  const { authors } = defineProps<{
    authors: Author[]
  }>();
</script>

<template>
  <ul class="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
    <li v-for="(author, index) in authors" :key="index" class="flex items-center space-x-2">
      <dl>
        <dd>
          <img alt="avatar" loading="lazy" width="38" height="38"
               decoding="async" data-nimg="1"
               class="h-16 w-16 rounded-full border-amber-400 border-4"
               :src="author.image"
               style="color: transparent;">
          <dl class="whitespace-nowrap text-sm font-medium leading-5">
            <dt class="sr-only">Name</dt>
            <dd class="text-xl font-extrabold">{{ author.name }}</dd>
            <dt v-if="author.links && author.links.length" class="sr-only">Links</dt>
            <dd>
              <Link v-for="(link, i) in author.links" :href="link"/>
            </dd>
          </dl>
        </dd>
        <dt class="sr-only">Title</dt>
        <dd>
          <div class="font-extrabold">
            {{author.title}}
          </div>
        </dd>
        <dt class="sr-only">About</dt>
        <dd v-html="author.about"></dd>
      </dl>


    </li>
  </ul>
</template>
