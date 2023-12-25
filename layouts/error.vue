<template>
  <div class="flex-grow bg-gray-800 text-white">
    <Section>
      <div class="text-2xl text-center pt-16">
        <h1 class="text-8xl text-gray-100">{{ code }}</h1>

        <div class="text-gray-300 mt-8">
          `<code>git push --force</code>`
          <span class="block sm:inline">never ends well. Sorry.</span>
        </div>

        <div class="text-gray-300 mt-4">
          Try heading to our
          <NuxtLink to="/" class="text-white underline hover:text-blue-300"
            >home page</NuxtLink
          >,
          <span class="block sm:inline">it should still work.</span>
        </div>
        <div class="m-10">
          <h1 style="font-size: 100px">
            <Dice v-for="(slot, index) in slots" :number="slot" :key="index" />
          </h1>
        </div>
        <div class="m-10">
          <button class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="button" @click="generateSlots">Random</button>
        </div>
        <div class="text-8xl mt-32">🤞</div>
      </div>
    </Section>
  </div>
</template>

<script>
import Section from '~/components/Section.vue'
import Dice from '~/components/Dice.vue'

export default {
  data() {
    return {
      slots: [],
    };
  },
  // you can set a custom layout for the error page
  components: { Section, Dice },
  layout: 'error',
  props: ['error'],

  computed: {
    code() {
      return this.error.statusCode
    },
  },

  created() {
    this.generateSlots()
  },

  methods: {
    generateSlots() {
      this.slots = []
      for (let i = 0; i < 5; i++) {
        this.slots.push(Math.floor(Math.random() * 6) + 1)
      }
    },
  },
}
</script>
