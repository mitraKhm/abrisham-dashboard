<template>
  <div class="video-box">
    <v-card
      flat
      color="#eff3ff"
      class="rounded-xl video-main"
    >
      <v-responsive
        :aspect-ratio="16/9"
      >
        <vue-plyr
          v-if="content.file && content.file.video"
          :key="content.id"
          :emit="['progress']"
        >
          <video
            :poster="content.photo"
            :src="content.file.video[0].link"
          >
            <source
              v-for="video in content.file.video"
              :key="video.link"
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
            <p class="title-item title-text">
              دین و زندگی
            </p>
            <p class="title-item title-text">
              فرسنگ هشتم
            </p>
            <p class="title-text">
              جلسه 23
            </p>
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
            dark
            class="seen-btn"
            :class="{ 'seen-video-btn': seen, 'video-btn': !seen }"
            :loading="false"
            @click="clickHandler"
          >
            <span
              v-if="seen===false "
              class="video-btn-text"
            >
              دیده نشده
            </span>
            <span
              v-else
              class="video-btn-text"
            >
              دیده شده
              <i class="fi fi-rr-check" />
            </span>
          </v-btn>
          <div class="video-box-icon">
            <v-bottom-sheet>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="transparent"
                  depressed
                  dark
                  v-bind="attrs"
                  class="video-box-icon-button"
                  v-on="on"
                >
                  <i class="fi fi-rr-download icon" />
                </v-btn>
              </template>
              <v-list class="align-center">
                <v-row justify="center">
                  <v-card
                    v-for="(file , index) in downloadFiles"
                    :key="index"
                    class="download-part"
                    flat
                    @click="sheet = false"
                  >
                    <v-card-actions
                      class="download-title"
                    >
                      <a href="#"><i class="fi fi-rr-download icon" />
                        {{ file.title }}
                      </a>
                    </v-card-actions>
                    <v-col>
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
                    </v-col>
                  </v-card>
                </v-row>
              </v-list>
            </v-bottom-sheet>
            <v-bottom-sheet>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="transparent"
                  depressed
                  dark
                  v-bind="attrs"
                  class="video-box-icon-button"
                  v-on="on"
                >
                  <i class="fi fi-rr-share icon" />
                </v-btn>
              </template>
              <v-list class="align-center">
                <v-row justify="center">
                  <ShareNetwork
                    network="facebook"
                    url="https://news.vuejs.org/issues/180"
                    class="social-share"
                  >
                    <i class="fi fi-rr-share icon " />
                  </ShareNetwork>
                  <ShareNetwork
                    network="Facebook"
                    url="https://https://github.com/"
                    class="social-share"
                  >
                    <i class="fi fi-rr-share icon " />
                  </ShareNetwork>
                  <ShareNetwork
                    network="Facebook"
                    url="https://https://github.com/"
                    class="social-share"
                  >
                    <i class="fi fi-rr-share icon " />
                  </ShareNetwork>
                  <ShareNetwork
                    network="Facebook"
                    url="https://https://github.com/"
                    class="social-share"
                  >
                    <i class="fi fi-rr-share icon " />
                  </ShareNetwork>
                </v-row>
              </v-list>
            </v-bottom-sheet>
            <v-btn
              v-model="myFavorite"
              color="transparent"
              depressed
              dark
              class="video-box-icon-button"
              @click="toggleFavorite"
            >
              <i
                class="fi fi-rr-bookmark icon"
                :class="{ 'favorite-bookmark': myFavorite , 'icon': !myFavorite }"
              />
            </v-btn>
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
    },
  },
  data: () => ({
    myFavorite:false,
    loading:false,
    seen:false,
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
    ],
    icons:[
      {
        name:'facebook',
        icon:'power',
        link:'https://news.vuejs.org/issues/180',
      },
      {
        name:'facebook',
        icon:'power',
        link:'https://news.vuejs.org/issues/180',
      },
      {
        name:'facebook',
        icon:'power',
        link:'https://news.vuejs.org/issues/180',
      },
      {
        name:'facebook',
        icon:'power',
        link:'https://news.vuejs.org/issues/180',
      },
    ]
  }),
  methods: {
    clickHandler(){
      this.seen = !this.seen;
      this.loading = true;
    },
    toggleFavorite(){
      this.myFavorite =! this.myFavorite;
      this.$emit('favorite', this.myFavorite);
    }
  }
}
</script>

<style scoped>
.video-box-icon .v-btn:not(.v-btn--round).v-size--default{
  padding:0;
}

