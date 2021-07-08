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
            <content-list> 
              <template v-slot:header>
                test
              </template>
            </content-list>
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
import chipGroup from "../components/chipGroup";
import videoBox  from "../components/videoBox";

export default {
  components: {ContentList, CommentBox , chipGroup , videoBox}
}
</script>
