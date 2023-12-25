<template>
  <span>
    <span v-if="number === 1">⚀</span>
    <span v-if="number === 2">⚁</span>
    <span v-if="number === 3">⚂</span>
    <span v-if="number === 4">⚃</span>
    <span v-if="number === 5">⚄</span>
    <span v-if="number === 6">⚅</span>
    <span v-if="number < 1 || number > 6">🎲</span>
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Dice extends Vue {
  @Prop() number: number
}
</script>
