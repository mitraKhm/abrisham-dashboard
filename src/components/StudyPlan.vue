<template>
  <div>
    <v-expansion-panel>
      <v-expansion-panel-header class="study-plan-expansion-header">
        <v-row>
          <v-col cols="4">
            روز اول
          </v-col>
          <v-col cols="4">
            یکشنبه
            <!--                {{ item.convertDate.dayOfWeek }}-->
          </v-col>
          <v-col cols="4">
            28 تیر
            <!--                {{ item.convertDate.dateOfMonth }}-->
          </v-col>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-card class="study-plan-boxes" elevation="0" height="69">
          <v-expansion-panel-content>
            <v-progress-linear
              indeterminate
              background-color="blue lighten-4"
              color="blue accent-2"
              :active="loading"
            ></v-progress-linear>
            <v-sheet class="study-plan-sheet">فردا دیره، دیروز هم دیشب تموم شد، الان دقیقا لحظه ای هست که باید شروع
کنی!
            </v-sheet>
            <v-card class="study-plan-card" elevation="0" height="118">
              <v-card-text>
                <v-row>
                  <v-col cols="4">
                    <div class="study-plan-card-hours">
                      12
                    </div>
                  </v-col>
                  <v-col cols="4">
                    <div class="study-plan-card-hours">
                      13
                    </div>
                  </v-col>
                  <v-col cols="4">
                    <div class="study-plan-card-hours">
                      14
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card class="study-plan-boxes" elevation="0" height="69">
                <v-row>
                  <!--                        <v-col-->
                  <!--                            v-for="(lesson, i) in studyPlans.list.plans.list"-->
                  <!--                            :key="i"-->
                  <!--                        >-->
                  <!--                          <v-btn>{{ lesson.title }}</v-btn>-->
                  <!--                        </v-col>-->
                </v-row>
              </v-card>
            </v-card>
          </v-expansion-panel-content>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
import {StudyPlan} from '@/Models/StudyPlan.js'

