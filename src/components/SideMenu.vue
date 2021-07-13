<template>
  <div class="side-menu">
    <div class="menu-logo">
      <img
        src="../assets/image/logo.png"
        alt="logo"
        class="logo-image"
      >
    </div>
    <div class="menu-items">
      <ul class="menu-items-list">
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          class="menu-item "
        >
          <div
            v-if="$route.name===item.routeName"
            class="menu-indicator"
          />
          <router-link
            :to="{name: item.routeName} "
          >
            <i
              class="fi"
              :class="['fi-rr-' + item.icon , $route.name===item.routeName ? 'activate' :'']"
            />
          </router-link>
        </li>
      </ul>
    </div>
    <div class="power-item">
      <div
        v-if="$route.name==='Home'"
        class="menu-indicator"
      />
      <router-link
        :to="{name: 'Home'}"
      >
        <i
          class="fi fi-rr-power"
          :class="[$route.name==='Home' ? 'activate' :'']"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  data() {
    return {
      isActive:null,
      menuItems: [
        {
          icon: 'home',
          routeName: 'Home',
        },
        {
          icon: 'play-alt',
          routeName: 'UserAbrishamProgress',
        },
        {
          icon: 'calendar',
          routeName: 'Schedule',
        },
        {
          icon: 'headphones',
          routeName: 'Home',
        },
        {
          icon: 'list-check',
          routeName: 'Home',

        },
        {
          icon: 'stats',
          routeName: 'Home',
        },
        {
          icon: 'envelope',
          routeName: 'Home',
        },
       {
          icon: 'world',
          routeName: 'Home',
        },
      ]
    }
  },
  methods:{
    }

}
</script>

<style>

.menu-logo {
  text-align: center;
  margin: 30px auto 130px ;
  height: 70px;
  line-height: 70px;
}
.menu-logo .logo-image{
  width: 70px;
  height: 70px;
  line-height: 70px;

}
@media screen and (max-width: 1200px){
  .menu-logo {
    text-align: center;
    margin: 20px auto 76px ;
    height: 60px;
    line-height: 60px;
  }
  .menu-logo .logo-image{
    width: 60px;
    height: 60px;
  }

  .menu-items .menu-items-list .menu-item{
    list-style: none;
    margin-bottom:16px !important;
    text-align: center;
    vertical-align: middle
  }
  .menu-items .menu-item .fi{
    color: #b1ccee;
    font-size: 23px;
  }
}
@media screen and (max-width: 990px){
  .menu-logo {
    text-align: center;
    margin: 20px auto 66px ;
    height: 50px;
    line-height: 50px;
  }
  .menu-logo .logo-image{
    width: 50px;
    height: 50px;
  }

  .menu-items .menu-items-list .menu-item{
    list-style: none;
    margin-bottom:10px !important;
    text-align: center;


  }
  .menu-items .menu-item .fi{
    color: #b1ccee;
    font-size: 23px;
  }
}

.menu-items{
  position: relative;
}

.menu-items .menu-items-list{
  position: relative;
  padding: 0;
}

.menu-items .menu-items-list .menu-item{
  list-style: none;
  margin-bottom: 26px;
  text-align: center;

}
.menu-items .menu-items-list .menu-item .activate , .side-menu .power-item .activate{
  color: #ff8f00 !important;
}


 .side-menu .menu-indicator{
  position: absolute;
  height: 36px;
  width: 8px;
  background-color:#ff8f00 ;
  border: none;
  border-radius:6px 0 0 6px;
}
.menu-items .menu-items-list .menu-item a {
  text-decoration: none;
}

.menu-items .menu-item .fi{
  color: #b1ccee;
  font-size: 26px;
  position: relative;
  top: 5px;

}
.side-menu .power-item{
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 0;
}

.side-menu .power-item a{
  text-decoration: none;
}
.side-menu .power-item .fi{
  color: #b1ccee;
  font-size: 26px;
  position: relative;
  top: 5px;

}

</style>
