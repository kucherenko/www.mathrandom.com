<template>
  <div class="my-3">
    <div
      class="
        flex flex-col
        bg-dark-gray
        min-w-full
        shadow-md
        py-8
        px-8
        rounded-md
      "
    >
      <div class="flex flex-col flex-row gap-8">
        <img
          class="rounded-full border-4 h-24 w-24 mx-auto object-cover"
          :src="user.image"
          :alt="user.name"
        />
        <div class="flex flex-col text-center text-left">
          <div class="font-medium text-lg font-bold" :class="'text-' + color">
            {{ user.name }}
          </div>
          <div class="text-white font-bold mb-3">{{ user.title }}</div>
          <div class="text-white">
            {{ user.about }}
          </div>
          <div class="flex flex-row gap-4 my-auto text-2xl mx-auto mx-0 mt-3">
            <Link
              v-for="(link, index) in user.links"
              :key="index"
              :source="link"
              :color="color"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Author } from '~/models/author'

@Component({})
export default class extends Vue {
  @Prop() user: Author
  @Prop() color: string
}
</script>
