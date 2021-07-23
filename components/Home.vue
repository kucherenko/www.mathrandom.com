<template>
  <div>
    <Header />

    <UpcomingEventCard
      v-if="futureEvents && futureEvents.length === 1"
      :event="futureEvents[0]"
    />

    <div class="my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card
        v-for="(item, index) in pastEvents"
        :key="index"
        :event="item"
        @playVideo="playVideo"
      />
    </div>

    <Subscribe />

    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Header from '~/components/Header.vue'
import UpcomingEventCard from '~/components/UpcomingEventCard.vue'
import { CommunityEvent } from '~/models/community-event'
import Footer from '~/components/Footer.vue'
import Card from '~/components/Card.vue';

@Component({
  components: {
    Card,
    Footer,
    UpcomingEventCard,
    Header,
  },
  props: ['pastEvents', 'futureEvents']
})
export default class extends Vue {
  playVideo(event: CommunityEvent) {
    // eslint-disable-next-line no-console
    console.log(event)
  }
}
</script>
