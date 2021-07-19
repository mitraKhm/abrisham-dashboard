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
          v-if="content.file && content.file.video && content.inputData.can_see"
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
        <div v-else-if="(!content.file || !content.file.video) && content.inputData.can_see">
          <v-alert
            class="null-video"
            outlined
            type="warning"
            prominent
            border="left"
            max-width="290"
            rounded
          >
            اوه نه! ویدیویی وجود نداره...
          </v-alert>
        </div>
        <div v-else>
          <a
            :href="content.url.web"
            target="_blank"
          >
            <v-img :src="content.photo" />
          </a>
        </div>
      </v-responsive>
    </v-card>
    <div class="video-description">
      <v-row
        no-gutters
        class="description"
      >
        <v-col>
          <div class="d-flex flex-wrap title">
            <p
              v-if="lesson.title ||content.inputData.lesson"
              class="title-text"
            >
              <span
                v-if="lesson.title"
                class="title-item"
              >
                {{ lesson.title }}
              </span>
              <span
                v-if="content.inputData.lesson"
                class="title-item"
              >
                {{ content.inputData.lesson }}
              </span>
            </p>
            <p
              v-if="set || content.set"
              class="title-text"
            >
              <span
                v-if="set && set.short_title"
                class="title-item"
              >
                {{ set.short_title }}
              </span>
              <span
                v-if="content.set && content.set.short_title"
                class="title-item"
              >
                {{ content.set.short_title }}
              </span>
            </p>
            <p
              v-if="content.order"
              class="title-text"
            >
              جلسه {{ content.order }}
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
            <div
              v-if="content.author && (content.author.first_name || content.author.last_name)"
              class="d-flex part align-center"
            >
              <i class="fi fi-rr-graduation-cap icon" />
              <p>{{ content.author.first_name }} {{ content.author.last_name }}</p>
            </div>
          </div>
        </v-col>
        <v-col class="icon-btn-box">
          <v-btn
            dark
            class="seen-btn"
            :class="{ 'seen-video-btn': content.has_watched, 'video-btn': !content.has_watched }"
            :loading="content.loading"
            @click="clickHandler"
          >
            <span
              v-if="content.has_watched"
              class="video-btn-text"
            > دیده شده
              <i class="fi fi-rr-check" />
            </span>
            <span
              v-else
              class="video-btn-text"
            >
              دیده نشده
            </span>
          </v-btn>
          <div class="video-box-icon">
            <v-bottom-sheet v-if="content.file && content.file.video">
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
              <v-list class="align-center download-list">
                <v-row
                  class="download-btn"
                  justify="center"
                >
                  <v-card
                    v-for="(file , index) in content.file.video"
                    :key="index"
                    class="download-part"
                    flat
                    @click="sheet = false"
                  >
                    <v-card-actions
                      class="download-title"
                    >
                      <v-badge
                        class="download-badge"
                        :content="file.size"
                        offset-x="35"
                      />

                      <a :href="file.link"><i class="fi fi-rr-download icon" />
                        {{ file.caption }}
                      </a>
                      <v-badge
                        class="download-badge"
                        :content="file.res"
                        color="red"
                      />
                    </v-card-actions>
                    <v-col>
                      <v-btn
                        class="details red"
                        depressed
                      >
                        {{ file.res }}
                      </v-btn>
                      <v-btn
                        class="details green"
                        depressed
                      >
                        {{ file.ext }}
                      </v-btn>
                      <v-btn
                        class="details blue"
                        depressed
                      >
                        {{ file.size }}
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
                    network="whatsapp"
                    class="social-share"
                  >
                    <v-btn
                      class="ma-2"
                      color="amber darken-3"
                      dark
                      @click="openUrl (content, 'whatsapp')"
                    >
                      <v-icon>mdi-whatsapp</v-icon>
                    </v-btn>
                  </ShareNetwork>
                  <ShareNetwork
                    network="telegram"
                    class="social-share"
                  >
                    <v-btn
                      class="ma-2"
                      color="amber darken-3"
                      dark
                      @click="openUrl (content, 'telegram')"
                    >
                      <v-icon>mdi-telegram</v-icon>
                    </v-btn>
                  </ShareNetwork>
                  <ShareNetwork
                    network="mail"
                    class="social-share"
                  >
                    <v-btn
                      class="ma-2"
                      color="amber darken-3"
                      dark
                      @click="openUrl (content, 'mail')"
                    >
                      <v-icon>mdi-mail</v-icon>
                    </v-btn>
                  </ShareNetwork>
                  <ShareNetwork
                    network="linkedin"
                    class="social-share"
                  >
                    <v-btn
                      class="ma-2"
                      color="amber darken-3"
                      dark
                      @click="openUrl (content, 'linkedin')"
                    >
                      <v-icon>mdi-linkedin</v-icon>
                    </v-btn>
                  </ShareNetwork>
                  <ShareNetwork
                    network="pinterest"
                    class="social-share"
                  >
                    <v-btn
                      class="ma-2"
                      color="amber darken-3"
                      dark
                      @click="openUrl (content, 'pinterest')"
                    >
                      <v-icon>mdi-pinterest</v-icon>
                    </v-btn>
                  </ShareNetwork>
                  <ShareNetwork
                    network="twitter"
                    class="social-share"
                  >
                    <v-btn
                      class="ma-2"
                      color="amber darken-3"
                      dark
                      @click="openUrl (content, 'twitter')"
                    >
                      <v-icon>mdi-twitter</v-icon>
                    </v-btn>
                  </ShareNetwork>
                  <ShareNetwork
                    network="facebook"
                    class="social-share"
                  >
                    <v-btn
                      class="ma-2"
                      color="amber darken-3"
                      dark
                      @click="openUrl (content, 'facebook')"
                    >
                      <v-icon>mdi-facebook</v-icon>
                    </v-btn>
                  </ShareNetwork>
                </v-row>
              </v-list>
            </v-bottom-sheet>
            <v-btn
              color="transparent"
              depressed
              dark
              :loading="content.loading"
              class="video-box-icon-button bookmark-button"
              @click="toggleFavorite"
            >
              <i
                class="fi fi-rr-bookmark icon"
                :class="{ 'favorite-bookmark': content.is_favored , 'icon': !content.is_favored }"
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
  components: {},
  computed: {},
  props: {
    content: {
      type: Content,
      default: new Content()
    },
    lesson: {
      type: Object,
      default: () => {
        return {}
      }
    },
    set: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data: () => ({
    sheet: false,
  }),
  methods: {
    clickHandler() {
      if (!this.content.has_watched) {
        this.content.loading = true;
        this.$emit('has_watched')
      }
    },
    toggleFavorite() {
      this.content.loading = true;
      this.$emit('favorite');
      },
    getShareLink (content, socialMedia) {
      if (socialMedia === 'telegram') {
        return 'https://telegram.me/share/url?url='+content.url.web+'&text=' + content.title
      } else if (socialMedia === 'whatsapp') {
        return 'https://web.whatsapp.com/send?l=en&text=' + content.url.web
      } else if (socialMedia === 'mail') {
        return 'mailto:info@alaatv.com?&subject='+content.title+'&body=' + content.url.web
      } else if (socialMedia === 'linkedin') {
        return 'https://www.linkedin.com/shareArticle?mini=true&url='+content.url.web+'&title='+content.title+'&summary=&source=alaatv.com'
      } else if (socialMedia === 'pinterest') {
        return 'https://pinterest.com/pin/create/button/?url='+content.url.web+'&media=&description=alaatv.com'
      } else if (socialMedia === 'twitter') {
        return 'https://twitter.com/home?status='+content.url.web
      } else if (socialMedia === 'facebook') {
        return 'https://www.facebook.com/sharer/sharer.php?u='+content.url.web
      }
    },
    openUrl(content, socialMedia){
      const url=this.getShareLink (content, socialMedia);
      open(url);
    }
    },
}
</script>

