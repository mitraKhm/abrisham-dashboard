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
            items="تجربی"
            solo
            flat
        ></v-select>
        <!--        append-icon="chevron-down"-->
      </div>
      <v-row>
      <v-expansion-panels
          v-for="(item, index) in 5"
          :key="index"
          flat
          class="study-plan-expansion"
      >

          <v-col>
        <study-plan />
          </v-col>
      </v-expansion-panels>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import StudyPlan from "../components/StudyPlan";
export default {
  components: {StudyPlan}
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
