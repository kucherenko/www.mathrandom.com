<template>
  <EventPage :event="event" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ICommunityEvent } from '~/models/community-event'
import EventPage from '~/components/pages/EventPage.vue'

@Component({
  components: { EventPage },
})
export default class extends Vue {
  event: ICommunityEvent

  head() {
    return {
      title: this.event.title + ' - Math.random() Community of engineers',
      meta: this.event.card
        ? [
            { hid: 'og-type', property: 'og:type', content: 'website' },
            {
              hid: 'og-title',
              property: 'og:title',
              content: this.event.title,
            },
            {
              hid: 'og-desc',
              property: 'og:description',
              content: this.event.description,
            },
            { hid: 'og-image', property: 'og:image', content: this.event.card },
            {
              hid: 't-type',
              name: 'twitter:card',
              content: 'summary_large_image',
            },
          ]
        : [],
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
