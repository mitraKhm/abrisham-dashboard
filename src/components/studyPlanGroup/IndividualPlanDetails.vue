<template>
  <div>
    <v-expansion-panels
        flat
        class="red"
        v-model="panel"
        multiple
    >
      <v-expansion-panel>
        <v-expansion-panel-header disable-icon-rotate>
          <template v-slot:actions>
            <v-icon color="transparent"   x-small>
              mdi-alert-circle
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="plan-details">
            <v-card elevation="0">
              <v-sheet
                  class="plan-sheet"
              >
                <v-row>
                  <v-col class="text-right plan-sheet-title-1">
                    از ساعت 13
                  </v-col>
                  <v-col class="plan-sheet-title-2">
                    شیمی
                  </v-col>
                  <v-col class="text-left plan-sheet-title-3">
                    تا ساعت 14:30
                  </v-col>
                </v-row>
              </v-sheet>
              <v-card
                  class="plan-sheet-details"
                  elevation="0"
              >
                <v-row>
                  <v-col class="text-right plan-sheet-details-title">
                    توضیحات
                  </v-col>
                  <v-col class="text-right plan-sheet-details-title">
                    فیلم ها
                  </v-col>
                  <v-col class="text-right plan-sheet-details-title">
                    تایتل صدا
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="text-right plan-sheet-details-info">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                    چاپگرها و متون بلکه روزنامه و مجله در
                  </v-col>
                  <v-col class="text-right plan-sheet-details-video">
                    <v-row>
                      <v-col>
                        <v-card
                            elevation="0"
                            class="plan-sheet-details-video-thumbnail"
                        />
                      </v-col>
                      <v-col>
                        فیلم جلسه 5 - حل تست فرسنگ ششم (قسمت فیلا...
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col class="text-right">
                    <v-card class="plan-sheet-details-voice" />
                  </v-col>
                </v-row>
              </v-card>
            </v-card>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script>
export default {
  props:{
    selectedPlan:{
      type:Object,
      default:() => {
        return {}
      }
    }
  },
  data(){
    return {
      panel: []
    }
  },
  watch:{
    selectedPlan:{
      handler(){
        this.panel = [0]
      }
    }
  },
  methods:{
    all() {
      this.panel = [0]
    },
    none() {
      this.panel = []
    }
  }
}
</script>
<style>
.individualPlanIcon{
  font-size: 25px;
}
.plan-details {
  padding: 0 24px 27px 24px;
  border-radius: 10px;
}

.theme--light.v-sheet .plan-sheet {
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  background-color: #eff3ff;
  color: #3e5480;
  border-color: #FFFFFF;
  padding-top: 7px;
  padding-bottom: 5px;
  border-radius: 10px;
}

.v-card > :last-child:not(.v-btn):not(.v-chip):not(.v-avatar) {
  border-radius: 10px;
}

.v-card > :first-child:not(.v-btn):not(.v-chip):not(.v-avatar), .v-card > .v-card__progress + :not(.v-btn):not(.v-chip):not(.v-avatar) {
  border-radius: 10px;
}

.plan-details .plan-sheet .plan-sheet-title-1 {
  padding-right: 60px;
}

.plan-details .plan-sheet .plan-sheet-title-3 {
  padding-left: 60px;
}

.plan-sheet-details {
  margin-top: 12px;
  margin-right: 10px;
}

.plan-sheet-details-title {
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #3e5480;
}

.plan-sheet-details-info {
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #3e5480;
  /*overflow-y: scroll;*/
}

.plan-sheet-details-video {
  border-radius: 10px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  background-color: #eff3ff;
}

.theme--light.v-card .plan-sheet-details-voice {
  border-radius: 40px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  height: 60px;
}

.theme--light.v-card .plan-sheet-details-video-thumbnail {
  border-radius: 5px;
  background-color: #ffceab;
  height: 42px;
  width: 72px;
  margin-top: 9px;
}

</style>