<style>
.video-box-icon .v-btn:not(.v-btn--round).v-size--default{
  padding:0;
}
.video-box .video-main .null-video{
  margin: 200px auto;
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
.download-part .download-badge{
  display: none;
}

.download-part{
  margin: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 20px ;
  border: #ff8f00 1px solid !important;
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
.video-box .video-description .description .icon-btn-box .video-box-icon .bookmark-button .v-btn__loader .v-progress-circular .v-progress-circular__overlay {
  color: #ff8f00 !important;
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
    margin-bottom:0 !important;
  }
  .video-box .video-main{
    margin-bottom: 16px;
  }
  .video-box .video-description .icon-btn-box {
    display: flex;
    flex-direction: column !important;
    align-items: flex-end !important;
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
  .download-part{
    font-size: 12px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 10px ;
    border: #ff8f00 1px solid;
  }
  .download-part .download-title{
    margin:10px auto;
    height: 32px;
    text-align: center;
  }
  .download-part .download-title a{
    font-size: 12px;
    text-decoration: none;
    color:#FFFFFF;
    background-color:#ff8f00 ;
    padding: 10px;
    border-radius: 10px;
  }
  .download-part .details{
    font-size: 12px;
    border-radius: 10px;
    margin: 10px;
    color: #FFFFFF;
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
@media only screen and (min-width: 960px) and (max-width: 990px){
  .video-box .video-description .subtitle .part {
    margin-left: 8px;
  }
}
@media screen and (max-width: 959px){
  .video-box-icon .v-btn:not(.v-btn--round).v-size--default {
    min-width: 59px !important;
  }
  .video-box .video-description .icon-btn-box{
    display: flex;
    justify-content: space-between;
    flex-direction:row !important;
  }
  .video-box .video-description .icon-btn-box {
    align-items: flex-start !important;
  }
  .video-description{
    margin-bottom: 0;
  }
  .seen-btn{
    height: 40px !important;
    box-sizing: border-box;
  }
  .download-part{
    margin: 5px;
    display: flex;
    flex-direction: column;
    border-radius: 5px ;
    border: #ff8f00 1px solid !important;
  }
  .download-part .download-title{
    margin:5px auto;
    height: 32px;
    text-align: center;
  }
  .download-part .download-title a{
    font-size: 10px;
    text-decoration: none;
    color:#FFFFFF;
    background-color:#ff8f00 ;
    padding: 5px;
    border-radius: 5px;
  }
  .download-part .details{
    font-size: 8px;
    border-radius: 5px;
    margin: 1px;
    color: #FFFFFF;
  }
  .download-part .details.v-btn:not(.v-btn--round).v-size--default {
    height: 19px;
    min-width: 0!important;
    padding: 0 8px;
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
  .video-box .video-description .description{
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
  .download-list{
    padding-top: 3px;
  }
  .download-btn {
    display: flex;
    flex-direction: column !important;
  }
  .download-badge{
    display: block !important;
  }
  .download-part{
    margin: 10px !important;
    display: flex;
    flex-direction: column;
    border-radius: 10px ;
    border: none;
    height: 30px;
    border: none !important;
  }
  .download-badge .v-badge__badge{
    font-size: 9px !important;
    height: 17px !important;
  }
  .download-part .download-title{
    margin:5px auto;
    height: 32px;
    text-align: center;
  }
  .download-part .download-title a{
    font-size: 12px;
    text-decoration: none;
    border-radius: 5px;
    width: 120px;
    height: 30px;
  }
  .download-part .details{
    font-size: 6px;
    border-radius: 5px;
    margin: 1px;
    color: #FFFFFF;
    display: none;
  }
  .download-part .details.v-btn:not(.v-btn--round).v-size--default {
    height: 10px;
    min-width: 0 !important;
    padding: 0 4px;
  }
  .video-box-title {
    text-align: right;
  }
}
@media only screen and (min-width: 359px) and (max-width: 403px){
  .description{
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
