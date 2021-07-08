<template>
  <div class="d-flex px-8">
    <div>
      <v-card
        width="100%"
        height="22"
        class="mb-2 rounded-pill text-center text-caption"
        flat
        dark
        color="#009498"
      />
      <div class="contentListItem-box">
        <v-card
          flat
          class="rounded-card"
        >
          <v-img
            src="../assets/hendese.jpg"
          />
        </v-card>
        <div
          v-if="data[0].seen"
          class="seen"
        />
      </div>
    </div>
    <div class="mr-4">
      <v-sheet
        text-color="#3e5480"
        depressed
        height="22"
        width="78"
        class="mb-2 rounded-pill text-center text-caption"
        color="#eff3ff"
      >
        افبقلادقفبلات
      </v-sheet>
      <div class="title-box">
        <p class="contentListItem-title text-truncate">
          {{ data[0].title }}
        </p>
        <p class="contentListItem-description text-truncate">
          {{ data[0].description }}
        </p>
      </div>
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
            seen: false,
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
.contentListItem-description {
  font-size: 14px;
  color: #9fa5c0;
}
.contentListItem-title {
  font-size: 18px;
  font-weight: 500;
  text-align: right;
  color: #3e5480;
  margin-bottom: 0;
}
.title-box {
  width: calc(100% - 130px);
}
.contentListItem-box .rounded-card{
  width: 96px;
  height: 54px;
  border-radius: 10px;
}
@media screen and (max-width: 1200px){
  .contentListItem-box {
    position: relative;
  }
  .contentListItem-box .rounded-card{
    height: 40px;
    width: 71px;
    border-radius: 5px;
  }
  .contentListItem-box .seen {
    height: 40px;
    width: 71px;
    border-radius: 5px;
  }
  .contentListItem-description {
    font-size: 14px;
    color: #9fa5c0;
  }
  .title-box {
    width: calc(100% - 130px);
  }
 .title-box .contentListItem-title {
    font-size: 18px;
    font-weight: 500;
    text-align: right;
    color: #3e5480;
    margin-bottom: 0;
  }
}
@media screen and (max-width: 576px) {

}
@media screen and (max-width: 350px) {

}
@media screen and (max-width: 320px) {
  .contentListItem-box .rounded-card{
    height: 33px;
    width: 60px;
    border-radius: 15px;
  }
  .contentListItem-box .seen {
    height: 33px;
    width: 60px;
    border-radius: 15px;
  }
  .title-box .contentListItem-title{
    font-size: 14px;
  }

}
</style>
