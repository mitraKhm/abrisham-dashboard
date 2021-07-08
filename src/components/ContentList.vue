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
      <v-select
        :items="items"
      >
        <template v-slot:option="option">
          <span
            class="fa"
            :class="option.icon"
          />
          {{ option.title }}
        </template>
      </v-select>
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
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
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
