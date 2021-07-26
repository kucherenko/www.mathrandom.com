<template>
  <a
    :href="source.href ? source.href : source"
    rel="noopener noreferrer"
    target="_blank"
    class="hover:text-blue-500"
  >
    <font-awesome-icon
      :icon="getIcon(source.href ? source.href : source)"
    ></font-awesome-icon>
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { ILink } from '~/models/link'

@Component({})
export default class Link extends Vue {
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
