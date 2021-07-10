<template>
  <div class="schedule-page">
    <v-row>
      <v-col
        xl="7"
        md="6"
        cols="12"
        order-md="2"
        class="d-flex d-md-block justify-center"
      >
        <chip-group />
      </v-col>
      <v-col
        xl="5"
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
          <template v-slot:header>
            test
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
        <study-plan-group />
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
import StudyPlanGroup from "../components/StudyPlanGroup";
import {StudyPlanList} from "../Models/StudyPlan";
import axios from "axios";

export default {
  name: 'Schedule',
  components: {StudyPlanGroup, ContentList, CommentBox, chipGroup, videoBox},
  data() {
    return {
      currentContent: new Content(),
      studyPlans: new StudyPlanList()
    }
  },
  created() {
    // this.getStudyPlans()
  },
  methods: {
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
