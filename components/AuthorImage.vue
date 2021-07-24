<template>
  <img
    class="rounded-full object-cover border-yellow-300 inline"
    :class="{
      'w-16 h-16 border-4': size === 'xs',
      'w-24 h-24 xl:w-24 xl:h-24 md:w-24 md:h-24 xs:w-24 xs:h-24 border-4':
        size === 's',
      'w-32 h-32 xl:w-40 xl:h-40 md:w-32 md:h-32 xs:w-24 xs:h-24 border-8':
        size === 'm',
      'w-32 h-32 xl:w-48 xl:h-48 md:w-32 md:h-32 xs:w-24 xs:h-24 border-8':
        size === 'l',
    }"
    :src="author.image"
    :alt="author.name + ' ' + author.title"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { IAuthor } from '~/models/author'

@Component({})
export default class AuthorImage extends Vue {
  @Prop() author: IAuthor
  @Prop() size: string
}
</script>
