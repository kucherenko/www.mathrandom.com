import YouTube from 'vue3-youtube'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('YouTube', YouTube)
})
