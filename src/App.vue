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
        <expansion-menu v-if=" windowSize.x <=350" />
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
import ExpansionMenu from "./components/ExpansionMenu";
import axios from "axios";
export default {
  components: {SideMenu , AppBar , ExpansionMenu},
  data(){
    return {
    }
  },
  computed: {
    windowSize () {
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
  created() {
    this.login()
  },
  methods: {
    login () {
      const access_token = window.localStorage.getItem('access_token')
      if (!access_token) {
        axios.post('/api/v2/login', {mobile: '09358745928', password: '0014258269'})
            .then(response => {
              window.localStorage.setItem('access_token', response.data.data.access_token)
              axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.data.access_token
            })
      }
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token
    },
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
