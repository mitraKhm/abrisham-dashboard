<template>
  <div>
    <div class="menu-logo">
      logo
    </div>
    <div class="menu-items">
      <ul
        v-for="(item, index) in menuItems"
        :key="index"
        class="menu-item"
      >
        <li>
          <router-link :to="{name: item.routeName}">
            <i
              class="fi"
              :class="('fi-rr-' + item.icon)"
            />
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
  data() {
    return {
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
      ]
    }
  }
}
</script>

<style>
.menu-logo{
  margin: 0 22px 130px 0;
}
.menu-items .menu-item a{
  text-decoration: none;
  color: #b1ccee;
  width: 24px;
  height: 24px;
}


</style>
