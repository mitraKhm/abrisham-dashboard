<template>
  <div id="animation" />
</template>

<script>
import lottie from 'lottie-web'
export default {
  components: {
  },
  name: 'ComingSoon',
  mounted() {
    lottie.loadAnimation({
      container: document.querySelector('#animation'),
      // path: '/animations/coming_soon_desktop/data.json',
      path: '/animations/coming_soon_mob/data.json',
      renderer: 'svg',
      loop: true,
      autoplay: true,
      name: 'Demo Animation',
      // assetsPath: '/animations/coming_soon_desktop/images'
      assetsPath: '/animations/coming_soon_mob/images'
    });
  }
}
</script>

<style scoped>
#animation {
  width: 200px;
}
</style>
