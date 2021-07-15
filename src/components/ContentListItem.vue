<template>
  <!--  :color=" selected ? '#f2f5ff' : 'transparent'"-->
  <div
    class="content-list-item"
    :class="selected ? 'selected-content-list' : ''"
    @click="changeSelectedItem"
  >
    <div
      class="d-flex contentListItem-main-box"
    >
      <div class="right-content">
        <v-card
          v-if="false"
          height="22"
          class="mb-2 rounded-pill text-center text-caption"
          flat
          dark
          color="#009498"
        >
          <!--          get lesson name
         {{ content }}-->
        </v-card>
        <div class="contentListItem-box">
          <v-card
            v-if="type === 'video'"
            flat
            class="rounded-card"
          >
            <v-img
              :src="content.photo"
            />
          </v-card>
          <div
            v-if="false"
            class="d-flex seen justify-center align-center"
          >
            <i class="fi fi-rr-check icon" />
          </div>
          <v-img
            v-if="type === 'pamphlet'"
            src="../assets/pdf.png"
          />
        </div>
      </div>
      <div class="left-content">
        <v-sheet
          v-if="false"
          text-color="#3e5480"
          depressed
          height="22"
          width="78"
          class="d-flex justify-center mb-2 rounded-pill time-sheet"
          color="#eff3ff"
        >
          <i class="fi fi-rr-clock ml-2" />
          <div>
            <span />
            <span> الی </span>
            <span />
          </div>
        </v-sheet>
        <v-sheet
          v-if="false"
          class="mb-2"
          color="transparent"
          height="22"
        />
        <div class="d-flex flex-column justify-center title-box">
          <p class="contentListItem-title ">
            {{ content.short_title }}
          </p>
          <p
            class="contentListItem-description"
          >
            {{ content.title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import {Content} from '../Models/Content';

export default {
  name:'ContentListItem',
  props: {
    content: {
      type: Content,
      default: () => {
        return new Content();
      },
    },
    selected: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ''
    }
  },
  methods: {
    changeSelectedItem(){
      this.$emit('itemClicked')
    }
  },
  data(){
    return {
    }
  },

}
</script>
<style scoped>
.selected-content-list{
  background-color: rgba(159, 165, 192, 0.23);
}
.v-application p {
  margin-bottom: 0;
}

/*::-webkit-scrollbar {*/
/*  width: 20px;*/
/*}*/
/*::-webkit-scrollbar-track {*/
/*  background: red;*/
/*}*/
/*::-webkit-scrollbar-thumb {*/
/*  background: blue;*/
/*}*/
/*::-webkit-scrollbar-thumb:hover {*/
/*background: #555*/
/*}*/
.contentListItem-main-box {
  margin: 0 32px 21px 32px;
}

.content-list-item .contentListItem-main-box {
  border-bottom: solid 1px rgba(159, 165, 192, 0.58);
}

.content-list-item:last-child .contentListItem-main-box {
  border-bottom: none;
}

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

.contentListItem-box .seen .icon {
  font-size: 25px;
  color: #fff;
}

.contentListItem-description {
  font-size: 14px;
  color: #9fa5c0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.contentListItem-title {
  font-size: 18px;
  font-weight: 500;
  text-align: right;
  color: #3e5480;
  margin-bottom: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.contentListItem-main-box .left-content .time-sheet {
  font-size: 12px;
}

.contentListItem-box .rounded-card {
  width: 96px;
  height: 54px;
  border-radius: 10px;
}

.right-content {
  margin-bottom: 21px;
}

.left-content {
  margin-right: 15px;
  width: 100%;
  height: 100%;
}

.left-content .title-box {
  height: 100%;
  width: 100%;
}

@media screen and (max-width: 1920px) {
  .contentListItem-box {
    position: relative;
    border-radius: 0;
  }
  .contentListItem-main-box {
    margin: 0 11px 21px 11px;
  }
  .contentListItem-box .rounded-card {
    height: 40px;
    width: 71px;
    border-radius: 5px;
  }
  .contentListItem-box .seen {
    height: 40px;
    width: 71px;
    border-radius: 5px;
  }
  .title-box .contentListItem-description {
    font-size: 14px;
    color: #9fa5c0;
  }
  .left-content {
    margin-right: 10px;
  }
  .contentListItem-main-box .left-content .time-sheet {
    font-size: 12px;
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
  .left-content {
    margin-right: 5px;
  }

  .right-content {
    margin-bottom: 15px;
  }

  .contentListItem-main-box {
    margin-bottom: 15px;
  }
}

@media screen and (max-width: 350px) {
  .title-box .contentListItem-title {
    font-size: 14px;
  }

  .title-box .contentListItem-description {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .contentListItem-box .rounded-card {
    height: 33px;
    width: 60px;
  }

  .contentListItem-box .seen {
    height: 33px;
    width: 60px;
  }
}
</style>
