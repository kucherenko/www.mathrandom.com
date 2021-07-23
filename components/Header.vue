<template>
  <div class="flex pt-5">
    <a href="/">
      <LogoRed />
    </a>

    <div class="
      flex
      flex-column
      items-center
      flex-grow
      justify-center
      text-2xl
      font-medium
      leading-5
      text-white
      text-center
    ">
      <div class="hidden sm:block">
        We love technologies.
      </div>
    </div>

    <div
      class="
        flex flex-wrap
        justify-center
        font-medium
        leading-5
        text-blue-100
        whitespace-no-wrap
        xl:justify-start
      "
    >
      <a
        href="https://t.me/mathrandomcommunity"
        class="
          flex
          items-center
          mx-3
          sm:mx-4
          xl:ml-0 xl:mr-8
        "
      >
        <img alt="Telegram group" src="@/assets/img/icons/telegram.svg" class="w-12 h-12" />
      </a>
      <a
        href="https://www.youtube.com/c/Mathrandomjavascriptcommunity"
        class="
          flex
          items-center
          mx-3
          sm:mx-4
          xl:ml-0 xl:mr-8
        "
      >
        <img alt="Youtube channel" src="@/assets/img/icons/youtube.svg" class="w-12 h-12" />
      </a>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import LogoRed from '~/components/Logo/LogoRed.vue'

@Component({
  components: { LogoRed },
})
export default class extends Vue {}
</script>
