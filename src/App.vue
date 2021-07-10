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

    <v-app-bar
      app
      elevate-on-scroll
      color="white"
      class="d-flex justify-center align-center app-bar"
    >
    <div class="d-flex header-box justify-center align-center">
       <v-img src="./assets/logotype.png" class="header-logo-img">
        </v-img>
      </div>
      <div class="d-flex justify-center align-center profile-box ">
          <span class="name">
          شهاب عبادی
        </span>
        <v-avatar class="avatar">
          <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
          >
        </v-avatar>
        <i class="fi fi-rr-bell icon"></i>
      </div>
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
import axios from "axios";
export default {
  components: {SideMenu},
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
.app-bar{

}
.side-menu-drawer {
}
.header-box{
}
.header-box .header-logo-img{
  width: 142px;
}
.app-bar .v-toolbar__content{
  width: 100%;
  justify-content: center;
  align-items: center;
}
.profile-box{
  position: absolute;
  height: 100%;
  top:0;
  left: 0;
  margin-left: 70px;
}
.profile-box .name{
  font-size: 16px;
  color: #3e5480;
  font-weight: 500;
  margin-left: 20px;
}
.profile-box .avatar{
  width: 36px;
  min-width: 36px;
  max-width: 36px;
  margin-left: 30px;
}
.app-bar .profile-box .v-avatar{
  width: 36px !important ;
  height: 36px !important;
}
.profile-box .icon{
  font-size: 21px;
  color: #3e5480;
  font-weight: 500;
}
@media screen and (max-width: 1200px){
  .profile-box{
    margin-left: 20px;
  }
  .profile-box .name{
    margin-left: 20px;
  }
  .profile-box .avatar{
    margin-left: 20px;
  }
}
@media screen and (max-width: 350px){
  .header-box .header-logo-img{
    width: 90px;
  }
}
@media screen and (max-width: 320px){
  .header-box .header-logo-img{
    width: 86px;
  }
}
</style>
