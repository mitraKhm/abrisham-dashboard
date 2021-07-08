<template>
  <div>
    <v-card
      class="study-plan-card"
      elevation="0"
      height="740"
    >
      <v-card-title>جدول برنامه مطالعاتی راه ابریشم آلاء</v-card-title>
      <div class="major-card">
            <p class="major-card-text">رشته:</p>
            <v-select
                items="تجربی"
                solo
            ></v-select>

      </div>
      <v-expansion-panels
          v-for="(item,i) in 5"
          :key="i"
          class="study-plan-expansion"
      >
        <v-expansion-panel

        >
          <v-expansion-panel-header class="study-plan-expansion-header">
            <v-row>
              <v-col cols="4">
                روز اول
              </v-col>
              <v-col cols="4">
                شنبه
              </v-col>
              <v-col cols="4">
                12 تیر
              </v-col>
            </v-row>

          </v-expansion-panel-header>
          <v-expansion-panel-content>
          <v-card elevation="0">
            <v-sheet class="study-plan-sheet">فردا دیره، دیروز هم دیشب تموم شد، الان دقیقا لحظه ای هست که باید شروع کنی!</v-sheet>
          </v-card>
            <v-card></v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </div>
</template>

<script></script>

<style>
/*.study-plan-card {*/
/*  border-radius: 40px;*/
/*}*/

.v-text-field.v-text-field--enclosed {
  padding-top: 12px !important;
  margin-right: 15px !important;
}
.theme--light.v-card {
  background-color: #ffe2bc;
  color: #3e5480;
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
.v-text-field fieldset, .v-text-field .v-input__control, .v-text-field .v-input__slot {
  border-radius: 10px !important;
}
.theme--light.v-expansion-panels .v-expansion-panel {
  margin-top: 15px;
  border-radius: 20px;
}
 .v-expansion-panels {
   border-radius: 20px !important;
 }
 /*.study-plan-sheet{*/
 /*  background-color: #eff3ff;*/
 /*}*/
.theme--light.v-sheet .study-plan-sheet{
  font-size: 14px;
  font-weight: normal;
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
}
.major-card{
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  position: relative;
  margin-top: -57px;
}
.v-card__subtitle, .v-card__text, .v-card__title .major-card{
  /*padding-left: 92px;*/
}
.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile) > .v-expansion-panel--active {
  border-radius: 20px !important;
}
.major-card .v-input  {
  max-width: 12%;
}
.study-plan-expansion {
  padding: 0 60px 0 60px !important;
}
.major-card-text{
  margin-right: 60px;
}
.study-plan-expansion-header{
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #3e5480;
}
</style>

