<template>
  <!-- App.vue -->
  <v-app>
    <v-navigation-drawer app right :width="130">
      <side-menu />
    </v-navigation-drawer>

    <v-app-bar app elevate-on-scroll>
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view/>
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
  components: {SideMenu}
}
</script>

<style lang="scss">
.v-application {
  &,
  .title,
  .text-lg-h1,
  .text-lg-h2,
  .text-lg-h3,
  .text-lg-h4,
  .text-lg-h5,
  .text-lg-h6 {
    font-family: IRANSans, "Roboto", sans-serif !important;
  }
}
</style>
