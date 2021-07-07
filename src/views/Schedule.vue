<template>
  <div class="schedule-page">
    <div>
      نمایش محتوا بر اساس فعالیت شما
      chip1
      chip2
    </div>
    <v-row>
      <v-col md="9">
        <v-row>
          <v-col md="12">
            <video-box />
          </v-col>
          <v-col md="12">
            <comment-box />
          </v-col>
        </v-row>
      </v-col>
      <v-col md="3">
        <v-row>
          <v-col md="12">
            <content-list />
          </v-col>
          <v-col md="12">
            <content-list />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import CommentBox from "@/components/CommentBox";
import ContentList from "@/components/ContentList";
import VideoBox from "../components/videoBox";
export default {
  components: {VideoBox, ContentList, CommentBox}
}
</script>
