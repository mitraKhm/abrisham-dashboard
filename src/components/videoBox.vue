<template>
  <div class="video-box">
    <v-card height="620" flat color="#eff3ff" class="rounded-xl video-main">
    </v-card>
    <div class="video-description">
      <v-row>
        <v-col>
          <div class="d-flex flex-wrap title">
            <p>دین و زندگی</p>
            <p>فرسنگ هشتم</p>
            <p>جلسه 23</p>
          </div>
          <div class="d-flex subtitle">
           <div class="d-flex part">
             <v-chip class="icon"></v-chip>
             <p>گروه آموزشی آلاء</p>
           </div>
            <div class="d-flex part">
              <v-chip class="icon"></v-chip>
              <p>محمد رضایی بقا</p>
            </div>
          </div>
        </v-col>
        <v-col class="d-flex flex-wrap justify-end icon-btn-box">
          <v-btn  color="#ff8f00" dark class="video-btn">
            دیده نشده
          </v-btn>
          <div class="video-box-icon">
            <v-chip width="24" class="transparent">
              m
            </v-chip>
            <v-chip width="24" class="transparent">
              m
            </v-chip>
            <v-chip width="24" class="transparent">
              m
            </v-chip>
          </div>
        </v-col>
      </v-row>
    </div>
   <div class="d-flex">
     <p class="video-box-title">درسنامه فرسنگ هشتم (قسمت بیست و سوم)، فصل سوم شیمی یازدهم (قسمت
       بیست و سوم)
     </p>
   </div>
  </div>
</template>

<script>
export default {
  name: "videoBox"
}
</script>
<style scoped>
.video-box {
  width: 1100px;
}

.video-box .video-main {
  margin-bottom: 25px;
}

.video-box .video-box-icon {
  margin-right: 66px;
}
.video-description{
  align-items: flex-start;
  margin-bottom: 42px;
}
.video-description .icon-btn-box{
  align-items: center;
}
.video-box .video-description .title {
  color: #3e5480;
  font-size: 20px;
}
.video-box .video-description .video-btn{
  width: 120px;
  height: 48px;
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 rgba(62, 84, 128, 0.2);
}
.video-box .video-description .video-btn-text{
  font-size: 16px;
  font-weight: 500;
}
.video-box .video-description .subtitle {
  font-size: 16px;
  color: #9fa5c0;
}
.video-box .video-description .subtitle .part{
  margin-left: 46px;
}
.video-box .video-description .subtitle .part .icon{
  margin-left: 10px;
}
.video-box-title {
  color: #3e5480;
  font-size: 20px;
  font-weight: 500;
}
</style>