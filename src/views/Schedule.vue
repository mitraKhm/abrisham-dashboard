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
        <chip-group v-model="majors" />
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
          format="YYYY/MM/DD"
          :show="showDatePicker"
          @close="showDatePicker = false"
          @change="getContents(DatePickerDate)"
        />
        <content-list-component
          v-model="currentContent"
          :loading="contentListLoading"
          :contents="filteredContents"
          :header="{ title: 'لیست فیلم ها', button: { title: 'روزهای دیگر' }}"
          type="video"
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
        <div class="d-flex">
          <p class="video-box-title">
            درسنامه فرسنگ هشتم (قسمت بیست و سوم)، فصل سوم شیمی یازدهم (قسمت
            بیست و سوم)
          </p>
        </div>
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
    <v-row>
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

export default {
  name: 'Schedule',
  components: {StudyPlanGroup, ContentListComponent, CommentBox, chipGroup, videoBox, datePicker: VuePersianDatetimePicker},
  data() {
    return {
      showDatePicker: false,
      DatePickerDate: '',
      majors: [],
      selectedMajor: null,
      contentListLoading: false,
      contents: new ContentList(),
      currentContent: new Content(),
      studyPlans: new StudyPlanList()
    }
  },
  computed: {
    filteredContents () {
      if (!this.selectedMajor) {
        return this.contents
      }

      return new ContentList(this.contents.list.filter(content =>  {
        return this.sectionFilterId === 'all' || content.section.id === this.selectedMajor.id
      }))
    },
  },
  created() {
    this.getLessons()
    this.getContents('2021-03-21')
  },
  methods: {
    getContents (date) {
      axios.get('/api/v2/abrisham/whereIsKarvan', { params: {'date': date, }})
          .then( response => {
            this.contents = new ContentList(response.data.data)
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
                color: 'red'
              })
            })
          })
    },
    // getStudyPlans () {
    //   this.studyPlans.fetch({'studyPlan_id' : 1}, '/api/v2/plan')
    //   .then( (response) => {
    //     this.studyPlans = new StudyPlanList(response.data.data)
    //   })
    // },
    loadPlansOfStudyPlan (studyPlanId) {
      axios.get('/api/v2/plan', { params: {'studyPlan_id': studyPlanId, }})
    },
    getMajors (studyPlanId) {
      axios.get('/api/v2/plan', { params: {'studyPlan_id': studyPlanId, }})
      .then( response => {
        this.majors = response.data.data
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
