<template>
  <v-expansion-panel>
    <v-expansion-panel-header class="study-plan-expansion-header">
      <v-row>
        <v-col
          cols="4"
          v-text="studyPlan.title"
        />
        <v-col
          cols="4"
          v-text="studyPlan.convertDate().dayOfWeek"
        />
        <v-col
          cols="4"
          v-text="studyPlan.convertDate().dateOfMonth"
        />
      </v-row>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-card
        class="study-plan-boxes"
        elevation="0"
      >
        <v-expansion-panel-content>
          <v-progress-linear
            indeterminate
            background-color="blue lighten-4"
            color="blue accent-2"
            :active="studyPlan.loading"
          />
          <!--            v-if="false"-->
          <v-sheet
            class="study-plan-sheet"
          >
            فردا دیره، دیروز هم دیشب تموم شد، الان دقیقا لحظه ای هست که باید شروع
            کنی!
          </v-sheet>
          <v-card
            class="study-plan-card"
            elevation="0"
          >
            <v-card-text>
              <time-schedule-table
                :plans="studyPlan.plans"
                :selected-major="selectedMajor"
                :loading="studyPlan.loading"
              />
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <individual-plan-details />
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import timeScheduleTable from "./TimeScheduleTable";
import { StudyPlan } from '@/Models/StudyPlan.js'
import { PlanList } from '@/Models/Plan.js'
import Major from "@/Models/Major";
import IndividualPlanDetails from "@/components/studyPlanGroup/IndividualPlanDetails";

