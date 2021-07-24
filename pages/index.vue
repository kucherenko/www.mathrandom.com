<template>
  <Home :past-events="pastEvents" :future-events="futureEvents" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Home from '~/components/Home.vue'

@Component({
  components: {
    Home,
  },
})
export default class extends Vue {
  modal = true

  async asyncData(context: any) {
    const pastEvents = await context
      .$content('events')
      .sortBy('edate', 'desc')
      .where({
        edate: { $lt: new Date().getTime() - 60 * 60 * 1000 },
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
