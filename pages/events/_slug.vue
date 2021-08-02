<template>
  <EventPage :event="event" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ICommunityEvent } from '~/models/community-event'
import EventPage from '~/components/EventPage.vue'

@Component({
  components: { EventPage },
})
export default class extends Vue {
  event: ICommunityEvent

  head() {
    return {
      title: this.event.title + ' - Math.random() Community of engineers',
    }
  }

  async asyncData({ route, $content, error }: any) {
    const [event] = await $content('events')
      .where({
        slug: route.params.slug,
      })
      .fetch()
      .catch((err: any) => {
        // eslint-disable-next-line no-console
        console.log(err)
        error({ statusCode: 404, message: 'Post not found' })
      })
    return {
      event,
    }
  }
}
</script>
