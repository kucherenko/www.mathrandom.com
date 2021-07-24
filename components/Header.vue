<template>
  <div class=" bg-graphite">
    <div class="flex items-center py-5 max-w-4xl mx-auto">
      <a href="/">
        <Logo subcolor="#fcd34d" />
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
          Let's talk tech!
        </div>
      </div>

      <div
        class="
          flex flex-wrap
          justify-center
          font-medium
          leading-5
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
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import Logo from '~/components/Logo/index.vue'

@Component({
  components: { Logo },
})
export default class extends Vue {}
</script>
