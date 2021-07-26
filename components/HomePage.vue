<template>
  <div>
    <Header />

    <div v-if="futureEvents.length" class="my-5 max-w-screen-lg mx-auto">
      <main class="mx-auto max-w-4xl my-4 text-gray-900">
        <div
          class="
            mb-6
            col-start-1 col-end-4
            text-3xl text-extrabold text-blue-400
          "
        >
          # Join our upcoming
          {{ futureEvents.length == 1 ? 'event' : 'events' }}:
        </div>

        <div v-for="event in futureEvents" :key="event.slug" class="my-6">
          <UpcomingEventCard :event="event" />
        </div>
      </main>
    </div>

    <div class="bg-gray-800 py-6">
      <div class="mx-auto max-w-4xl">
        <div class="text-blue-300 text-3xl pb-6">
          # Check out our past events:
        </div>

        <div class="max-w-4xl m-auto grid grid-cols-2 gap-6">
          <Card
            v-for="(item, index) in pastEvents"
            :key="index"
            :event="item"
          />
        </div>
      </div>
    </div>

    <div class="bg-gray-800">
      <div class="mx-auto max-w-4xl py-8">
        <Subscribe />
      </div>
    </div>

    <div class="bg-gray-800">
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import Subscribe from './Subscribe.vue'
import Header from '~/components/Header.vue'
import UpcomingEventCard from '~/components/UpcomingEventCard.vue'
import Footer from '~/components/Footer.vue'
import Card from '~/components/Card.vue'
import { ICommunityEvent } from '~/models/community-event'

@Component({
  components: {
    Card,
    Footer,
    UpcomingEventCard,
    Header,
    Subscribe,
  },
})
export default class HomePage extends Vue {
  @Prop({ required: true }) pastEvents: ICommunityEvent[]
  @Prop({ required: true }) futureEvents: ICommunityEvent[]
}
</script>
