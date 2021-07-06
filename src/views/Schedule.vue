<template>
  <div class="about">
    <chip-group v-model="chipData"></chip-group>
   <video-box></video-box>
  </div>
</template>
<script>
import chipGroup from "../components/chipGroup";
import videoBox from "../components/videoBox";
export default {
  name:'schedule',
  components:{
    chipGroup,
    videoBox
  },
  data(){
    return {
      chipData:[],


    }
  }
}
</script>