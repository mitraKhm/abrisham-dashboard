<template>
  <div>
    <v-card
      class="study-plan-card"
      elevation="0"
      height="740"
    >
      <v-card-title>جدول برنامه مطالعاتی راه ابریشم آلاء</v-card-title>
      <v-card elevation="0">
        <v-card-text>رشته:</v-card-text>
        <v-select
            items="نتبمنتدذ"
            solo
        ></v-select>
      </v-card>
      <v-expansion-panels>
        <v-expansion-panel
            v-for="(item,i) in 5"
            :key="i"
        >
          <v-expansion-panel-header>
            Item
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
</style>

