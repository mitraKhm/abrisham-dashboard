<template>
  <div class="content-list-box">
    <slot name="header">
      gfd
    </slot>
    <slot name="filter" />
    <content-list-item />
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
