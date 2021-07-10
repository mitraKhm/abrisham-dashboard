<template>
  <!-- App.vue -->
  <v-app v-resize="onResize">
    <v-navigation-drawer
      app
      right
      disable-resize-watcher
      permanent
      :width="drawerSize"
    >
      <side-menu />
    </v-navigation-drawer>
      <app-bar
      :width="windowSize"
      />
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
import AppBar  from "./components/AppBar";
import SideMenu from "./components/SideMenu";
export default {
  components: {SideMenu , AppBar},
  computed: {
    windowSize () {
      console.log('size :' ,this.$store.getters['windowSize'])
      return this.$store.getters['windowSize']
    },
    drawerSize () {
      if (this.windowSize.x <= 990) {
        return 80
      } else
      if (this.windowSize.x <= 1200) {
        return 100
      } else
      if (this.windowSize.x <= 1920) {
        return 130
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
@media screen and (max-width: 1200px){

}
@media screen and (max-width: 350px){

}
@media screen and (max-width: 320px){

}
</style>
