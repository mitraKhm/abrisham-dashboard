<template>
  <div class="d-flex ">
    <v-card width="96">
      f
    </v-card>
    <div>
      <p class="title">df</p>
      <p class="description">rtg</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "ContentListItem",
props:{
    data:{
      type:Array,
      default: () => {
        return [
          {
            title:'جلسه فیلان - فرسنگ هشتم - دین و زندگی',
            // eslint-disable-next-line vue/max-len
            description:'ت و سوم)، فصل سوم درسنامه فرسنگ هشتم (قسمت بیست و سوم)، فصل سوم',
            seen:false,
          },
        ]
       }
    }
}
}
</script>

<style scoped>

</style>
