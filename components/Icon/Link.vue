<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="inline h-4 w-4"
    :class="classes"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
    />
  </svg>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({ props: ['classes'] })
export default class IconLink extends Vue {}
</script>
