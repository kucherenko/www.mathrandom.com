<template>
  <EventPage :event="event" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { CommunityEvent } from '~/models/community-event'
import EventPage from '~/components/EventPage.vue'

@Component({
  components: { EventPage },
})
export default class extends Vue {
  event: CommunityEvent

  head() {
    return {
      title: this.event.title + ' - Math.random() Community of engineers',
    }
  }

  async asyncData({ route, $content }: any) {
    const [event] = await $content('events')
      .where({
        slug: route.params.slug,
      })
      .fetch()
      .catch((err: any) => {
        // eslint-disable-next-line no-console
        console.log(err)
      })
    return {
      event,
    }
  }
}
</script>