export default {
  props: {
    studyPlan: {
      type: StudyPlan,
      default() {
        return new StudyPlan({
          "studyPlan_id": 144,
          "id": "2021-03-22",
          "date": "2021-03-22",
          "voice": null,
          "body": null,
          "title": null,
          "contents": null
        })
      }
    },
    selectedMajor: {
      default() {
        return new Major({
          id: 1,
          name: 'ریاضی'
        })
      },
      type: Major
    }
  },
  components :{
    IndividualPlanDetails,
    timeScheduleTable,

  },
  created() {
    this.loadPlans()
  },
  data() {
    return {
      planList : new PlanList([
        {
          "id": 2096,
          "title": "ریاضی پایه جلسه 1و2 دنباله ها",
          "description": null,
          "long_description": null,
          "date": "2021-03-22",
          "resourceId": "2021-03-22",
          "start": "07:30:00",
          "end": "08:45:00",
          "reshte": "riazi",
          "major": {
            "id": 1,
            "name": "ریاضی",
            "title": "ریاضی"
          },
          "backgroundColor": '#3e5480',
          "borderColor": '#3e5480',
          "textColor": '#ffffff',
          "url": null,
          "voice": null,
          "video": null,
          "contents": []
        },
        {
          "id": 2097,
          "title": "ریاضی پایه جلسه3 و4 عبارت های جبری،معادله و نامعادله",
          "description": null,
          "long_description": null,
          "date": "2021-03-22",
          "resourceId": "2021-03-22",
          "start": "09:00:00",
          "end": "10:15:00",
          "reshte": "riazi",
          "major": {
            "id": 1,
            "name": "ریاضی",
            "title": "ریاضی"
          },
          "backgroundColor": '#3e5480',
          "borderColor": '#3e5480',
          "textColor": '#ffffff',
          "url": null,
          "voice": null,
          "video": null,
          "contents": []
        },
        {
          "id": 2098,
          "title": "فیزیک دهم جلسه 1",
          "description": null,
          "long_description": null,
          "date": "2021-03-22",
          "resourceId": "2021-03-22",
          "start": "10:30:00",
          "end": "11:45:00",
          "reshte": "riazi",
          "major": {
            "id": 1,
            "name": "ریاضی",
            "title": "ریاضی"
          },
          "backgroundColor": '#3e5480',
          "borderColor": '#3e5480',
          "textColor": '#ffffff',
          "url": null,
          "voice": null,
          "video": null,
          "contents": []
        },
        {
          "id": 2099,
          "title": "فارسی 1تا5 دهم مطالعه",
          "description": null,
          "long_description": null,
          "date": "2021-03-22",
          "resourceId": "2021-03-22",
          "start": "12:00:00",
          "end": "13:15:00",
          "reshte": "riazi",
          "major": {
            "id": 1,
            "name": "ریاضی",
            "title": "ریاضی"
          },
          "backgroundColor": '#3e5480',
          "borderColor": '#3e5480',
          "textColor": '#ffffff',
          "url": null,
          "voice": null,
          "video": null,
          "contents": []
        },
        {
          "id": 2100,
          "title": "آماراحتمال جلسه1و2",
          "description": null,
          "long_description": null,
          "date": "2021-03-22",
          "resourceId": "2021-03-22",
          "start": "14:45:00",
          "end": "16:00:00",
          "reshte": "riazi",
          "major": {
            "id": 1,
            "name": "ریاضی",
            "title": "ریاضی"
          },
          "backgroundColor": '#3e5480',
          "borderColor": '#3e5480',
          "textColor": '#ffffff',
          "url": null,
          "voice": null,
          "video": null,
          "contents": []
        },
        {
          "id": 2101,
          "title": "فیزیک دهم جلسه 2",
          "description": null,
          "long_description": null,
          "date": "2021-03-22",
          "resourceId": "2021-03-22",
          "start": "16:15:00",
          "end": "17:30:00",
          "reshte": "riazi",
          "major": {
            "id": 1,
            "name": "ریاضی",
            "title": "ریاضی"
          },
          "backgroundColor": '#3e5480',
          "borderColor": '#3e5480',
          "textColor": '#ffffff',
          "url": null,
          "voice": null,
          "video": null,
          "contents": []
        },
        {
          "id": 2102,
          "title": "فارسی جلسه 1و2",
          "description": null,
          "long_description": null,
          "date": "2021-03-22",
          "resourceId": "2021-03-22",
          "start": "17:45:00",
          "end": "19:00:00",
          "reshte": "riazi",
          "major": {
            "id": 1,
            "name": "ریاضی",
            "title": "ریاضی"
          },
          "backgroundColor": '#3e5480',
          "borderColor": '#3e5480',
          "textColor": '#ffffff',
          "url": null,
          "voice": null,
          "video": null,
          "contents": []
        },
        {
          "id": 2103,
          "title": "دینی جلسه1 (درس1و2دهم)+تست 1تا28",
          "description": null,
          "long_description": null,
          "date": "2021-03-22",
          "resourceId": "2021-03-22",
          "start": "19:45:00",
          "end": "21:00:00",
          "reshte": "riazi",
          "major": {
            "id": 1,
            "name": "ریاضی",
            "title": "ریاضی"
          },
          "backgroundColor": '#3e5480',
          "borderColor": '#3e5480',
          "textColor": '#ffffff',
          "url": null,
          "voice": null,
          "video": null,
          "contents": []
        },
        {
          "id": 2272,
          "title": "زیست دهم فصل اول جلسه1+تست1تا10",
          "description": null,
          "long_description": null,
          "date": "2021-03-22",
          "resourceId": "2021-03-22",
          "start": "07:30:00",
          "end": "08:45:00",
          "reshte": "tajrobi",
          "major": {
            "id": 2,
            "name": "تجربی",
            "title": "تجربی"
          },
          "backgroundColor": '#3e5480',
          "borderColor": '#3e5480',
          "textColor": '#ffffff',
          "url": null,
          "voice": null,
          "video": null,
          "contents": []
        },
        {
          "id": 2273,
          "title": "زیست دهم فصل دوم جلسه2",
          "description": null,
          "long_description": null,
          "date": "2021-03-22",
          "resourceId": "2021-03-22",
          "start": "09:00:00",
          "end": "10:15:00",
          "reshte": "tajrobi",
          "major": {
            "id": 2,
            "name": "تجربی",
            "title": "تجربی"
          },
          "backgroundColor": '#3e5480',
          "borderColor": '#3e5480',
          "textColor": '#ffffff',
          "url": null,
          "voice": null,
          "video": null,
          "contents": []
        },
        {
          "id": 2274,
          "title": "فیزیک دهم جلسه 1",
          "description": null,
          "long_description": null,
          "date": "2021-03-22",
          "resourceId": "2021-03-22",
          "start": "10:30:00",
          "end": "11:45:00",
          "reshte": "tajrobi",
          "major": {
            "id": 2,
            "name": "تجربی",
            "title": "تجربی"
          },
          "backgroundColor": '#3e5480',
          "borderColor": '#3e5480',
          "textColor": '#ffffff',
          "url": null,
          "voice": null,
          "video": null,
          "contents": []
        },
        {
          "id": 2275,
          "title": "فارسی 1تا5 دهم",
          "description": null,
          "long_description": null,
          "date": "2021-03-22",
          "resourceId": "2021-03-22",
          "start": "12:00:00",
          "end": "13:15:00",
          "reshte": "tajrobi",
          "major": {
            "id": 2,
            "name": "تجربی",
            "title": "تجربی"
          },
          "backgroundColor": '#3e5480',
          "borderColor": '#3e5480',
          "textColor": '#ffffff',
          "url": null,
          "voice": null,
          "video": null,
          "contents": []
        },
        {
          "id": 2276,
          "title": "ریاضی جلسه1و2 معادله و تابع درجه2",
          "description": null,
          "long_description": null,
          "date": "2021-03-22",
          "resourceId": "2021-03-22",
          "start": "14:45:00",
          "end": "16:00:00",
          "reshte": "tajrobi",
          "major": {
            "id": 2,
            "name": "تجربی",
            "title": "تجربی"
          },
          "backgroundColor": '#3e5480',
          "borderColor": '#3e5480',
          "textColor": '#ffffff',
          "url": null,
          "voice": null,
          "video": null,
          "contents": []
        },
        {
          "id": 2277,
          "title": "فیزیک دهم جلسه 2",
          "description": null,
          "long_description": null,
          "date": "2021-03-22",
          "resourceId": "2021-03-22",
          "start": "16:15:00",
          "end": "17:30:00",
          "reshte": "tajrobi",
          "major": {
            "id": 2,
            "name": "تجربی",
            "title": "تجربی"
          },
          "backgroundColor": '#3e5480',
          "borderColor": '#3e5480',
          "textColor": '#ffffff',
          "url": null,
          "voice": null,
          "video": null,
          "contents": []
        },
        {
          "id": 2278,
          "title": "فارسی جلسه 1و2",
          "description": null,
          "long_description": null,
          "date": "2021-03-22",
          "resourceId": "2021-03-22",
          "start": "17:45:00",
          "end": "19:00:00",
          "reshte": "tajrobi",
          "major": {
            "id": 2,
            "name": "تجربی",
            "title": "تجربی"
          },
          "backgroundColor": '#3e5480',
          "borderColor": '#3e5480',
          "textColor": '#ffffff',
          "url": null,
          "voice": null,
          "video": null,
          "contents": []
        },
        {
          "id": 2279,
          "title": "دینی جلسه1 (درس1و2دهم)+تست 1تا28",
          "description": null,
          "long_description": null,
          "date": "2021-03-22",
          "resourceId": "2021-03-22",
          "start": "19:45:00",
          "end": "21:00:00",
          "reshte": "tajrobi",
          "major": {
            "id": 2,
            "name": "تجربی",
            "title": "تجربی"
          },
          "backgroundColor": '#3e5480',
          "borderColor": '#3e5480',
          "textColor": '#ffffff',
          "url": null,
          "voice": null,
          "video": null,
          "contents": []
        },
        {
          "id": 2460,
          "title": "مشاوره",
          "description": null,
          "long_description": null,
          "date": "2021-03-22",
          "resourceId": "2021-03-22",
          "start": "07:15:08",
          "end": "07:29:08",
          "reshte": "riazi",
          "major": {
            "id": 1,
            "name": "ریاضی",
            "title": "ریاضی"
          },
          "backgroundColor": '#3e5480',
          "borderColor": '#3e5480',
          "textColor": '#ffffff',
          "url": null,
          "voice": null,
          "video": null,
          "contents": [
            {
              "id": 26125,
              "redirect_url": null,
              "type": {
                "id": 1,
                "title": "moshavere_voice",
                "display_name": "ویس مشاوره"
              },
              "title": "روز اول",
              "url": {
                "web": "https://alaatv.com/c/26125",
                "api": "https://alaatv.com/api/v2/c/26125"
              },
              "file": {
                "video": null,
                "pamphlet": null,
                "voice": [
                  {
                    "link": "https://paid.alaatv.com/public/c/voice/Taftan1400_moshavere_roz1.mp3",
                    "ext": "mp3",
                    "size": null,
                    "caption": "صوت"
                  }
                ]
              }
            }
          ]
        }
      ]),
    }
  },
  methods: {
    loadPlans () {
      this.studyPlan.plans = this.planList
    }
  }
}
</script>

<style scoped>
.major-card .v-text-field.v-text-field--enclosed {
  padding-top: 12px !important;
  margin-right: 15px !important;
}

.study-plan.theme--light.v-card {
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
  margin-right: 0;
  padding: 0 5px 6px;
}

.study-plan .study-plan-card .study-plan-card-hours {
  display: inline-block;
  border-radius: 50%;
  background-color: #FFFFFF;
  padding: 2px 6px 0 6px;
}

.study-plan-card .theme--light.v-card > .v-card__text, .theme--light.v-card > .v-card__subtitle {
  color: rgba(0, 0, 0, 0.6);
  background-color: #e1f0ff;
}
</style>
<style>
.v-text-field fieldset, .v-text-field .v-input__control, .v-text-field .v-input__slot {
  border-radius: 10px !important;
}
</style>
