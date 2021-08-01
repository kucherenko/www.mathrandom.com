<template>
  <div class="flex-grow bg-gray-800">
    <main>
      <div v-if="futureEvents.length" class="my-5 text-gray-900">
        <Section>
          <div class="mb-6 text-3xl text-extrabold text-blue-400">
            # Join our upcoming
            {{ futureEvents.length == 1 ? 'event' : 'events' }}:
          </div>

          <div v-for="event in futureEvents" :key="event.slug" class="my-6">
            <UpcomingEventCard :event="event" />
          </div>
        </Section>
      </div>

      <div class="py-8">
        <Section>
          <Subscribe />
        </Section>
      </div>

      <div class="bg-gray-800 py-6">
        <Section>
          <div class="text-blue-300 text-3xl pb-6">
            # Check out our past events:
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              v-for="(item, index) in pastEvents"
              :key="index"
              :event="item"
            />
          </div>
        </Section>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import Subscribe from './Subscribe.vue'
import Section from './Section.vue'
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
    Section,
  },
})
export default class HomePage extends Vue {
  @Prop({ required: true }) pastEvents: ICommunityEvent[]
  @Prop({ required: true }) futureEvents: ICommunityEvent[]
}
</script>
