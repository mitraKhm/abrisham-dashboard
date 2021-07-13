<template>
  <div class="video-box">
    <v-card
      flat
      color="#eff3ff"
      class="rounded-xl video-main"
    >
      <v-responsive :aspect-ratio="16/9" />
    </v-card>
    <div class="video-description">
      <v-row no-gutters>
        <v-col>
          <div class="d-flex flex-wrap title">
            <p>دین و زندگی</p>
            <p>فرسنگ هشتم</p>
            <p>جلسه 23</p>
          </div>
          <div class="d-flex subtitle">
            <div class="d-flex part align-start">
              <v-img 
                src="../assets/ic_alaa.png"
                class="alaa-logo icon"
              />
              <p>گروه آموزشی آلاء</p>
            </div>
            <div class="d-flex part align-center">
              <i class="fi fi-rr-graduation-cap icon" />
              <p>محمد رضایی بقا</p>
            </div>
          </div>
        </v-col>
        <v-col class="icon-btn-box">
          <v-btn
            color="#ff8f00"
            dark
            class="video-btn"
          >
            دیده نشده
          </v-btn>
          <div class="video-box-icon">
            <i class="fi fi-rr-download icon" />
            <i class="fi fi-rr-share icon" />
            <i class="fi fi-rr-bookmark icon" />
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoBox'
}
</script>
<style scoped>
.v-application p{
  margin-bottom: 0;
}
.video-box .video-main {
  margin-bottom: 25px;
}
.video-box .video-main {
  margin-bottom: 25px;
}
.video-box .video-box-icon {
  margin-right: 66px;
}
.video-box .video-box-icon .icon{
  font-size: 24px;
  margin-right: 40px;
  color:#3e5480;
}
.video-description{
  align-items: flex-start;
  margin-bottom: 42px;
}
.video-description .icon-btn-box{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.video-box .video-description .title {
  color: #3e5480;
  font-size: 20px;
  line-height: 40px
}
.video-box .video-description .video-btn{
  width: 120px;
  height: 48px;
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 rgba(62, 84, 128, 0.2);
}
.video-box .video-description .video-btn-text {
  font-size: 16px;
  font-weight: 500;
}
.video-box .video-description .subtitle {
  font-size: 16px;
  color: #9fa5c0;
}
.video-box .video-description .subtitle .part .alaa-logo{
  width: 13px;
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
@media screen and (max-width: 1200px){
  .video-box .video-box-icon {
    margin-right: 60px;
  }
  .video-description{
    margin-bottom: 29px;
  }

  .video-box .video-main {
    margin-bottom: 15px;
  }
}
@media screen and (max-width: 576px){
  .video-box .video-main {
    margin-bottom: 10px;
  }
  .video-box .video-description .video-btn{
    height: 40px;
  }
  .video-box .video-box-icon .icon{
    margin-right: 35px;
  }
  .video-box .video-box-icon {
    margin-right: 0;
  }
  .video-description .icon-btn-box{
    flex-direction: column;
    align-items: flex-end;
  }
  .video-box-title {
    text-align: right;
  }
}
@media screen and (max-width: 350px){
  .video-description .icon-btn-box{
    flex-direction: row;
    justify-content: space-between;
  }
  .video-box .video-description .title {
    font-size: 16px !important;
    text-align: right;
  }
  .video-box .video-description .subtitle .part{
    margin-left: 30px;
  }
  .video-box .video-description .subtitle {
    font-size: 14px;
    margin-bottom: 16px;
  }
  .video-box .video-description .video-btn{
    width: 110px;
    height: 36px;
  }
  .video-box .video-box-icon .icon{
    font-size: 18px;
    margin-right: 20px;
  }
  .video-box .video-main {
    margin-bottom: 10px;
  }
  .video-description{
    margin-bottom:16px;
  }
  .video-box-title {
    font-size: 14px;
    font-weight: 500;
  }
}
@media screen and (max-width: 320px){

  .video-description{
    margin-bottom:10px;
  }
}
</style>