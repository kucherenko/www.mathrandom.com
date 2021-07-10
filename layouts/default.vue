<template>
  <div class="bg-graphite min-h-screen p-2">
    <div class="container mx-auto">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class extends Vue {
  modal = false

  toggleModal() {
    this.modal = !this.modal;
  }
}
</script>
