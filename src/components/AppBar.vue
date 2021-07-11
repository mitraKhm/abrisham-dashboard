<template>
  <v-app-bar
    app
    elevate-on-scroll
    color="white"
    class="d-flex justify-center align-center app-bar"
  >
    <div class="d-flex header-box justify-center align-center">
      <v-img
        src="@/assets/logotype.png"
        class="header-logo-img"
      />
    </div>
    <div class="d-flex justify-center align-center profile-box ">
      <span
        v-if="width.x > 350"
        class="name"
      >
        شهاب عبادی
      </span>
      <v-avatar
        v-if="width.x > 350"
        class="avatar"
      >
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        >
      </v-avatar>
      <i class="fi fi-rr-bell icon" />

      <div
        v-if="width.x <= 350"
        class="text-center"
      >
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <i
              v-bind="attrs"
              class="fi fi-rr-menu-dots-vertical icon"
              v-on="on"
            />
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                >
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title> شهاب عبادی</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  props:{
    width: {
      type:Object,
      default (){
        return {}
      }
    },
  },
  data(){
    return {
      items:[
        { title: 'Click Me' },
        { title: 'Click Me' },
       ],
    }
  }
}
</script>

<style >
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