<template>
  <div class="content-list-box">
    <slot name="header">
      <div class="slot-header-box">
        <v-chip
          text-color="#3e5480"
          depressed
          color="transparent"
          class="slot-header-box-movie"
        >
          فیلم های 14 تیر 1400
        </v-chip>
        <v-chip
          text-color="#9fa5c0"
          depressed
          color="transparent"
          class="slot-header-box-days"
        >
          رفتن به روزهای دیگر
        </v-chip>
      </div>
    </slot>
    <slot name="filter">
      <div class="d-flex justify-space-between">
        <div class="text-center">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                width="220"
                color="#eff3ff"
                v-bind="attrs"
                depressed
                rounded
                v-on="on"
              >


                همه
                  <i class="fi fi-rr-angle-small-down" />
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
              >
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <div class="text-center">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="#eff3ff"
                v-bind="attrs"
                depressed
                rounded
                v-on="on"
              >
                همه
                <i class="fi fi-rr-download" />
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
              >
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </slot>
    <div class="content-box">
      <content-list-item
        v-for="i in 5"
        :key="i"
      />
    </div>
  </div>
</template>

<script>
import ContentListItem from '../components/ContentListItem'
export default {
  name: "ContentList",
  components : {
    ContentListItem
  },
  data(){
    return {
      items: ['تست1', 'تست1', 'تست1', 'تست1'],
    }
  }
}
</script>

<style scoped>
.content-list-box {
  border-radius: 30px;
  border: solid 6px #eff3ff;
}
.content-box {
  margin-top: 43px;
}
.slot-header-box{
  display: flex;
  justify-content: space-between;
  margin: 19px 26px
}
.slot-header-box .slot-header-box-movie{
  font-size: 20px;
  height: 32px;
  font-weight: 500;
}
.slot-header-box .slot-header-box-days{
  font-size: 14px;
}
font-size: 12px;
@media screen and (max-width: 1200px){
  .content-box {
    margin-top: 20px;
  }
  .slot-header-box{
    flex-direction: column;
    margin: 13px 11px
  }
}
@media screen and (max-width: 576px) {
  .content-box {
    margin-top: 25px;
  }
}
@media screen and (max-width: 350px) {
  .slot-header-box{
    flex-direction: row;
    justify-content: space-between;
    margin: 13px 11px
  }
  .slot-header-box .slot-header-box-movie {
    font-size:16px;
  }
  .slot-header-box .slot-header-box-days{
    font-size: 12px;
  }
}
@media screen and (max-width: 320px) {
  .content-box {
    margin-top: 23px;
  }

}
</style>
