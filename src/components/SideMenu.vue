<template>
  <div>
    <div class="menu-logo">
      logo
    </div>
    <div class="menu-items">
      <div
        v-for="(item, index) in menuItems"
        :key="index"
        class="menu-item"
      >
        <v-btn :to="{name: item.routeName}">
          {{ item.icon }}
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
  data () {
    return {
      menuItems: [
        {
          icon: 'home',
          routeName: 'Home'
        },
        {
          icon: 'Schedule',
          routeName: 'Schedule'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
