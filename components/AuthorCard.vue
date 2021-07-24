<template>
  <div class="flex flex-col min-w-full">
    <div class="flex gap-2">
      <div>
        <div class="w-16">
          <AuthorImage :author="user" size="xs" />
        </div>
      </div>

      <div class="flex flex-col">
        <div class="text-lg">
          <span class="font-bold text-gray-600">
            {{ user.name }}
          </span>
          <span class="text-gray-400">{{ user.title }}</span>
        </div>

        <div class="text-gray-700">
          {{ user.about }}
        </div>

        <div class="flex flex-row gap-3 mt-2 text-2xl text-gray-400">
          <Link
            v-for="(link, index) in user.links"
            :key="index"
            :source="link"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import AuthorImage from './AuthorImage.vue'
import { IAuthor } from '~/models/author'

@Component({
  components: { AuthorImage },
})
export default class extends Vue {
  @Prop() user: IAuthor
}
</script>
