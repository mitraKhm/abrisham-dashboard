<template>
  <div>
    <div class="menu-logo">
      <img
        src="../assets/image/logo.png"
        alt="logo"
        class="logo-image"
      >
    </div>
    <div class="menu-items">
      <ul>
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          class="menu-item"
        >
          <div class="menu-indicator" />
          <router-link
            :to="{name: item.routeName} "
          >
            <i
              class="fi"
              :class="('fi-rr-' + item.icon)"
            />
          </router-link>
        </li>
      </ul>
      <div class="powerItem">
        <router-link :to="{name: powerItem.routeName}">
          <i
            class="fi"
            :class="('fi-rr-' + powerItem[0].icon)"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
  data() {
    return {
      selectedItem: false,
      menuItems: [
        {
          icon: 'home',
          routeName: 'Home'
        },
        {
          icon: 'play-alt',
          routeName: 'Schedule'
        },
        {
          icon: 'calendar',
          routeName: 'Home'
        },
        {
          icon: 'headphones',
          routeName: 'Home'
        },
        {
          icon: 'list-check',
          routeName: 'Home'
        },
        {
          icon: 'stats',
          routeName: 'Home'
        },
        {
          icon: 'envelope',
          routeName: 'Home'
        },
       {
          icon: 'world',
          routeName: 'Home'
        },
      ],
      powerItem: [
        {
          icon: 'power',
          routeName: 'Home'
        }
      ],

    }
  }
}
</script>

<style>
.menu-logo {
  justify-content: center;
  text-align: center;
  margin: 30px auto 130px ;
}
.menu-logo .logo-image{
  width: 70px;
  height: 70px;

}
.menu-items{
  /*position: relative;*/
  /*overflow:visible;*/
}
.menu-items .menu-item{
  list-style: none;
  margin-bottom: 26px;
  text-align: center;

}
.menu-items .menu-item-selected{
  color: #ff8f00;
}
.menu-items .menu-item .menu-indicator{
  height: 36px;
  width: 8px;
  background-color:#ff8f00 ;
  border: none;
  border-radius:6px 0 0 6px;
}
.menu-items .menu-item a {
  text-decoration: none;
}

.menu-items .menu-item .fi{
  color: #b1ccee;
  font-size: 26px;
}
.powerItem{
  position: absolute;
  bottom: -169px;
  align-items: center;
}

.powerItem a{
  text-decoration: none;
}
.powerItem .fi{
  color: #b1ccee;
  font-size: 26px;
}





</style>
