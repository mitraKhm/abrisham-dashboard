<template>
  <div class="content-list-box">
    <slot name="header" />
    <slot name="filter" />
    <content-list-item
      v-for="i in 5"
      :key="i"
    />
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


</style>
