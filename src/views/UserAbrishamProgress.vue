<template>
  <div class="schedule-page">
    <v-row>
      <v-col
        xl="9"
        md="6"
        cols="12"
        order-md="2"
        class="d-flex d-md-block justify-center"
      >
        <v-row>
          <v-col
            xl="4"
            md="4"
            cols="12"
          >
            <chip-group v-model="majors" />
          </v-col>
          <v-col
            xl="8"
            md="8"
            cols="12"
          >
            <chip-group v-model="lessons" title="درس" />
          </v-col>
        </v-row>
      </v-col>
      <v-col
        xl="3"
        md="6"
        cols="12"
        order-md="1"
        class="text-md-right text-center"
      >
        نمایش محتوا بر اساس فعالیت شما
      </v-col>
    </v-row>
    <v-row>
      <v-col md="9">
        <video-box
          :content="currentContent"
        />
      </v-col>
      <v-col md="3">
        <content-list>
          <template v-slot:filter>
            <div class="d-flex justify-space-between v-select-box">
              <div class="ml-xm-2 ml-5">
                <v-select
                  :items="items"
                  :menu-props="{ bottom: true, offsetY: true }"
                  solo
                  append-icon="mdi-chevron-down"
                  dense
                  background-color="#eff3ff"
                  flat
                  placeholder="gtrh"
                />
              </div>
              <v-select
                :items="items"
                :menu-props="{ bottom: true, offsetY: true }"
                solo
                append-icon="mdi-chevron-down"
                dense
                background-color="#eff3ff"
                flat
              />
            </div>
          </template>
        </content-list>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="9">
        <comment-box />
      </v-col>
      <v-col md="3">
        <content-list />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <study-plan />
      </v-col>
    </v-row>
  </div>
</template>
<script>

import {Content} from "../Models/Content";
import CommentBox from "../components/CommentBox";
import ContentList from "../components/ContentList";
import chipGroup from "../components/chipGroup";
import videoBox from "../components/videoBox";
import StudyPlan from "../components/StudyPlan";
import {StudyPlanList} from "../Models/StudyPlan";
import axios from "axios";

export default {
  name: 'UserAbrishamProgress',
  components: {StudyPlan, ContentList, CommentBox, chipGroup, videoBox},
  data() {
    return {
      majors: [],
      currentContent: new Content(),
      studyPlans: new StudyPlanList()
    }
  },
  computed: {
    lessons () {
      return this.majors.filter( majorItem => majorItem.selected).map( item => item.lessons )[0]
    }
  },
  created() {
    this.getLessons()
    this.getSets(443)
    this.getContents(906)
  },
  methods: {
    getLessons () {
      axios.get('/api/v2/abrisham/lessons')
      .then( response => {
        console.log('getLessons', response)
        response.data.forEach( (item, index) => {
          this.majors.push({
            id: index,
            title: item.title,
            lessons: item.lessons,
            selected: false,
            color: '#ffffff'
          })
        })
        this.setMajorSelected()
      })
    },
    setMajorSelected () {
      this.majors.forEach( mejorItem => {
        mejorItem.lessons.forEach( lessonItem => {
          if (lessonItem.selected) {
            mejorItem.selected = true
          }
        })
      })
    },
    getSets (productId) {
      axios.get('/api/v2/product/' + productId + '/sets')
      .then( response => {
        console.log('getSets', response)
      })
    },
    getContents (setId) {
      axios.get('/api/v2/set/' + setId)
      .then( response => {
        console.log('getContents', response)
        console.log('getContents', response.data.data.contents)
      })
    },
    setComment () {

    },
    // getStudyPlans () {
    //   this.studyPlans.fetch({'studyPlan_id' : 1}, '/api/v2/plan')
    //   .then( (response) => {
    //     this.studyPlans = new StudyPlanList(response.data.data)
    //   })
    // },
    loadPlansOfStudyPlan (studyPlanId) {
      axios.get('/api/v2/plan', { params: {'studyPlan_id': studyPlanId, }})
    }
  }
}
</script>

<style lang="scss">
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
