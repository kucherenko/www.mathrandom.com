<template>
  <div class="bg-graphite">
    <div class="flex items-center h-16 max-w-4xl mx-auto">
      <a href="/" title="home">
        <Logo />
      </a>

      <div
        class="
          flex flex-column
          items-center
          flex-grow
          justify-center
          text-2xl
          font-medium
          leading-5
          text-white text-center
        "
      >
        <div class="hidden sm:block">Let's talk tech!</div>
      </div>

      <div class="flex flex-wrap gap-6 justify-center whitespace-no-wrap">
        <a
          href="https://t.me/mathrandomcommunity"
          class="rounded-md p-1 hover:bg-gray-700"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="Telegram group"
            src="@/assets/img/icons/telegram.svg"
            class="w-12 h-12"
          />
        </a>

        <a
          href="https://www.youtube.com/c/Mathrandomjavascriptcommunity"
          class="rounded-md p-1 hover:bg-gray-700"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="Youtube channel"
            src="@/assets/img/icons/youtube.svg"
            class="w-12 h-12"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'

@Component({
  components: { Logo },
})
export default class extends Vue {}
</script>
