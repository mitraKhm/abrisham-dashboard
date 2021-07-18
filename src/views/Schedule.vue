<template>
  <div class="schedule-page">
    <!--   --------------------------------- chip group ------------------------- -->
    <v-row>
      <v-col
        xl="7"
        md="6"
        cols="12"
        order-md="2"
        class="d-flex d-md-block justify-center"
      >
        <chip-group
          v-model="userMajors"
          chip-title="رشته: "
        />
      </v-col>
      <v-col
        xl="5"
        md="6"
        cols="12"
        order-md="1"
        class="text-md-right text-center"
      >
        نمایش محتوا بر اساس برنامه مطالعاتی
      </v-col>
    </v-row>

    <!--   --------------------------------- video box &&  content list item ------------------------- -->
    <v-row>
      <v-col
        md="8"
        cols="12"
      >
        <video-box
          :content="currentContent"
          @favorite="toggleFavor"
          @has_watched="watched"
        />
      </v-col>
      <v-col
        md="4"
        cols="12"
      >
        <date-picker
          v-model="DatePickerDate"
          element="null"
          input-format="YYYY-MM-DD"
          format="YYYY-MM-DD"
          :show="showDatePicker"
          @close="showDatePicker = false"
          @change="onChangeDate"
        />
        <content-list-component
          v-model="currentContent"
          :loading="contentListLoading"
          :contents="filteredContents"
          :header="{ title: 'لیست فیلم ها', button: { title: 'روزهای دیگر' }}"
          type="video"
          @input="changeCurrentContent($event.id)"
          @clicked="showDatePicker = true"
        />
      </v-col>
    </v-row>
    <!--   --------------------------------- comment box &&  content list item ------------------------- -->
    <v-row>
      <v-col
        md="8"
        sm="12"
        xs="12"
      >
        <div v-text="currentContent.title" />
        <comment-box />
      </v-col>
      <v-col
        md="4"
        xs="12"
      >
        <content-list-component />
      </v-col>
    </v-row>
    <!--   --------------------------------- study plan ------------------------- -->
    <v-row v-if="false">
      <v-col>
        <study-plan-group />
      </v-col>
    </v-row>
  </div>
</template>

<script>

import {Content, ContentList} from '../Models/Content';
import CommentBox from '../components/CommentBox';
import ContentListComponent from '../components/ContentList';
import chipGroup from '../components/chipGroup';
import videoBox from '../components/videoBox';
import StudyPlanGroup from '../components/studyPlanGroup/StudyPlanGroup';
import {StudyPlanList} from '../Models/StudyPlan';
import axios from 'axios';
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
import Vue from 'vue';
import ContentMixin from '../Mixin/ContentMixin'

export default {
  name: 'Schedule',
  components: {StudyPlanGroup, ContentListComponent, CommentBox, chipGroup, videoBox, datePicker: VuePersianDatetimePicker},
  mixins: [ContentMixin],
  destroyed () {
    console.log('destoryed')
  },
  data() {
    return {
      showDatePicker: false,
      DatePickerDate: '',
      majors: [],
      userMajors: [],
      contentListLoading: false,
      contents: new ContentList(),
      currentContent: new Content(),
      studyPlans: new StudyPlanList()
    }
  },
  computed: {
    filteredContents () {
      return new ContentList(this.contents.list.filter(content =>  {
        const selectedMajor = this.userMajors.find(major => major.selected)
        return !selectedMajor || content.major.id === selectedMajor.id
      }))
    }
  },
  created() {
    this.getLessons()
    this.getContents()
    this.getMajorsForChip()
  },
  methods: {
    changeCurrentContent (id) {
      Vue.set(this, 'currentContent', this.contents.list.find(content => content.id === id))
      this.currentContent = this.contents.list.find(content => content.id === id)
      if (this.currentContent.comments[0]) {
        this.comment = this.currentContent.comments[0].comment
        // console.log('comment', this.currentContent.comments[0].comment)
      } else {
        this.comment = ''
      }
    },
    onChangeDate () {
      this.getContents(this.DatePickerDate)
    },
    getContents (date) {
      axios.get('/api/v2/abrisham/whereIsKarvan', { params: {'date': date }})
          .then( response => {
            this.contents = new ContentList(response.data.data)
            // find and set the color of the content
            this.contents.list.forEach(content => {
              let major = this.majors.find(major => major.id === content.major.id)
              let lesson
              if (major.lessons) {
                lesson = major.lessons.find(lesson => lesson.title === content.inputData.lesson_name)
              }
              if (major.lessons && lesson) {
                content.color = lesson.color
                return
              }
              content.color = 'red'
            })
            this.currentContent = new Content(this.contents.list[0])
          })
    },
    getLessons () {
      axios.get('/api/v2/abrisham/lessons')
          .then( response => {
            response.data.data.forEach( (item, index) => {
              this.majors.push({
                id: index,
                title: item.title,
                lessons: item.lessons,
                selected: false,
                color: item.color
              })
            })
          })
    },
    loadPlansOfStudyPlan (studyPlanId) {
      axios.get('/api/v2/plan', { params: {'studyPlan_id': studyPlanId, }})
    },
    getMajors (studyPlanId) {
      axios.get('/api/v2/plan', { params: {'studyPlan_id': studyPlanId, }})
      .then( response => {
        this.majors = response.data.data
      })
    },
    getMajorsForChip () {
      axios.get('/api/v2/abrisham/majors')
      .then(response => {
        this.userMajors = response.data.data
        this.userMajors.forEach((major, index) => major.selected = index === 0)
        this.userMajors.forEach((major) => major.color = 'red')
      })
    }
  }
}
</script>

<style lang="scss">
.video-box-title {
  color: #3e5480;
  font-size: 20px;
  font-weight: 500;
}
.schedule-page {
  @media screen and (max-width: 1920px) {
    & {
      margin: 0 58px;
    }
  }
  @media screen and (max-width: 1200px) {
    & {
      margin: 0 8px;
    }
  }
}
</style>
