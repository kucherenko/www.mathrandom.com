<template>
  <div>
    <Header />

    <div class="my-5 max-w-screen-lg mx-auto">
      <UpcomingEventCard
        v-if="futureEvents && futureEvents.length === 1"
        :event="futureEvents[0]"
      />
    </div>

    <div class="bg-gray-800">
      <div class="mx-auto max-w-4xl">

        <div class="text-blue-300 text-3xl py-6">
          # Check out our past events:
        </div>

        <div class="max-w-4xl m-auto grid grid-cols-2 gap-6">
          <Card
            v-for="(item, index) in pastEvents"
            :key="index"
            :event="item"
            @playVideo="playVideo"
          />
        </div>

      </div>
    </div>

    <div class="bg-gray-800">
      <div class="mx-auto max-w-4xl">
        <Subscribe />
        <Footer />
      </div>
    </div>
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
