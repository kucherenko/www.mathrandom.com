<!-- this is a visual section, that has a limited width -->
<!-- NOTE: this is not really an html5 <section>, so we might want to rename it -->

<template>
  <div class="max-w-screen-lg mx-auto px-4">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Section extends Vue {}
</script>
