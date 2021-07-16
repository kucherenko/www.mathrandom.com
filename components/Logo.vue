<template>
  <img alt="Math.random() community of engineers" :src="colors[theme]" :class="cls" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class extends Vue {
  colors = {
    1: require("@/assets/img/logos/logo_green.svg"),
    2: require("@/assets/img/logos/logo_lemon.svg"),
    3: require("@/assets/img/logos/logo_red.svg"),
    4: require("@/assets/img/logos/logo_lemon.svg"),
    5: require("@/assets/img/logos/logo_green.svg"),
    6: require("@/assets/img/logos/logo_blue.svg")
  };
  @Prop() theme: number;
  @Prop({ default: "pt-5" }) cls: any;
}
</script>
