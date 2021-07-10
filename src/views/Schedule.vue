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

export default {
  components: {StudyPlan, ContentList, CommentBox, chipGroup, videoBox},
  data() {
    return {
      currentContent: new Content()
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
