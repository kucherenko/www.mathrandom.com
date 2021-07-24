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
          flex flex-wrap gap-6
          justify-center
          whitespace-no-wrap
        "
      >
        <a
          href="https://t.me/mathrandomcommunity"
          class="flex items-center"
        >
          <img alt="Telegram group" src="@/assets/img/icons/telegram.svg" class="w-12 h-12" />
        </a>
        <a
          href="https://www.youtube.com/c/Mathrandomjavascriptcommunity"
          class="flex items-center"
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
