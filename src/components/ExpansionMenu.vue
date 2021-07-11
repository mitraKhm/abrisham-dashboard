<template>
  <v-card
  class="rounded-lg"
  >
    <template>
      <v-expansion-panels
        flat
      >
        <v-expansion-panel>
          <v-expansion-panel-header
            flat
          >
            <i class="fi"
               :class="'fi-rr-' + headerData[0].icon"
            />
            <p>
              {{headerData[0].title }}
            </p>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list>
              <v-list-item
                v-for="(i , index) in listData"
                :key="index"
                @click="changeSelectedItem(index)"
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
          selected:true
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
          selected:false

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
      headerData: {},
      listData: {}
    }
  },
 created() {
   this.updateHeaderData()
   this.updatelistData()
 },
  methods:{
    changeSelectedItem(selectedId){
      console.log('im run')
      this.menuItems.map(i =>{
        i.selected = false
      })
      this.menuItems[selectedId].selected = true
      this.updateHeaderData()
      this.updatelistData()
    },
    updateHeaderData(){
      this.headerData = this.menuItems.filter( item => {
        return item.selected
      })
    },
    updatelistData(){
      this.listData= this.menuItems.filter( item => {
        return !item.selected
      })
     }
  }
}
</script>

<style scoped>

</style>