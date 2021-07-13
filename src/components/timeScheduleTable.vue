<template>
  <div>
    <div class="timeTable">
      <div class="timeTable-header">
        <div
          v-if="canShowTimeTableHeader(startTime)"
          class="timeTableHeader"
          :style="{ flex: ('0 0 ' + customizedHeaderWidth() + 'px') }"
        />
        <div
          v-for="i in timeArray"
          :key="i"
          class="timeTableHeader"
          :style="{ flex: ('0 0 ' + headerWidth + 'px') }"
        >
          <v-row>
            <v-col>
              <div class="timeTableHeaderNumber">
                {{ i }}
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
      <div
        v-if="!loading"
        class="timeTable-body"
      >
        <div
          v-for="p in plansOfSelectedMajor"
          :key="p.id"
          class="plan"
          :style="{
            right: calcPosition(p.start, p.end).right,
            width: calcPosition(p.start, p.end).width,
            backgroundColor: p.backgroundColor,
            // borderColor: p.borderColor,
            color: p.textColor
          }"
          @click="showPlanDetails(p.id)"
        >
          {{ p.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Major from '@/Models/Major';
import {PlanList} from '@/Models/Plan';

export default {
    name: 'TimeScheduleTable',
    props: {
        headerWidth: {
            default: 200,
          type: Number
        },
        startTime: {
            default: '00:00:00',
          type: String
        },
        endTime: {
            default: '24:00:00',
          type: String
        },
        plans: {
          type: PlanList,
          default: new PlanList(),
        },
      loading: {
        default: () => {
          return false
        },
        type: Boolean
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
    data() {
        return {
            timeArray: []
        }
    },
    computed: {
        plansOfSelectedMajor() {
            return this.plans.list.filter(item => parseInt(item.major.id) === parseInt(this.selectedMajor.id))
        }
    },
    created() {
      console.log('plans  ',this.plans)
        const totalTime = this.clockToSeconds(this.endTime).hour - this.calcStartDay(this.clockToSeconds(this.startTime))

        for (var i = 0; i < totalTime + 1; i++) {
            this.timeArray.push(this.calcStartDay(this.clockToSeconds(this.startTime)) + i)
        }
    },
    methods: {
        showPlanDetails() {
          console.log(this.plans)
        },
        timeToPixel(time) {
            return (this.headerWidth * time) / 3600
        },
        canShowTimeTableHeader(time) {
            return (this.clockToSeconds(time).minutes !== 0 || this.clockToSeconds(time).seconds !== 0)
        },
        customizedHeaderWidth() {
            if (this.clockToSeconds(this.startTime).minutes !== 0 || this.clockToSeconds(this.startTime).seconds !== 0) {
                return (
                    this.calcStartDay(this.clockToSeconds(this.startTime)) * 3600 -
                    this.clockToSeconds(this.startTime).totalSeconds
                ) * this.headerWidth / 3600
            } else {
                return this.headerWidth
            }
        },
        clockToSeconds(time) {
            const [hh = '0', mm = '0', ss = '0'] = (time || '0:0:0').split(':');
            const hour = parseInt(hh, 10) || 0;
            const minute = parseInt(mm, 10) || 0;
            const second = parseInt(ss, 10) || 0;
            return {
                totalSeconds: (hour * 3600) + (minute * 60) + (second),
                minutes: minute,
                hour: hour,
                seconds: second
            }
        },
        calcStartDay(startDaySeconds) {
            if (startDaySeconds.minutes === 0 && startDaySeconds.seconds === 0) {
                return startDaySeconds.hour
            } else {
                return startDaySeconds.hour + 1
            }
        },
        calcPosition(start, end) {
            const startSeconds = this.clockToSeconds(start).totalSeconds
            const endSeconds = this.clockToSeconds(end).totalSeconds
            const right = ((startSeconds - this.clockToSeconds(this.startTime).totalSeconds) * (this.headerWidth / 3600)).toString() + 'px'
            const width = ((endSeconds - startSeconds) * (this.headerWidth) / 3600).toString() + 'px'

            return {right: right, width: width}
        }
    }
}
</script>

<style scoped>
.plans {
    background: white;
}

.plan {
    position: absolute;
    border: 1px solid;
    cursor: pointer;
    border-radius: 10px;
    top: 50%;
    text-align: center;
}

.timeTable {
    position: relative;
    overflow-x: scroll;
    background-color: white;
    border-radius: 30px;
}

.timeTable-header,
.timeTable-body {
    display: flex;
}

.timeTableHeader {
    padding: 5px 0;
    text-align: center;
    line-height: 48px;
    background-color: rgba(225, 240, 255, 1);
}

.timeTableHeaderNumber {
    position: relative;
    background-color: white;
    width: 40px;
    height: 40px;
    right: 38px;
    border-radius: 50%;
    font-size: 1rem;
}

.timeTable-body {
    background: white;
    height: 70px;
}

@media only screen and (max-width: 767px) {
    .timeTable {
        border-radius: 0;
    }
}
</style>
<!--<style scoped>-->
<!--.major-card .v-text-field.v-text-field&#45;&#45;enclosed {-->
<!--  padding-top: 12px !important;-->
<!--  margin-right: 15px !important;-->
<!--}-->

<!--.theme&#45;&#45;light.v-card {-->
<!--  background-color: #ffe2bc;-->
<!--  color: #3e5480;-->
<!--  padding-bottom: 51px;-->
<!--}-->

<!--.v-sheet.v-card {-->
<!--  border-radius: 40px;-->
<!--}-->

<!--.v-card__title {-->
<!--  font-size: 20px;-->
<!--  font-weight: 500;-->
<!--  font-stretch: normal;-->
<!--  font-style: normal;-->
<!--  line-height: normal;-->
<!--  letter-spacing: normal;-->
<!--  text-align: center;-->
<!--  justify-content: center;-->
<!--  padding-top: 40px;-->
<!--}-->

<!--.theme&#45;&#45;light.v-expansion-panels .v-expansion-panel {-->
<!--  margin-top: 15px;-->
<!--  border-radius: 20px;-->
<!--}-->

<!--.v-expansion-panels {-->
<!--  border-radius: 20px !important;-->
<!--}-->

<!--.theme&#45;&#45;light.v-sheet .study-plan-sheet {-->
<!--  font-size: 14px;-->
<!--  font-weight: normal;-->
<!--  font-stretch: normal;-->
<!--  font-style: normal;-->
<!--  line-height: normal;-->
<!--  letter-spacing: normal;-->
<!--  text-align: center;-->
<!--  background-color: #feedbb;-->
<!--  color: #3e5480;-->
<!--  border-color: #FFFFFF;-->
<!--  padding-top: 7px;-->
<!--  padding-bottom: 5px;-->
<!--  border-radius: 10px;-->
<!--}-->

