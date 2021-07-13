<template>
  <div>
    <v-card
      class="study-plan"
      elevation="0"
    >
      <v-card-title class="study-plan-header-title">
        جدول برنامه مطالعاتی راه ابریشم آلاء
      </v-card-title>
      <div class="major-card">
        <p class="major-card-text">
          رشته:
        </p>
        <v-select
          v-model="selectedMajor"
          :items="majorOptions"
          :item-value=" (item) => item"
          item-text="name"
          solo
          flat
        />
      </div>
      <v-row>
        <v-expansion-panels
          v-for="(item, index) in studyPlanList.list"
          :key="index"
          flat
          class="study-plan-expansion"
        >
          <study-plan
            :study-plan="item"
            :selected-major="selectedMajor"
          />
        </v-expansion-panels>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import StudyPlan from '../components/StudyPlan';
import {StudyPlanList} from '@/Models/StudyPlan.js'
import Major from '@/Models/Major';
export default {
  props: {
    studyPlanList : {
      type: StudyPlanList,
      default() {
        return new StudyPlanList([{'studyPlan_id':169,'id':'2021-03-21','date':'2021-03-21','voice':null,'body':null,'title':null,'contents':null},{'studyPlan_id':144,'id':'2021-03-22','date':'2021-03-22','voice':null,'body':null,'title':null,'contents':null},{'studyPlan_id':145,'id':'2021-03-23','date':'2021-03-23','voice':null,'body':null,'title':null,'contents':null},{'studyPlan_id':146,'id':'2021-03-24','date':'2021-03-24','voice':null,'body':null,'title':null,'contents':null},{'studyPlan_id':147,'id':'2021-03-25','date':'2021-03-25','voice':null,'body':null,'title':null,'contents':null},{'studyPlan_id':148,'id':'2021-03-26','date':'2021-03-26','voice':null,'body':null,'title':null,'contents':null},{'studyPlan_id':149,'id':'2021-03-27','date':'2021-03-27','voice':null,'body':null,'title':null,'contents':null},{'studyPlan_id':150,'id':'2021-03-28','date':'2021-03-28','voice':null,'body':null,'title':null,'contents':null},{'studyPlan_id':151,'id':'2021-03-29','date':'2021-03-29','voice':null,'body':null,'title':null,'contents':null},{'studyPlan_id':152,'id':'2021-03-30','date':'2021-03-30','voice':null,'body':null,'title':null,'contents':null},{'studyPlan_id':153,'id':'2021-03-31','date':'2021-03-31','voice':null,'body':null,'title':null,'contents':null},{'studyPlan_id':154,'id':'2021-04-01','date':'2021-04-01','voice':null,'body':null,'title':null,'contents':null},{'studyPlan_id':155,'id':'2021-04-02','date':'2021-04-02','voice':null,'body':null,'title':null,'contents':null},{'studyPlan_id':156,'id':'2021-04-03','date':'2021-04-03','voice':null,'body':null,'title':null,'contents':null},{'studyPlan_id':157,'id':'2021-04-04','date':'2021-04-04','voice':null,'body':null,'title':null,'contents':null},{'studyPlan_id':158,'id':'2021-04-05','date':'2021-04-05','voice':null,'body':null,'title':null,'contents':null},{'studyPlan_id':159,'id':'2021-04-06','date':'2021-04-06','voice':null,'body':null,'title':null,'contents':null},{'studyPlan_id':160,'id':'2021-04-07','date':'2021-04-07','voice':null,'body':null,'title':null,'contents':null},{'studyPlan_id':161,'id':'2021-04-08','date':'2021-04-08','voice':null,'body':null,'title':null,'contents':null},{'studyPlan_id':162,'id':'2021-04-09','date':'2021-04-09','voice':null,'body':null,'title':null,'contents':null},{'studyPlan_id':163,'id':'2021-04-10','date':'2021-04-10','voice':null,'body':null,'title':null,'contents':null},{'studyPlan_id':164,'id':'2021-04-11','date':'2021-04-11','voice':null,'body':null,'title':null,'contents':null},{'studyPlan_id':165,'id':'2021-04-12','date':'2021-04-12','voice':null,'body':null,'title':null,'contents':null},{'studyPlan_id':166,'id':'2021-04-13','date':'2021-04-13','voice':null,'body':null,'title':null,'contents':null},{'studyPlan_id':167,'id':'2021-04-14','date':'2021-04-14','voice':null,'body':null,'title':null,'contents':null},{'studyPlan_id':168,'id':'2021-04-15','date':'2021-04-15','voice':null,'body':null,'title':null,'contents':null}])
      }
    },
  },
  components: {StudyPlan},
  created() {
    this.doesSelectedMajorExist()
    console.log(this.StudyPlanList)
    console.log(this.selectedMajor)
  },
  data(){
    return {
      majorOptions : [
        new Major({
        id: 1,
        name: 'ریاضی',
        }),
        new Major({
          id: 2,
          name: 'تجربی',
        }),
        new Major({
          id: 3,
          name: 'انسانی',
        })
      ],
      major : '',
      selectedMajor : new Major()

    }
  },
  methods :{
    doesSelectedMajorExist(){
      if (this.selectedMajor.id ===null) {
        this.selectedMajor = this.majorOptions[0]
      }
    }
  }
}

