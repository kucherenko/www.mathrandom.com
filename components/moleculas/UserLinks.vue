<script setup lang="ts">
const {links, size} = defineProps<{
  links: string[],
  size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl"
}>();

function getIcon(link: string) {
  if (link.includes("mailto:")) {
    return "i-heroicons-envelope";
  }
  if (link.includes("github.com")) {
    return "i-fa6-brands-github";
  }
  if (link.includes("t.me")) {
    return "i-fa6-brands-telegram";
  }
  if (link.includes("twitter")) {
    return "i-fa6-brands-twitter";
  }
  if (link.includes("facebook")) {
    return "i-fa6-brands-facebook";
  }
  if (link.includes("speakerdeck")) {
    return "i-fa6-brands-speaker-deck";
  }
  if (link.includes("medium")) {
    return "i-fa6-brands-medium";
  }
  if (link.includes("youtube")) {
    return "i-fa6-brands-youtube";
  }
  if (link.includes("meetup")) {
    return "i-fa6-brands-meetup";
  }
  if (link.includes("linkedin")) {
    return "i-fa6-brands-linkedin";
  }
  if (link.includes("producthunt")) {
    return "i-fa6-brands-product-hunt";
  }
  if (link.includes("patreon")) {
    return "i-fa6-brands-patreon";
  }
  if (link.includes("twitch")) {
    return "i-fa6-brands-twitch";
  }
  if (link.includes("npm")) {
    return "i-fa6-brands-npm";
  }
  if (link.includes("instagram")) {
    return "i-fa6-brands-instagram";
  }
  if (link.includes("tiktok")) {
    return "i-fa6-brands-tiktok";
  }
  if (link.includes("vk.com")) {
    return "i-fa6-brands-vk";
  }
  return "i-heroicons-link-16-solid";
}

</script>

<template>
  <UButtonGroup :size="size || 'xl'">
    <UButton
      color="gray"
      v-for="(link, index) in links"
      :to="link"
      target="_blank"
      :key="index"
      :icon="getIcon(link)"
      variant="link"
    />
  </UButtonGroup>
</template>