.video-box .video-main {
  margin-bottom: 25px;
}
.video-box .video-description{
  align-items: flex-start;
  margin-bottom: 42px;
}
.video-box .video-description .title {
  color: #3e5480;
  font-size: 20px;
  line-height: 40px
}
.video-box .video-description .title .title-item::after{
  content: ")";
  color: #ff8f00;
  padding-left: 6px;
}
.video-box .video-description .subtitle {
  font-size: 16px;
  color: #9fa5c0;
}
.video-box .video-description .subtitle .part .alaa-logo{
  width: 13px;
}
.video-box .video-description .subtitle .part{
  margin-left: 40px;
}
.video-box .video-description .subtitle .part .icon{
  margin-left: 10px;
}
.video-box .video-description .video-btn{
  background-color:#ff8f00;
  color: #ffffff;
  width: 120px;
  height: 48px;
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 rgba(62, 84, 128, 0.2);
}
.video-box .video-description .seen-video-btn{
  background-color: #ffffff;
  color: #ff8f00;
  width: 120px;
  height: 48px;
  border-radius: 10px;
  border: solid 2px #ff8f00;
  box-shadow: none;
}
.video-box .video-description .video-btn-text {
  font-size: 16px;
  font-weight: 500;
}


.video-box .video-description .video-box-icon {
  margin-right: 20px;
  padding-top: 10px;
}
.video-box .video-box-icon .icon{
  font-size: 24px !important;
  color:#3e5480;
  padding: 6px 0;
}

.video-box  .video-description .icon-btn-box{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.video-box .video-description .fi.favorite-bookmark {
  color: #ff8f00;
}
.social-share{
  margin: 20px;
  text-decoration: none;
  background-color:  #ff8f00;
  color: white;
  border-radius: 50%;
  padding: 20px;
}

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
.video-box-title {
  color: #3e5480;
  font-size: 20px;
  font-weight: 500;
}




@media screen and (max-width: 1200px){
  .video-box-icon .v-btn:not(.v-btn--round).v-size--default{
    min-width: 57px !important;
  }
  .video-description {
    margin-bottom: 0px !important;
  }
  .video-box .video-main{
    margin-bottom: 16px;
  }
  .video-box .video-description .icon-btn-box {
    display: flex;
    flex-direction: column !important;
    justify-content: flex-start;
  }
  .icon-btn-box .video-box-icon-button{
    justify-content: end ;
  }
  .video-description .icon-btn-box {
    align-items: end !important;
  }
  .seen-btn{
    margin-bottom: 15px;
  }
}
@media only screen and (min-width: 1200px) and (max-width: 1296px){
  .video-box-icon .v-btn:not(.v-btn--round).v-size--default{
    min-width: 55px !important;
  }
  .video-box .video-description .subtitle .part {
    margin-left: 19px;
  }
}
@media only screen and (min-width: 991px) and (max-width: 1166px){
  .video-box .video-description .subtitle .part {
    margin-left: 10px;
  }
}

@media screen and (max-width: 990px){
  .video-box-icon .v-btn:not(.v-btn--round).v-size--default {
    min-width: 59px !important;
  }
  .video-box .video-description .icon-btn-box{
    display: flex;
    justify-content: space-between;
    flex-direction:row !important;
  }
  .video-description .icon-btn-box {
    align-items: start !important;
  }
  .video-description{
    margin-bottom: 0;
  }
  .seen-btn{
    height: 40px !important;
    box-sizing: border-box;
  }
}
@media only screen and (min-width: 768px) and (max-width: 796px){
  .video-box-icon .v-btn:not(.v-btn--round).v-size--default {
    min-width: 55px !important;
  }
  .video-box .video-description .subtitle .part {
    margin-left: 10px;
  }
}
@media screen and (max-width: 768px){
  .video-box .video-description .title .title-text{
    font-size: 16px;
  }
  .video-box .video-description .title .title-item::after{
    content: ")";
    padding-left: 5px;
    font-size: 16px;
  }
  .video-box .video-description .subtitle {
    font-size: 14px;
    margin-bottom: 16px;
  }
  .video-box .video-description .subtitle .part{
    margin-left: 10px;
  }
  .video-box .video-description .video-box-icon{
    margin-right: 11px;
    padding-top: 6px;
  }
  .video-box .video-box-icon .icon{
    font-size: 16px !important;
    color:#3e5480;
    padding: 6px 0;
  }
  .video-box-icon .v-btn:not(.v-btn--round).v-size--default{
    min-width: 36px !important;

  }
  .video-box .video-description .seen-video-btn{
    width: 110px !important;
    height: 36px !important;
    border: solid 1px #ff8f00 !important;
  }
  .video-box .video-description .video-btn-text {
    font-size: 14px !important;
    font-weight: 500;
  }
  .video-box .video-description .video-btn{
    width: 110px !important;
    height: 36px !important;
  }
}

@media screen and (max-width: 576px){
  .video-box .video-main {
    margin-bottom: 10px;
  }
  .video-box .video-description{
    display: flex !important;
    flex-direction: column !important;
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
@media only screen and (min-width: 359px) and (max-width: 403px){
  .video-description{
    display: flex;
    flex-direction: column !important;
  }
}
@media screen and (max-width: 350px){
  .video-description .icon-btn-box{
    flex-direction: row;
    justify-content: space-between !important;
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
