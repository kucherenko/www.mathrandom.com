<template>
  <a :href="source.href ? source.href : source" :class="'text-'+color">
<!--    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" :class="'text-'+color" fill="none" viewBox="0 0 24 24"-->
<!--         stroke="currentColor">-->
<!--      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
<!--            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />-->
<!--    </svg>-->
    <font-awesome-icon :icon="getIcon(source.href ? source.href : source)"></font-awesome-icon>
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { Link } from "~/models/link";

@Component({})
export default class extends Vue {
  @Prop() source: Link | string;
  @Prop() color: string;

  getIcon(url) {
    if (url.indexOf('twitter') !== -1) {
      return ['fab', 'twitter'];
    }
    if (url.indexOf('github') !== -1) {
      return ['fab', 'github'];
    }
    if (url.indexOf('facebook') !== -1) {
      return ['fab', 'facebook'];
    }
    if (url.indexOf('speakerdeck') !== -1) {
      return ['fab', 'speaker-deck'];
    }
    if (url.indexOf('medium') !== -1) {
      return ['fab', 'medium'];
    }
    if (url.indexOf('t.me') !== -1) {
      return ['fab', 'telegram'];
    }
    if (url.indexOf('youtube') !== -1) {
      return ['fab', 'youtube'];
    }
    if (url.indexOf('meetup') !== -1) {
      return ['fab', 'meetup'];
    }
    if (url.indexOf('linkedin') !== -1) {
      return ['fab', 'linkedin'];
    }
    if (url.indexOf('producthunt') !== -1) {
      return ['fab', 'product-hunt'];
    }
    if (url.indexOf('patreon') !== -1) {
      return ['fab', 'patreon'];
    }
    if (url.indexOf('npm') !== -1) {
      return ['fab', 'npm'];
    }
    return ['fas', 'external-link-alt'];
  }
}
</script>
