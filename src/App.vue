<template>
  <!-- App.vue -->
  <v-app v-resize="onResize">
    <v-navigation-drawer
      app
      right
      :width="drawerSize"
    >
      <side-menu />
    </v-navigation-drawer>

    <v-app-bar
      app
      elevate-on-scroll
    >
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view />
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import "./assets/Fonts/Flaticons/css/uicons-regular-rounded.css"
import "./assets/Fonts/IRANSans/css/font.scss"
import SideMenu from "./components/SideMenu";
export default {
  components: {SideMenu},
  computed: {
    windowSize () {
      return this.$store.getters['windowSize']
    },
    drawerSize () {
      if (this.windowSize.x > 1920) {
        return 130
      } else
      if (this.windowSize.x > 1200) {
        return 100
      } else
      if (this.windowSize.x > 990) {
        return 80
      }

      return 80
    }
  },
  methods: {
    onResize () {
      this.$store.commit('updateWindowSize', { x: window.innerWidth, y: window.innerHeight })
    },
  }
}
</script>

<style lang="scss">
.side-menu-drawer {

}
</style>
