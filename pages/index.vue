<template>
  <HomePage :past-events="pastEvents" :future-events="futureEvents" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import HomePage from '~/components/pages/HomePage.vue'

@Component({
  components: { HomePage },
})
export default class extends Vue {
  async asyncData(context: any) {
    const pastEvents = await context
      .$content('events')
      .sortBy('edate', 'desc')
      .where({
        edate: { $lt: new Date().getTime() - 60 * 60 * 1000 },
        hidden: { $ne: true },
      })
      .fetch()
      .catch((err: any) => {
        // eslint-disable-next-line no-console
        console.log(err)
      })

    const futureEvents = await context
      .$content('events')
      .sortBy('edate', 'asc')
      .where({
        edate: { $gt: new Date().getTime() + 60 * 60 * 1000 },
        hidden: { $ne: true },
      })
      .fetch()
      .catch((err: any) => {
        // eslint-disable-next-line no-console
        console.log(err)
      })

    return {
      pastEvents,
      futureEvents,
    }
  }
}
</script>
