<template>
  <div class="d-flex px-10">
    <div class="contentListItem-box">
      <v-sheet
        width="96"
        height="54"
        color="red"
      >
      </v-sheet>
      <div
        v-if="data[0].seen"
        class="seen"
      />
    </div>
    <div class="test">
      <p class="contentListItem-title text-truncate">
        {{ data[0].title }}
      </p>
      <p class="contentListItem-description text-truncate">
        {{ data[0].description }}
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: "ContentListItem",
  props: {
    data: {
      type: Array,
      default: () => {
        return [
          {
            title: 'جلسه فیلان - فرسنگ هشتم - دین و زندگی',
            // eslint-disable-next-line vue/max-len
            description: ' (قسمت بیست و سوم)،   (قسمت بیست و سوم)، فصل سومفصل سوم',
            seen: true,
          },
        ]
      }
    }
  }
}
</script>

<style scoped>
.contentListItem-box {
  position: relative;
  margin-left: 15px;
}

.contentListItem-box .seen {
  height: 54px;
  width: 96px;
  opacity: 0.2;
  border-radius: 10px;
  background-color: #000000;
  position: absolute;
  top: 0;
}
.contentListItem-description{
  font-size: 14px;
  color: #9fa5c0;
}
.contentListItem-title {
 background-color: red;
  font-size: 18px;
  font-weight: 500;
  text-align: right;
  color: #3e5480;
  margin-bottom: 0;
}
.test{
  background-color: yellow;
}
</style>
