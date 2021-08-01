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

        <div class="text-8xl mt-32">🤞</div>
      </div>
    </Section>
  </div>
</template>

<script>
import Section from '~/components/Section.vue'

export default {
  // you can set a custom layout for the error page
  components: { Section },
  layout: 'error',
  props: ['error'],
  computed: {
    code() {
      return this.error.statusCode
    },
  },
}
</script>
