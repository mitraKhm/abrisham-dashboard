<template>
  <div class="about">
    <chip-group v-model="chipData" :chipTitle="chipTitle"></chip-group>
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
      chipData:[
        {
          title:'تجربی',
          id:1,
          selected:false,
          color:'#ffffff',
        },
        {
          title:'ریاضی',
          id:2,
          selected:true,
          color:'blue',
        }
      ],
      chipTitle :'رشته:'

    }
  }
}
</script>