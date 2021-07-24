<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="inline w-4 h-4"
    :class="classes"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
    />
  </svg>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({ props: ['classes'] })
export default class IconVideo extends Vue {}
</script>
