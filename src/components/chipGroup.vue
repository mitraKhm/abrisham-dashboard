<template>
  <div />
</template>

<script>
export default {
  name: "ChipGroup",
  props: {
    value: {
      type: Array,
      default: () => {
        return [
          {
            title: 'تجربی',
            id: 1,
            selected: false,
            color: '#ffffff',
          },
          {
            title: 'ریاضی',
            id: 2,
            selected: true,
            color: 'blue',
          }
        ]
      },
    },
    chipTitle: {
      type: String,
      default: 'رشته'
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
        console.log('run')
      },
      immediate: true
    },
    chipData:{
      handler(){

      }
    }
  }
}
</script>

<style scoped>

</style>