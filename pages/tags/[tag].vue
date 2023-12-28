<script setup lang="ts">
const route = useRoute()
const { tag } = route.params

</script>

<template>
  <h1>Tag: {{ tag }}</h1>
</template>
