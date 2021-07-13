<template>
  <v-card
    class="rounded-lg expansion-panel-menu"
  >
    <template>
      <v-expansion-panels
        flat
      >
        <v-expansion-panel>
          <v-expansion-panel-header
            flat
          >
            <i
              class="fi menu-header-icon"
              :class="'fi-rr-' + headerData[0].icon"
            />
            <p class="menu-header-text">
              {{ headerData[0].title }}
            </p>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list>
              <template
                v-for="(i , index) in listData"
              >
                <v-divider
                  :key="index"
                />
                <v-list-item
                  :key="index"
                  class="menu-header-text"
                  @click="changeSelectedItem(i)"
                >
                  <v-list-item-icon>
                    <i
                      class="fi"
                      :class="'fi-rr-'+ i.icon"
                    />
                  </v-list-item-icon>
                  <v-list-item-title>
                    {{ i.title }}
                  </v-list-item-title>
                  <v-divider
                    v-if="index < listData.length - 1"
                    :key="index"
                  />
                </v-list-item>
              </template>
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </template>
  </v-card>
</template>

<script>
export default {
  name: 'ExpansionMenu',
  data() {
    return {
      menuItems: [
        {
          id: 1,
          title: 'خانه',
          icon: 'home',
          routeName: 'Home',
          selected: true
        },
        {
          id: 2,
          title: 'فیلم ها',
          icon: 'play-alt',
          routeName: 'UserAbrishamProgress',
          selected: false
        },
        {
          id: 3,
          title: 'برنامه مطالعاتی',
          icon: 'calendar',
          routeName: 'Schedule',
          selected: false
        },
        {
          id: 4,
          title: 'مشاوره',
          icon: 'headphones',
          routeName: 'Home',
          selected: false
        },
        {
          id: 5,
          title: 'عملکرد من',
          icon: 'list-check',
          routeName: 'Home',
          selected: false
        },
        {
          id: 6,
          title: 'ارزیابی',
          icon: 'stats',
          routeName: 'Home',
          selected: false
        },
        {
          id: 7,
          title: 'اخبار و اطلاعیه',
          icon: 'envelope',
          routeName: 'Home',
          selected: false
        },
        {
          id: 8,
          title: 'نقشه راه ابریشم',
          icon: 'world',
          routeName: 'Home',
          selected: false
        },
      ],
      headerData: {},
      listData: {}
    }
  },
  created() {
    this.updateHeaderData()
    this.updateList()
  },
  methods: {
    changeSelectedItem(selected) {
      this.menuItems.map(i => {
        if (i.id === selected.id) {
          return i.selected = true
        }
        return i.selected = false
      })
      // this.$router.push( name : selected.routeName )
      this.updateHeaderData()
      this.updateList()
    this.$route
    },
    updateHeaderData() {
      this.headerData = this.menuItems.filter(item => {
        return item.selected
      })
    },
    updateList() {
      this.listData = this.menuItems.filter(item => {
        return !item.selected
      })
    }
  }
}
</script>

<style scoped>
.expansion-panel-menu .menu-header-icon{
  color:#ff8f00;
  font-size: 18px;
}
.expansion-panel-menu .v-list-item__title{
  color: #3e5480;
  font-size: 14px;
  font-weight: 500;
}
.v-list-item__icon{
  color: #b1ccee;
  font-size: 18px;
}
.expansion-panel-menu  .v-expansion-panel .v-expansion-panel-content .v-expansion-panel-content__wrap .v-list .v-list-item{
  height: 33px;
}
.expansion-panel-menu .v-expansion-panel-header__icon .v-icon{
  color: #3e5480;
}
.expansion-panel-menu  .theme--light .v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{
  color: #3e5480;
}
.expansion-panel-menu .menu-header-text{
  margin-bottom: 0;
  color: #3e5480;
  font-size: 14px;
  font-weight: 500;
}
</style>