<!--.study-plan .major-card {-->
<!--  display: flex;-->
<!--  flex-direction: row;-->
<!--  text-align: center;-->
<!--  align-items: center;-->
<!--  position: relative;-->
<!--  margin-top: -57px;-->
<!--}-->

<!--.v-expansion-panels:not(.v-expansion-panels&#45;&#45;accordion):not(.v-expansion-panels&#45;&#45;tile) > .v-expansion-panel&#45;&#45;active {-->
<!--  border-radius: 20px !important;-->
<!--}-->

<!--.study-plan .major-card .v-input {-->
<!--  max-width: 12%;-->
<!--}-->

<!--.study-plan .study-plan-expansion {-->
<!--  padding: 0 60px 0 60px !important;-->
<!--}-->

<!--.study-plan .major-card .major-card-text {-->
<!--  margin-right: 60px;-->
<!--}-->

<!--.study-plan .study-plan-expansion-header {-->
<!--  font-size: 18px;-->
<!--  font-weight: normal;-->
<!--  font-stretch: normal;-->
<!--  font-style: normal;-->
<!--  line-height: normal;-->
<!--  letter-spacing: normal;-->
<!--  text-align: right;-->
<!--  color: #3e5480;-->
<!--}-->

<!--.study-plan .study-plan-expansion .study-plan-expansion-header .v-card__subtitle, .v-card__text {-->
<!--  font-size: 0.875rem;-->
<!--  font-weight: 400;-->
<!--  line-height: 1.375rem;-->
<!--  letter-spacing: 0.0071428571em;-->
<!--  margin-right: 38px;-->
<!--}-->

<!--.v-expansion-panels:not(.v-expansion-panels&#45;&#45;accordion):not(.v-expansion-panels&#45;&#45;tile) > .v-expansion-panel&#45;&#45;active {-->
<!--  box-shadow: 0 3px 10px 0 rgb(0 0 0 / 10%);-->
<!--}-->

<!--.theme&#45;&#45;light.v-card .study-plan-card {-->
<!--  background-color: #e1f0ff;-->
<!--  color: #3e5480;-->
<!--  margin-top: 10px;-->
<!--}-->

<!--.v-sheet.v-card .study-plan-card {-->
<!--  border-radius: 10px;-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  align-items: center;-->
<!--  justify-content: center;-->
<!--  padding-top: 44px;-->
<!--}-->

<!--.theme&#45;&#45;light.v-card .study-plan-boxes {-->
<!--  background-color: #ffffff;-->
<!--  color: #3e5480;-->
<!--  margin-bottom: 1px;-->
<!--}-->

<!--.v-sheet.v-card .study-plan-boxes {-->
<!--  border-radius: 0 0 10px 10px;-->
<!--  width: 99.6%;-->
<!--  padding-top: 20px;-->
<!--}-->

<!--.v-card__subtitle, .v-card__text, .v-card__title .study-plan-card {-->
<!--  padding: 11px;-->
<!--}-->

<!--.study-plan .study-plan-card .study-plan-card-hours {-->
<!--  display: inline-block;-->
<!--  border-radius: 50%;-->
<!--  background-color: #FFFFFF;-->
<!--  padding: 2px 6px 0 6px;-->
<!--}-->


<!--</style>-->
<!--<style>-->
<!--.v-text-field fieldset, .v-text-field .v-input__control, .v-text-field .v-input__slot {-->
<!--  border-radius: 10px !important;-->
<!--}-->
<!--</style>-->

