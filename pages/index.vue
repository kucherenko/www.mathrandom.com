<template>
  <div>
    <Header />
    <VueSlickCarousel v-if="futureEvents && futureEvents.length > 1" :arrows="true" :dots="true">
      <Slide v-for="(item, index) in futureEvents" :key="index" :event="item" />
    </VueSlickCarousel>
    <Slide v-if="futureEvents && futureEvents.length === 1" :event="futureEvents[0]" />
    <Subscribe/>
    <div class="my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card
        v-for="(item, index) in pastEvents"
        :key="index"
        :event="item"
        @playVideo="playVideo"
      />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { Component, Vue } from "nuxt-property-decorator";
import Header from "~/components/Header.vue";
import Slide from "~/components/Slide.vue";
import { CommunityEvent } from "~/models/community-event";
import Footer from "~/components/Footer.vue";
import Modal from "~/components/Modal.vue";

const VueSlickCarousel = require("vue-slick-carousel");

@Component({
  components: {
    Modal,
    Footer,
    Slide,
    Header,
    VueSlickCarousel
  }
})
export default class extends Vue {
  modal = true;

  async asyncData(context: any) {
    const pastEvents = await context
      .$content("events")
      .sortBy("edate", "desc")
      .where({
        edate: { $lt: new Date().getTime() - 60 * 60 * 1000 }
      })
      .fetch()
      .catch((err: any) => {
        console.log(err);
      });
    console.log(pastEvents);
    const futureEvents = await context
      .$content("events")
      .sortBy("edate", "asc")
      .where({
        edate: { $gt: new Date().getTime() + 60 * 60 * 1000 }
      })
      .fetch()
      .catch((err: any) => {
        console.log(err);
      });

    return {
      pastEvents,
      futureEvents
    };
  }

  playVideo(event: CommunityEvent) {
    console.log(event);
  }

  toggleModal() {
    this.modal = !this.modal;
  }
}
</script>

<style>
.slick-dots li button::before {
  color: aliceblue;
}

.slick-dots li.slick-active button::before {
  color: white;
}
</style>
