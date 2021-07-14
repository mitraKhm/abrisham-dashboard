<template>
  <div class="video-box">
    <v-card
      flat
      color="#eff3ff"
      class="rounded-xl video-main"
    >
      <v-responsive :aspect-ratio="16/9">
        <vue-plyr
          v-if="content.file"
          :emit="['progress']"
          @progress="test"
        >
          <video
            :poster="content.photo"
            :src="content.file.video[0].link"
          >
            <source
              v-for="(video, index) in content.file.video"
              :key="index"
              :src="video.link"
              type="video/mp4"
              :size="video.res.slice(0, -1)"
            >
          </video>
        </vue-plyr>
      </v-responsive>
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
            <v-bottom-sheet
              v-model="sheet"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="transparent"
                  depressed
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  <i class="fi fi-rr-download icon" />
                </v-btn>
              </template>
              <v-list class="align-center sheet-background">
                <v-row justify="center">
                  <v-card
                    v-for="(file, index) in downloadFiles"
                    :key="index"
                    class=" download-part"
                    flat
                    @click="sheet = false"
                  >
                    <v-card-actions
                      class="download-title"
                    >
                      <a href="#"><i class="fi fi-rr-download icon" />
                        {{ file.title }}</a>
                    </v-card-actions>
                    <v-col-md>
                      <v-btn
                        class="details red"
                        depressed
                      >
                        {{ file.videoQuality }}
                      </v-btn>
                      <v-btn
                        class="details green"
                        depressed
                      >
                        {{ file.format }}
                      </v-btn>
                      <v-btn
                        class="details blue"
                        depressed
                      >
                        {{ file.videoVolume }}
                      </v-btn>
                    </v-col-md>
                  </v-card>
                </v-row>
              </v-list>
            </v-bottom-sheet>




            <i class="fi fi-rr-bookmark icon" />
            <i class="fi fi-rr-share icon" />
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>

import {Content} from '@/Models/Content';

export default {


  name: 'VideoBox',
  components: {

  },
  computed: {

  },
  props: {
    content: {
      type: Content,
      default: new Content()
    }
  },
  data: () => ({
    sheet: false,
    downloadFiles:[
      {
        title:'دانلود فایل کیفیت عالی',
        videoQuality:'720',
        format:'MP4',
        videoVolume:'93MB',
      },
      {
        title:'دانلود فایل کیفیت عالی',
        videoQuality:'720',
        format:'MP4',
        videoVolume:'93MB',
      },
      {
        title:'دانلود فایل کیفیت عالی',
        videoQuality:'720',
        format:'MP4',
        videoVolume:'93MB',
      },

    ]
  }),
  methods: {
    test (event) {
      console.log('test', event)
    }
  },
  mounted () {
  }
}
</script>
<style scoped>

.download-part{
  margin: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 20px ;
  border: #ff8f00 1px solid;


}
.download-part .download-title{
  margin:20px auto;
  height: 42px;
  text-align: center;


}
.download-part .download-title a{
  text-decoration: none;
  color:#FFFFFF;
  background-color:#ff8f00 ;
  padding: 15px;
  border-radius: 20px;
}
.download-part .details{
  border-radius: 20px;
  margin: 20px;
  color: #FFFFFF;
}






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

<style>
.video-box .video-js {
  height: 100%;
  width: 100%;
}

.video-box .video-js .vjs-big-play-button {
  left: calc(50% - 43px);
  top: calc(50% - 20px);
}
</style>
