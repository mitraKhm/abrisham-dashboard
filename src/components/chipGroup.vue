<template>
  <div class="d-flex list-box align-center">
    <v-chip
      v-if="chipTitle"
      class="list-section "
      text-color="#3e5480"
    >
      {{ chipTitle }}
    </v-chip>
    <v-chip-group>
      <v-chip
        v-for="(i , index) in chipData"
        :key="index"
        :color="i.selected ? i.color: 'transparent'"
        class="chip-box"
        :text-color="i.selected ? 'white': '#9fa5c0'"
        @click="changeSelectedChip(index)"
      >
        {{ i.title }}
      </v-chip>
    </v-chip-group>
  </div>
</template>
<script>
export default {
  name: 'ChipGroup',
  props: {
    value: {
      type: Array,
      default: () => {
        return [
          {
            title: 'تجربی',
            id: 1,
            selected: false,
            color: '#ff8f00',
          },
          {
            title: 'ریاضی',
            id: 2,
            selected: false,
            color: '#fe665a',
          },
        ]
      },
    },
    chipTitle: {
      type: String,
      default:''
    }

  },
  data() {
    return {
      chipData: [],
    }
  },
  watch: {
   value: {
      handler() {
       this.chipData=this.value
      },
      immediate: true
    },
    chipData:{
      handler(){
        this.value=this.chipData
      }
    }
  },
  methods:{
    changeSelectedChip(selected){
      this.chipData.map(i => {
        i.selected = false
      })
      this.chipData[selected].selected = true;
    }
  }
}
</script>

<style scoped>

.list-box{
  align-0: center;
}
.list-section{
  font-size: 16px;
  font-weight: bold;
  color: #3e5480
}
.chip-box{
  font-size: 16px;
  font-weight: 500;
  height: 42px;
  border-radius: 25px;
  line-height: 2.13;
  padding: 8px 20px 9px;
}
</style>