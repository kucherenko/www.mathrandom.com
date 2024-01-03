<script setup lang="ts">
import { appDescription, appName } from "~/constants";

useHead({
  title: appName,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: appDescription
    },
    {
      hid: 'og:description',
      name: 'og:description',
      content: appDescription
    },
    {
      hid: 'og:image',
      name: 'og:image',
      content: 'https://mathrandomjs.com/images/og.png'
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: appDescription
    }
  ]
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
