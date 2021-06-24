<template>
  <div>
    <Header />
    <Slide />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Hero from '~/components/Hero.vue'
import Header from '~/components/Header.vue'
import Slide from '~/components/Slide.vue'

export default Vue.extend({
  components: { Slide, Header, Hero },
})
</script>
