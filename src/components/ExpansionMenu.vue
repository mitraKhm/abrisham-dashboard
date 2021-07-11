<template>
  <v-card width="200px">
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
              <v-divider />
              <v-list-item>
                <v-list-item-title> شهاب عبادی </v-list-item-title>
              </v-list-item>
              <v-divider />
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title> شهاب عبادی</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider />
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title> شهاب عبادی</v-list-item-title>
                </v-list-item-content>
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
          icon: 'home',
          routeName: 'Home',
          selected:false
        },
        {
          icon: 'play-alt',
          routeName: 'UserAbrishamProgress',
          selected:false
        },
        {
          icon: 'calendar',
          routeName: 'Schedule',
          selected:false
        },
        {
          icon: 'headphones',
          routeName: 'Home',
          selected:false
        },
        {
          icon: 'list-check',
          routeName: 'Home',
          selected:true

        },
        {
          icon: 'stats',
          routeName: 'Home',
          selected:false
        },
        {
          icon: 'envelope',
          routeName: 'Home',
          selected:false
        },
        {
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