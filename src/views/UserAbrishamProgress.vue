<template>
  <div class="schedule-page">
    <v-row>
      <v-col
        lg="9"
        md="6"
        cols="12"
        order-md="2"
        class="d-flex d-md-block justify-center"
      >
        <v-row>
          <v-col
            lg="6"
            md="6"
            cols="12"
          >
            <chip-group v-model="majors" />
          </v-col>
          <v-col
            lg="6"
            md="6"
            cols="12"
          >
            <chip-group
              v-model="lessons"
              title="درس"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col
        lg="3"
        md="6"
        cols="12"
        order-md="1"
        class="text-md-right text-center"
      >
        نمایش محتوا بر اساس فعالیت شما
      </v-col>
    </v-row>
    <v-row>
      <v-col md="8">
        <video-box
          :content="currentContent"
        />
      </v-col>
      <v-col md="4">
        <content-list-component
          :loading="contentListLoading"
          :contents="filteredContents"
          type="video"
        >
          <template v-slot:filter>
            <div class="d-flex justify-space-between v-select-box">
              <div class="ml-xm-2 ml-5">
                <v-select

                  v-model="setFilterId"
                  value="all"
                  :items="sets.list"
                  item-text="short_title"
                  item-value="id"
                  :menu-props="{ bottom: true, offsetY: true }"
                  solo
                  append-icon="mdi-chevron-down"
                  dense
                  background-color="#eff3ff"
                  flat
                  placeholder="انتخاب فرسنگ ها"
                />
              </div>
              <v-select

                :menu-props="{ bottom: true, offsetY: true }"
                solo
                append-icon="mdi-chevron-down"
                dense
                background-color="#eff3ff"
                placeholder="همه"
                flat
              />
            </div>
          </template>
        </content-list-component>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="8">
        <comment-box />
      </v-col>
      <v-col md="4">
        <content-list-component
          :loading="contentListLoading"
          :contents="filteredContents"
          type="pamphlet"
        />
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

import { Content, ContentList } from '../Models/Content';
import CommentBox from '../components/CommentBox';
import ContentListComponent from '../components/ContentList';
import chipGroup from '../components/chipGroup';
import videoBox from '../components/videoBox';
import {StudyPlanList} from '../Models/StudyPlan';
import axios from 'axios';
import {SetList, Set} from '@/Models/Set';
import StudyPlanGroup from '@/components/studyPlanGroup/StudyPlanGroup';
import {SetSection} from "@/Models/SetSection";

export default {
  name: 'UserAbrishamProgress',
  components: {StudyPlanGroup, ContentListComponent, CommentBox, chipGroup, videoBox},
  data() {
    return {
      majors: [],
      contents: new ContentList(),
      currentContent: new Content(),
      studyPlans: new StudyPlanList(),
      sets: new SetList(),
      setFilterId: 'all',
      sectionFilterId: 'all',
      contentListLoading: false
    }
  },
  computed: {
    lessons () {
      let lessons = this.majors.filter( majorItem => majorItem.selected).map( item => item.lessons )[0]
      if (!lessons) {
        return []
      }
      lessons.map( item => {
        item.color = 'blue'
        return item
      } )

      const hasSelected = lessons.find( item => item.selected )

      if (!hasSelected && lessons.length > 0) {
        lessons[0].selected = true
      }

      return lessons
    },
    filteredSets () {
      return this.sets.list.filter(set => this.setFilterId === 'all' || this.setFilterId === set.id)
    },
    selectedLesson () {
      return this.lessons.find( item => item.selected )
    },
    filteredContents () {
      if (this.setFilterId === 'all') {
        return this.contents
      }
      return new ContentList(this.contents.list.filter(content => content.section.id === this.sectionFilterId))
    }
  },
  watch : {
    selectedLesson (newValue) {
      this.getSets(newValue.id)
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
            color: 'red'
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
      this.contentListLoading = true
      axios.get('/api/v2/product/' + productId + '/sets')
      .then( response => {
        if (response.data.data.length > 0) {
          this.getContents(response.data.data[0].id)
        }
        this.sets = new SetList(response.data.data)
        this.sets.list.unshift(new Set({id: 'all', short_title: 'همه'}))
        this.sets.list.forEach(item => item.sections.list.unshift(new SetSection({ id: 'all', title: 'همه' })))
        this.contentListLoading = false
      })
    },
    getContents (setId) {
      axios.get('/api/v2/set/' + setId)
      .then( response => {
        console.log('getContents', response)
        console.log('getContents', response.data.data.contents)
        this.contents = new ContentList(response.data.data.contents)
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
