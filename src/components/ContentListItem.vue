<template>
  <v-card
      class="rounded-0 transparent"
      :color=" selected ? '#f2f5ff' : 'transparent'"
      flat
  >
    <div
        class="contentListItem-main-box"
        :class=" $vnode.key === length ? '' : 'list-border-bottom'"
    >
      <div class="right-content">
        <v-card
            height="22"
            class="mb-2 rounded-pill text-center text-caption"
            flat
            dark
            color="#009498"
        >
          تلت
        </v-card>
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
              class="d-flex justify-center align-center"
          ><i class="fi fi-rr-check icon"></i>
          </div>
        </div>
      </div>
      <div class="left-content">
        <v-sheet
            text-color="#3e5480"
            depressed
            height="22"
            width="78"
            class="d-flex justify-center mb-2 rounded-pill time-sheet "
            color="#eff3ff"
        >
           <i class="fi fi-rr-clock ml-2">
           </i>
          <div>
            <span>{{ data[0].time1 }}</span>
            <span> الی </span>
            <span>{{ data[0].time2 }}</span>
          </div>


        </v-sheet>
        <div class="title-box">
          <p class="contentListItem-title ">
            {{ data[0].title }}
          </p>
          <p class="contentListItem-description ">
            {{ data[0].description }}
          </p>
        </div>
      </div>
    </div>
  </v-card>
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
            // eslint-disable-next-line vue/max-len
            title: 'جلسه فیلان - فرسنگ هشتم جلسه فیلان - فرسنگ هشتم جلسه فیلان - فرسنگ هشتم ',
            // eslint-disable-next-line vue/max-len
            description: '(قسمت بیست و سوم)، فصل سوم',
            seen: true,
            time1: '12',
            time2: '19'
          },
        ]
      }
    },
    selected: {
      type: Boolean,
      default: true
    },
    length: {
      type: Number,
      default: 0
    }
  },
  methods: {}
}
</script>

<style scoped>
.v-application p {
  margin-bottom: 0;
}

.contentListItem-main-box {
  margin: 0 32px 21px 32px;
  display: flex
}

.list-border-bottom {
  border-bottom: solid 1px rgba(159, 165, 192, 0.58);
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
}

@media screen and (max-width: 1200px) {
  .contentListItem-box {
    position: relative;
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
