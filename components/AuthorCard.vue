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
          <span class="text-gray-500">{{ user.title }}</span>
        </div>

        <div class="text-gray-700 about" v-html="user.about"></div>

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
import Link from '~/components/Link.vue'

@Component({
  components: { AuthorImage, Link },
})
export default class extends Vue {
  @Prop() user: IAuthor
}
</script>

<style>
.about a {
  text-decoration: underline;
}
.about a:hover {
  text-decoration: none;
}
</style>
