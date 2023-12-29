<script setup lang="ts">
import { appName } from '~/constants'

useHead({
  title: appName,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Let\'s talk about JavaScript, TypeScript, Node.js, Deno, Bun and all things related to the web platform.'
    },
    {
      hid: 'og:description',
      name: 'og:description',
      content: 'Let\'s talk about JavaScript, TypeScript, Node.js, Deno, Bun and all things related to the web platform.'
    },
    {
      hid: 'og:image',
      name: 'og:image',
      content: 'https://mathrandomjs.com/images/og.png'
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: 'Let\'s talk about JavaScript, TypeScript, Node.js, Deno, Bun and all things related to the web platform.'
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

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
