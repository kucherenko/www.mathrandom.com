<template>
  <div>
    <Header />
    <Slide :event="event"></Slide>
    <div class="mt-10">Footer!</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class extends Vue {
  async asyncData({ route, $content }: any) {
    const event = await $content('events')
      .where({
        slug: route.params.slug,
      })
      .fetch()
      .catch((err: any) => {
        console.log(err)
      })
    return {
      event,
    }
  }
}
</script>
