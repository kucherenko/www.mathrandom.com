<template>
  <a :href="source.href ? source.href : source" class="hover:text-blue-500">
    <!--    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" :class="'text-'+color" fill="none" viewBox="0 0 24 24"-->
    <!--         stroke="currentColor">-->
    <!--      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
    <!--            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />-->
    <!--    </svg>-->
    <font-awesome-icon
      :icon="getIcon(source.href ? source.href : source)"
    ></font-awesome-icon>
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { ILink } from '~/models/link'

@Component({})
export default class link extends Vue {
  @Prop() source: ILink | string
  @Prop() color: string

  getIcon(url: string) {
    if (url.includes('twitter')) {
      return ['fab', 'twitter']
    }
    if (url.includes('github')) {
      return ['fab', 'github']
    }
    if (url.includes('facebook')) {
      return ['fab', 'facebook']
    }
    if (url.includes('speakerdeck')) {
      return ['fab', 'speaker-deck']
    }
    if (url.includes('medium')) {
      return ['fab', 'medium']
    }
    if (url.includes('t.me')) {
      return ['fab', 'telegram']
    }
    if (url.includes('youtube')) {
      return ['fab', 'youtube']
    }
    if (url.includes('meetup')) {
      return ['fab', 'meetup']
    }
    if (url.includes('linkedin')) {
      return ['fab', 'linkedin']
    }
    if (url.includes('producthunt')) {
      return ['fab', 'product-hunt']
    }
    if (url.includes('patreon')) {
      return ['fab', 'patreon']
    }
    if (url.includes('npm')) {
      return ['fab', 'npm']
    }
    if (url.includes('instagram')) {
      return ['fab', 'instagram']
    }
    if (url.includes('tiktok')) {
      return ['fab', 'tiktok']
    }
    if (url.includes('vk.com')) {
      return ['fab', 'vk']
    }
    return ['fas', 'external-link-alt']
  }
}
</script>