export default {
  props: {
    studyPlan: {
      type: StudyPlan,
      // StudyPlan,
      // default: new StudyPlan()
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

        // return{
        //   baseRoute:null,
        //   crud: {
        //     headers: null
        //   },
        //   list:[
        //     {
        //       apiResource:null,
        //       body:null,
        //       crud: {
        //         headers: null
        //       },
        //       date:"2021-03-23",
        //       editMode:false,
        //       id:"2021-03-23",
        //       loading:false,
        //       plans: {
        //         baseRoute:null,
        //         crud: {
        //           headers: null
        //         },
        //         list:[
        //           {
        //             apiResource: null,
        //             backgroundColor: "#ffe79e",
        //             borderColor: "#707070",
        //             date: "2021-03-23",
        //             description: null,
        //             editMode: false,
        //             end: "08:45:00",
        //             id: 2104,
        //             loading: false,
        //             long_description: null,
        //             major: {
        //               actionUrl: null,
        //               apiResource: null
        //             },
        //             major_id: 1,
        //             start: "07:30:00",
        //             textColor: "#333333",
        //             title: "شیمی دهم جلسه1",
        //             warn: {
        //               keys: null,
        //               mode: false
        //             }
        //           },
        //           {
        //             apiResource: null,
        //             backgroundColor: "#ffe79e",
        //             borderColor: "#707070",
        //             contents: Object,
        //             crud: Object,
        //             date: "2021-03-23",
        //             description: null,
        //             editMode: false,
        //             end: "08:45:00",
        //             id: 2104,
        //             loading: false,
        //             long_description: null,
        //             major: {
        //               actionUrl: null,
        //               apiResource: null
        //             },
        //             major_id: 1,
        //             start: "07:30:00",
        //             textColor: "#333333",
        //             title: "شیمی دهم جلسه1",
        //             warn: {
        //               keys: null,
        //               mode: false
        //             }
        //           },
        //           {
        //             apiResource: null,
        //             backgroundColor: "#ffe79e",
        //             borderColor: "#707070",
        //             contents: Object,
        //             crud: Object,
        //             date: "2021-03-23",
        //             description: null,
        //             editMode: false,
        //             end: "08:45:00",
        //             id: 2104,
        //             loading: false,
        //             long_description: null,
        //             major: {
        //               actionUrl: null,
        //               apiResource: null
        //             },
        //             major_id: 1,
        //             start: "07:30:00",
        //             textColor: "#333333",
        //             title: "شیمی دهم جلسه1",
        //             warn: {
        //               keys: null,
        //               mode: false
        //             }
        //           },
        //           {
        //             apiResource: null,
        //             backgroundColor: "#ffe79e",
        //             borderColor: "#707070",
        //             contents: Object,
        //             crud: Object,
        //             date: "2021-03-23",
        //             description: null,
        //             editMode: false,
        //             end: "08:45:00",
        //             id: 2104,
        //             loading: false,
        //             long_description: null,
        //             major: {
        //               actionUrl: null,
        //               apiResource: null
        //             },
        //             major_id: 1,
        //             start: "07:30:00",
        //             textColor: "#333333",
        //             title: "شیمی دهم جلسه1",
        //             warn: {
        //               keys: null,
        //               mode: false
        //             }
        //           },
        //           {
        //             apiResource: null,
        //             backgroundColor: "#ffe79e",
        //             borderColor: "#707070",
        //             contents: Object,
        //             crud: Object,
        //             date: "2021-03-23",
        //             description: null,
        //             editMode: false,
        //             end: "08:45:00",
        //             id: 2104,
        //             loading: false,
        //             long_description: null,
        //             major: {
        //               actionUrl: null,
        //               apiResource: null
        //             },
        //             major_id: 1,
        //             start: "07:30:00",
        //             textColor: "#333333",
        //             title: "شیمی دهم جلسه1",
        //             warn: {
        //               keys: null,
        //               mode: false
        //             }
        //           }
        //         ],
        //         loading:false,
        //         paginate:undefined
        //       },
        //       studyPlan_id:145,
        //       title:null,
        //       warn: {
        //         keys:null,
        //         mode:false
        //       }
        //     },
        //     {
        //       apiResource:null,
        //       body:null,
        //       crud: {
        //         headers: null
        //       },
        //       date:"2021-03-23",
        //       editMode:false,
        //       id:"2021-03-23",
        //       loading:false,
        //       plans: {
        //         baseRoute:null,
        //         crud: {
        //           headers: null
        //         },
        //         list:[
        //           {
        //             apiResource: null,
        //             backgroundColor: "#ffe79e",
        //             borderColor: "#707070",
        //             contents: Object,
        //             crud: Object,
        //             date: "2021-03-23",
        //             description: null,
        //             editMode: false,
        //             end: "08:45:00",
        //             id: 2104,
        //             loading: false,
        //             long_description: null,
        //             major: {
        //               actionUrl: null,
        //               apiResource: null
        //             },
        //             major_id: 1,
        //             start: "07:30:00",
        //             textColor: "#333333",
        //             title: "شیمی دهم جلسه1",
        //             warn: {
        //               keys: null,
        //               mode: false
        //             }
        //           },
        //           {
        //             apiResource: null,
        //             backgroundColor: "#ffe79e",
        //             borderColor: "#707070",
        //             contents: Object,
        //             crud: Object,
        //             date: "2021-03-23",
        //             description: null,
        //             editMode: false,
        //             end: "08:45:00",
        //             id: 2104,
        //             loading: false,
        //             long_description: null,
        //             major: {
        //               actionUrl: null,
        //               apiResource: null
        //             },
        //             major_id: 1,
        //             start: "07:30:00",
        //             textColor: "#333333",
        //             title: "شیمی دهم جلسه1",
        //             warn: {
        //               keys: null,
        //               mode: false
        //             }
        //           },
        //           {
        //             apiResource: null,
        //             backgroundColor: "#ffe79e",
        //             borderColor: "#707070",
        //             contents: Object,
        //             crud: Object,
        //             date: "2021-03-23",
        //             description: null,
        //             editMode: false,
        //             end: "08:45:00",
        //             id: 2104,
        //             loading: false,
        //             long_description: null,
        //             major: {
        //               actionUrl: null,
        //               apiResource: null
        //             },
        //             major_id: 1,
        //             start: "07:30:00",
        //             textColor: "#333333",
        //             title: "شیمی دهم جلسه1",
        //             warn: {
        //               keys: null,
        //               mode: false
        //             }
        //           },
        //           {
        //             apiResource: null,
        //             backgroundColor: "#ffe79e",
        //             borderColor: "#707070",
        //             contents: Object,
        //             crud: Object,
        //             date: "2021-03-23",
        //             description: null,
        //             editMode: false,
        //             end: "08:45:00",
        //             id: 2104,
        //             loading: false,
        //             long_description: null,
        //             major: {
        //               actionUrl: null,
        //               apiResource: null
        //             },
        //             major_id: 1,
        //             start: "07:30:00",
        //             textColor: "#333333",
        //             title: "شیمی دهم جلسه1",
        //             warn: {
        //               keys: null,
        //               mode: false
        //             }
        //           },
        //           {
        //             apiResource: null,
        //             backgroundColor: "#ffe79e",
        //             borderColor: "#707070",
        //             contents: Object,
        //             crud: Object,
        //             date: "2021-03-23",
        //             description: null,
        //             editMode: false,
        //             end: "08:45:00",
        //             id: 2104,
        //             loading: false,
        //             long_description: null,
        //             major: {
        //               actionUrl: null,
        //               apiResource: null
        //             },
        //             major_id: 1,
        //             start: "07:30:00",
        //             textColor: "#333333",
        //             title: "شیمی دهم جلسه1",
        //             warn: {
        //               keys: null,
        //               mode: false
        //             }
        //           }
        //         ],
        //         loading:false,
        //         paginate:undefined
        //       },
        //       studyPlan_id:145,
        //       title:null,
        //       warn: {
        //         keys:null,
        //         mode:false
        //       }
        //     },
        //     {
        //       apiResource:null,
        //       body:null,
        //       crud: {
        //         headers: null
        //       },
        //       date:"2021-03-23",
        //       editMode:false,
        //       id:"2021-03-23",
        //       loading:false,
        //       plans: {
        //         baseRoute:null,
        //         crud: {
        //           headers: null
        //         },
        //         list:[
        //           {
        //             apiResource: null,
        //             backgroundColor: "#ffe79e",
        //             borderColor: "#707070",
        //             contents: Object,
        //             crud: Object,
        //             date: "2021-03-23",
        //             description: null,
        //             editMode: false,
        //             end: "08:45:00",
        //             id: 2104,
        //             loading: false,
        //             long_description: null,
        //             major: {
        //               actionUrl: null,
        //               apiResource: null
        //             },
        //             major_id: 1,
        //             start: "07:30:00",
        //             textColor: "#333333",
        //             title: "شیمی دهم جلسه1",
        //             warn: {
        //               keys: null,
        //               mode: false
        //             }
        //           },
        //           {
        //             apiResource: null,
        //             backgroundColor: "#ffe79e",
        //             borderColor: "#707070",
        //             contents: Object,
        //             crud: Object,
        //             date: "2021-03-23",
        //             description: null,
        //             editMode: false,
        //             end: "08:45:00",
        //             id: 2104,
        //             loading: false,
        //             long_description: null,
        //             major: {
        //               actionUrl: null,
        //               apiResource: null
        //             },
        //             major_id: 1,
        //             start: "07:30:00",
        //             textColor: "#333333",
        //             title: "شیمی دهم جلسه1",
        //             warn: {
        //               keys: null,
        //               mode: false
        //             }
        //           },
        //           {
        //             apiResource: null,
        //             backgroundColor: "#ffe79e",
        //             borderColor: "#707070",
        //             contents: Object,
        //             crud: Object,
        //             date: "2021-03-23",
        //             description: null,
        //             editMode: false,
        //             end: "08:45:00",
        //             id: 2104,
        //             loading: false,
        //             long_description: null,
        //             major: {
        //               actionUrl: null,
        //               apiResource: null
        //             },
        //             major_id: 1,
        //             start: "07:30:00",
        //             textColor: "#333333",
        //             title: "شیمی دهم جلسه1",
        //             warn: {
        //               keys: null,
        //               mode: false
        //             }
        //           },
        //           {
        //             apiResource: null,
        //             backgroundColor: "#ffe79e",
        //             borderColor: "#707070",
        //             contents: Object,
        //             crud: Object,
        //             date: "2021-03-23",
        //             description: null,
        //             editMode: false,
        //             end: "08:45:00",
        //             id: 2104,
        //             loading: false,
        //             long_description: null,
        //             major: {
        //               actionUrl: null,
        //               apiResource: null
        //             },
        //             major_id: 1,
        //             start: "07:30:00",
        //             textColor: "#333333",
        //             title: "شیمی دهم جلسه1",
        //             warn: {
        //               keys: null,
        //               mode: false
        //             }
        //           },
        //           {
        //             apiResource: null,
        //             backgroundColor: "#ffe79e",
        //             borderColor: "#707070",
        //             contents: Object,
        //             crud: Object,
        //             date: "2021-03-23",
        //             description: null,
        //             editMode: false,
        //             end: "08:45:00",
        //             id: 2104,
        //             loading: false,
        //             long_description: null,
        //             major: {
        //               actionUrl: null,
        //               apiResource: null
        //             },
        //             major_id: 1,
        //             start: "07:30:00",
        //             textColor: "#333333",
        //             title: "شیمی دهم جلسه1",
        //             warn: {
        //               keys: null,
        //               mode: false
        //             }
        //           }
        //         ],
        //         loading:false,
        //         paginate:undefined
        //       },
        //       studyPlan_id:145,
        //       title:null,
        //       warn: {
        //         keys:null,
        //         mode:false
        //       }
        //     },
        //     {
        //       apiResource:null,
        //       body:null,
        //       crud: {
        //         headers: null
        //       },
        //       date:"2021-03-23",
        //       editMode:false,
        //       id:"2021-03-23",
        //       loading:false,
        //       plans: {
        //         baseRoute:null,
        //         crud: {
        //           headers: null
        //         },
        //         list:[
        //           {
        //             apiResource: null,
        //             backgroundColor: "#ffe79e",
        //             borderColor: "#707070",
        //             contents: Object,
        //             crud: Object,
        //             date: "2021-03-23",
        //             description: null,
        //             editMode: false,
        //             end: "08:45:00",
        //             id: 2104,
        //             loading: false,
        //             long_description: null,
        //             major: {
        //               actionUrl: null,
        //               apiResource: null
        //             },
        //             major_id: 1,
        //             start: "07:30:00",
        //             textColor: "#333333",
        //             title: "شیمی دهم جلسه1",
        //             warn: {
        //               keys: null,
        //               mode: false
        //             }
        //           },
        //           {
        //             apiResource: null,
        //             backgroundColor: "#ffe79e",
        //             borderColor: "#707070",
        //             contents: Object,
        //             crud: Object,
        //             date: "2021-03-23",
        //             description: null,
        //             editMode: false,
        //             end: "08:45:00",
        //             id: 2104,
        //             loading: false,
        //             long_description: null,
        //             major: {
        //               actionUrl: null,
        //               apiResource: null
        //             },
        //             major_id: 1,
        //             start: "07:30:00",
        //             textColor: "#333333",
        //             title: "شیمی دهم جلسه1",
        //             warn: {
        //               keys: null,
        //               mode: false
        //             }
        //           },
        //           {
        //             apiResource: null,
        //             backgroundColor: "#ffe79e",
        //             borderColor: "#707070",
        //             contents: Object,
        //             crud: Object,
        //             date: "2021-03-23",
        //             description: null,
        //             editMode: false,
        //             end: "08:45:00",
        //             id: 2104,
        //             loading: false,
        //             long_description: null,
        //             major: {
        //               actionUrl: null,
        //               apiResource: null
        //             },
        //             major_id: 1,
        //             start: "07:30:00",
        //             textColor: "#333333",
        //             title: "شیمی دهم جلسه1",
        //             warn: {
        //               keys: null,
        //               mode: false
        //             }
        //           },
        //           {
        //             apiResource: null,
        //             backgroundColor: "#ffe79e",
        //             borderColor: "#707070",
        //             contents: Object,
        //             crud: Object,
        //             date: "2021-03-23",
        //             description: null,
        //             editMode: false,
        //             end: "08:45:00",
        //             id: 2104,
        //             loading: false,
        //             long_description: null,
        //             major: {
        //               actionUrl: null,
        //               apiResource: null
        //             },
        //             major_id: 1,
        //             start: "07:30:00",
        //             textColor: "#333333",
        //             title: "شیمی دهم جلسه1",
        //             warn: {
        //               keys: null,
        //               mode: false
        //             }
        //           },
        //           {
        //             apiResource: null,
        //             backgroundColor: "#ffe79e",
        //             borderColor: "#707070",
        //             contents: Object,
        //             crud: Object,
        //             date: "2021-03-23",
        //             description: null,
        //             editMode: false,
        //             end: "08:45:00",
        //             id: 2104,
        //             loading: false,
        //             long_description: null,
        //             major: {
        //               actionUrl: null,
        //               apiResource: null
        //             },
        //             major_id: 1,
        //             start: "07:30:00",
        //             textColor: "#333333",
        //             title: "شیمی دهم جلسه1",
        //             warn: {
        //               keys: null,
        //               mode: false
        //             }
        //           }
        //         ],
        //         loading:false,
        //         paginate:undefined
        //       },
        //       studyPlan_id:145,
        //       title:null,
        //       warn: {
        //         keys:null,
        //         mode:false
        //       }
        //     },
        //     {
        //       apiResource:null,
        //       body:null,
        //       crud: {
        //         headers: null
        //       },
        //       date:"2021-03-23",
        //       editMode:false,
        //       id:"2021-03-23",
        //       loading:false,
        //       plans: {
        //         baseRoute:null,
        //         crud: {
        //           headers: null
        //         },
        //         list:[
        //           {
        //             apiResource: null,
        //             backgroundColor: "#ffe79e",
        //             borderColor: "#707070",
        //             contents: Object,
        //             crud: Object,
        //             date: "2021-03-23",
        //             description: null,
        //             editMode: false,
        //             end: "08:45:00",
        //             id: 2104,
        //             loading: false,
        //             long_description: null,
        //             major: {
        //               actionUrl: null,
        //               apiResource: null
        //             },
        //             major_id: 1,
        //             start: "07:30:00",
        //             textColor: "#333333",
        //             title: "شیمی دهم جلسه1",
        //             warn: {
        //               keys: null,
        //               mode: false
        //             }
        //           },
        //           {
        //             apiResource: null,
        //             backgroundColor: "#ffe79e",
        //             borderColor: "#707070",
        //             contents: Object,
        //             crud: Object,
        //             date: "2021-03-23",
        //             description: null,
        //             editMode: false,
        //             end: "08:45:00",
        //             id: 2104,
        //             loading: false,
        //             long_description: null,
        //             major: {
        //               actionUrl: null,
        //               apiResource: null
        //             },
        //             major_id: 1,
        //             start: "07:30:00",
        //             textColor: "#333333",
        //             title: "شیمی دهم جلسه1",
        //             warn: {
        //               keys: null,
        //               mode: false
        //             }
        //           },
        //           {
        //             apiResource: null,
        //             backgroundColor: "#ffe79e",
        //             borderColor: "#707070",
        //             contents: Object,
        //             crud: Object,
        //             date: "2021-03-23",
        //             description: null,
        //             editMode: false,
        //             end: "08:45:00",
        //             id: 2104,
        //             loading: false,
        //             long_description: null,
        //             major: {
        //               actionUrl: null,
        //               apiResource: null
        //             },
        //             major_id: 1,
        //             start: "07:30:00",
        //             textColor: "#333333",
        //             title: "شیمی دهم جلسه1",
        //             warn: {
        //               keys: null,
        //               mode: false
        //             }
        //           },
        //           {
        //             apiResource: null,
        //             backgroundColor: "#ffe79e",
        //             borderColor: "#707070",
        //             contents: Object,
        //             crud: Object,
        //             date: "2021-03-23",
        //             description: null,
        //             editMode: false,
        //             end: "08:45:00",
        //             id: 2104,
        //             loading: false,
        //             long_description: null,
        //             major: {
        //               actionUrl: null,
        //               apiResource: null
        //             },
        //             major_id: 1,
        //             start: "07:30:00",
        //             textColor: "#333333",
        //             title: "شیمی دهم جلسه1",
        //             warn: {
        //               keys: null,
        //               mode: false
        //             }
        //           },
        //           {
        //             apiResource: null,
        //             backgroundColor: "#ffe79e",
        //             borderColor: "#707070",
        //             contents: Object,
        //             crud: Object,
        //             date: "2021-03-23",
        //             description: null,
        //             editMode: false,
        //             end: "08:45:00",
        //             id: 2104,
        //             loading: false,
        //             long_description: null,
        //             major: {
        //               actionUrl: null,
        //               apiResource: null
        //             },
        //             major_id: 1,
        //             start: "07:30:00",
        //             textColor: "#333333",
        //             title: "شیمی دهم جلسه1",
        //             warn: {
        //               keys: null,
        //               mode: false
        //             }
        //           }
        //         ],
        //         loading:false,
        //         paginate:undefined
        //       },
        //       studyPlan_id:145,
        //       title:null,
        //       warn: {
        //         keys:null,
        //         mode:false
        //       }
        //     }
        //   ],
        //   loading:false,
        //   paginate:undefined
        //
        // }
      }
    },
    status: {
      type: Boolean,
      default: false
    },
  },
  created() {

    console.log(this.studyPlans)
    console.log(this.studyPlans.list[0].plans.list[0])
  },
  data() {
    return {
      majorLoading: this.studyPlans.loading,
      // loading : this.studyPlans.list[0].plans.list[0].loading
      loading: this.studyPlans.loading
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
