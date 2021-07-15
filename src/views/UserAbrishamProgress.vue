<template>
  <div class="schedule-page">
    <!--   -- ------------------------------- chip group ------------------------- -->
    <v-row>
      <v-col
        lg="9"
        md="7"
        cols="12"
        order-lg="2"
        class="d-flex d-md-block justify-center"
      >
        <v-row>
          <v-col
            lg="6"
            md="6"
            cols="6"
          >
            <chip-group v-model="majors" />
          </v-col>
          <v-col
            lg="6"
            md="5"
            cols="6"
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
        order-lg="-1"
        class="text-md-right text-center d-flex flex-column justify-center"
      >
        نمایش محتوا بر اساس فعالیت شما
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
        <content-list-component
          v-model="currentContent"
          :loading="contentListLoading"
          :contents="filteredContents"
          :header="{ title: 'لیست فیلم ها', button: { title: 'من کجام؟', event: 'whereAmI' } }"
          type="video"
          @whereAmI="whereAmI"
        >
          <template v-slot:filter>
            <div class="d-flex  v-select-box">
              <div class="ml-xm-2 ml-5 ">
                <v-select
                  v-model="setFilterId"
                  :loading="contentListLoading"
                  color="#3e5480"
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
                  @change="getContents(setFilterId)"
                />
              </div>
              <v-select
                v-model="sectionFilterId"
                :loading="contentListLoading"
                value="all"
                color="#3e5480"
                :menu-props="{ bottom: true, offsetY: true }"
                :items="filteredSections"
                item-text="title"
                item-value="id"
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
    <!--   --------------------------------- comment box &&  content list item ------------------------- -->
    <v-row>
      <v-col
        md="8"
        cols="12"
      >
        <div v-text="currentContent.title" />
        <comment-box />
      </v-col>
      <v-col
        md="4"
        cols="12"
      >
        <content-list-component
          :header="{ title: 'جزوه ها' }"
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
import {SetList} from '@/Models/Set';
import StudyPlanGroup from '@/components/studyPlanGroup/StudyPlanGroup';
import {SetSection} from '@/Models/SetSection';
import Vue from 'vue'

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
      setFilterId: '',
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
      return this.sets.list.filter(set => this.setFilterId === set.id)
    },
    selectedLesson () {
      return this.lessons.find( item => item.selected )
    },
    filteredContents () {
      return new ContentList(this.contents.list.filter(content =>  {
        return this.sectionFilterId === 'all' || content.section.id === this.sectionFilterId
      }))
    },
    filteredSections () {
      if (this.sets.list.length === 0) {
        return []
      }
      var setFilterId = this.setFilterId
      if (this.setFilterId === null || this.setFilterId === '') {
        setFilterId = this.sets.list[0].id
      }
      var selectedSet = this.sets.list.find( setItem => setItem.id === setFilterId )
      if (!selectedSet) {
        return []
      }

      return selectedSet.sections.list
    }
  },
  watch : {
    selectedLesson (newValue) {
      if (!newValue) {
        return
      }
      this.getSets(newValue.id)
    },
    setFilterId (newValue) {
      this.getContents(newValue)
    }
  },
  created() {
    this.getLessons()
    // this.getSets(443)
    // this.getContents(906)
  },
  methods: {
    whereAmI () {
      let product = this.lessons.find(lesson => lesson.selected)
      axios.get('/api/v2/product/' + product.id + '/toWatch')
      .then(response => {
        this.contentListLoading = true
        axios.get('/api/v2/set/' + response.data.data.set.id + '/contents')
            .then( response2 => {
              this.contents = new ContentList(response2.data.data)
              this.changeCurrentContent(response.data.data.id)
              this.contentListLoading = false
            })
            .catch(() => {
              this.contentListLoading = false
            })
        this.setFilterId = response.data.data.set.id
      })
    },
    changeCurrentContent (id) {
      Vue.set(this, 'currentContent', this.contents.list.find(content => content.id === id))
      this.currentContent = this.contents.list.find(content => content.id === id)
    },
    getLessons () {
      axios.get('/api/v2/abrisham/lessons')
      .then( response => {
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
        this.whereAmI()
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
        this.sets.list.forEach(item => item.sections.list.unshift(new SetSection({ id: 'all', title: 'همه' })))
        this.contentListLoading = false
      })
      .catch(() => {
        this.contentListLoading = false
      })
    },
    getContents (setId) {
      this.contentListLoading = true
      axios.get('/api/v2/set/' + setId + '/contents')
      .then( response => {
        this.contents = new ContentList(response.data.data)
        this.contentListLoading = false
      })
      .catch(() => {
        this.contentListLoading = false
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
.v-select-box {
  .theme--light.v-label{
    color:#3e5480;
    font-size: 14px;
    font-weight: 500;
  }
}
.v-select-box {
  .theme--light.v-icon{
    color:#3e5480;
  }
}
.schedule-page {
  @media screen and (max-width: 1920px) {
    & {
      margin: 0 58px;
    }
    .content-list-box  .v-select-box{
      margin: 0 15px;
    }
  }
  @media screen and (max-width: 1200px) {
    & {
      margin: 0 8px;
    }
  }
}
</style>
