<script setup lang="ts">
import PageTitle from "~/components/moleculas/PageTitle.vue";
import type { CommunityEvent } from "~/types/community-event";
import UserLinks from "~/components/moleculas/UserLinks.vue";

const { data: about } = await useAsyncData("event", () => queryContent<CommunityEvent>("about").findOne());

</script>

<template>
  <PageTitle heading="About" />
  <UDivider />
  <h2
    class="pt-5 text-2xl tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl">
    Community
  </h2>
  <div class="prose max-w-none pb-8 pt-5 dark:prose-invert">
    <ContentDoc :value="about" />
  </div>
  <h2
    class="text-2xl tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl">
    Team
  </h2>
  <div  v-for="(user, index) in about.team" :key="index" class="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
    <div class="flex flex-col items-center space-x-2 pt-8">
      <UAvatar size="3xl" :src="user.image" :name="user.name" />
      <h3 class="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{{ user.name }}</h3>
      <div class="text-gray-500 dark:text-gray-400">{{user.title}}</div>
      <div class="text-gray-500 dark:text-gray-400">{{user.position}}</div>
      <div class="flex space-x-3 pt-6">
        <UserLinks :links="user.links || []" />
      </div>
    </div>
    <div class="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2" v-html="user.about"></div>
  </div>
</template>