</script>

<style scoped>
.major-card .v-text-field.v-text-field--enclosed {
  padding-top: 12px !important;
  margin-right: 15px !important;
}

.theme--light.v-card {
  background-color: #ffe2bc;
  color: #3e5480;
  padding-bottom: 51px;
}

.v-sheet.v-card {
  border-radius: 40px;
}

.v-card__title {
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  justify-content: center;
  padding-top: 40px;
}

.theme--light.v-expansion-panels .v-expansion-panel {
  margin-top: 15px;
  border-radius: 20px;
}

.v-expansion-panels {
  border-radius: 20px !important;
}

.theme--light.v-sheet .study-plan-sheet {
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  background-color: #feedbb;
  color: #3e5480;
  border-color: #FFFFFF;
  padding-top: 7px;
  padding-bottom: 5px;
  border-radius: 10px;
}

.study-plan .major-card {
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  position: relative;
  margin-top: -57px;
}

.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile) > .v-expansion-panel--active {
  border-radius: 20px !important;
}

.study-plan .major-card .v-input {
  max-width: 12%;
}

.study-plan .study-plan-expansion {
  padding: 0 60px 0 60px !important;
}

.study-plan .major-card .major-card-text {
  margin-right: 60px;
}

.study-plan .study-plan-expansion-header {
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #3e5480;
}

.study-plan .study-plan-expansion .study-plan-expansion-header .v-card__subtitle, .v-card__text {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
  letter-spacing: 0.0071428571em;
  margin-right: 38px;
}

.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile) > .v-expansion-panel--active {
  box-shadow: 0 3px 10px 0 rgb(0 0 0 / 10%);
}

.theme--light.v-card .study-plan-card {
  background-color: #e1f0ff;
  color: #3e5480;
  margin-top: 10px;
}

.v-sheet.v-card .study-plan-card {
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 44px;
}

.theme--light.v-card .study-plan-boxes {
  background-color: #ffffff;
  color: #3e5480;
  margin-bottom: 1px;
}

.v-sheet.v-card .study-plan-boxes {
  border-radius: 0 0 10px 10px;
  width: 99.6%;
  padding-top: 20px;
}

.v-card__subtitle, .v-card__text, .v-card__title .study-plan-card {
  padding: 11px;
}

.study-plan .study-plan-card .study-plan-card-hours {
  display: inline-block;
  border-radius: 50%;
  background-color: #FFFFFF;
  padding: 2px 6px 0 6px;
}


</style>
<style>
.v-text-field fieldset, .v-text-field .v-input__control, .v-text-field .v-input__slot {
  border-radius: 10px !important;
}
</style>
