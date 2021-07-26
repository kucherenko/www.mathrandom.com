<template>
  <div>
    <div class="bg-graphite">
      <Section>
        <Header />
      </Section>
    </div>

    <Nuxt />

    <div class="bg-gray-800">
      <Section>
        <Footer />
      </Section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Section from '~/components/Section.vue'

@Component({
  components: {
    Footer,
    Header,
    Section,
  },
})
export default class LayoutDefault extends Vue {}
</script>
