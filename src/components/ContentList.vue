<template>
  <div class="content-list-box">
    <slot name="header" />
    <slot name="filter" />
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
@media screen and (max-width: 1200px){
  .content-box {
    margin-top: 20px;
  }

}
@media screen and (max-width: 576px) {
  .content-box {
    margin-top: 25px;
  }
}
@media screen and (max-width: 350px) {

}
@media screen and (max-width: 320px) {
  .content-box {
    margin-top: 23px;
  }
}
</style>
