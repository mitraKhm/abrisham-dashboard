<template>
  <v-card>
    <template>
      <v-expansion-panels
        flat
      >
        <v-expansion-panel>
          <v-expansion-panel-header
            flat
          >
            <i class="fi fi-rr-calendar" />
            <p>
              برنامه
            </p>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list>
              <v-list-item
                v-for="(i , index) in menuItems"
                :key="index"
              >
                <v-list-item-icon>
                  <i
                    class="fi"
                    :class="'fi-rr-'+ i.icon"
                  />
                </v-list-item-icon>
                <v-list-item-title> {{ i.title }} </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </template>
  </v-card>
</template>

<script>
export default {
  name: "ExpansionMenu",
  data(){
    return {
      menuItems: [
        {
          title:'خانه',
          icon: 'home',
          routeName: 'Home',
          selected:false
        },
        {
          title:'فیلم ها',
          icon: 'play-alt',
          routeName: 'UserAbrishamProgress',
          selected:false
        },
        {
          title:'برنامه مطالعاتی',
          icon: 'calendar',
          routeName: 'Schedule',
          selected:false
        },
        {
          title:'مشاوره',
          icon: 'headphones',
          routeName: 'Home',
          selected:false
        },
        {
          title:'عملکرد من',
          icon: 'list-check',
          routeName: 'Home',
          selected:true

        },
        {
          title:'ارزیابی',
          icon: 'stats',
          routeName: 'Home',
          selected:false
        },
        {
          title:'اخبار و اطلاعیه',
          icon: 'envelope',
          routeName: 'Home',
          selected:false
        },
        {
          title:'نقشه راه ابریشم',
          icon: 'world',
          routeName: 'Home',
          selected:false
        },
      ],

    }
  },
  computed:{

  }
}
</script>

<style scoped>

</style>