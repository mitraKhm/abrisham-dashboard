<template>
  <div class="content-list-box">
    <slot name="header">
      <div class="slot-header-box">
        <v-chip
          text-color="#3e5480"
          depressed
          color="transparent"
          class="slot-header-box-movie"
        >
          فیلم های 14 تیر 1400
        </v-chip>
        <v-chip
          text-color="#9fa5c0"
          depressed
          color="transparent"
          class="slot-header-box-days"
        >
          رفتن به روزهای دیگر
        </v-chip>
      </div>
    </slot>
    <slot name="filter" />
    <div class="content-list-items-box">
      <div class="content-box">
        <content-list-item
          v-for="(i , index) in filteredList"
          :key="index"
          :length="filteredList.length"
          :content="i"
          :type="type"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ContentListItem from '../components/ContentListItem'
import {Content, ContentList} from '../Models/Content';
export default {
  name: 'ContentList',
  components : {
    ContentListItem
  },
  props:{
    contents:{
      type:Content,
      default :() => {
        return new ContentList();
      }
    },
    type:{
      type:String,
      default:''
    }
  },
  data(){
    return {
      items: ['تست1', 'تست2', 'تست3', 'تست4'],
      listLength:8,

      dataType:''
    }
  },
 computed :{
    filteredList () {
    return  this.contents.list.filter(item => {
      var typeId = 0
       if (this.type === 'video') {
         typeId = 8
       }
       if (this.type === 'pamphlet') {
         typeId = 8
       }
       return item.type === typeId
     })
   }
  }
}
</script>

<style>
.content-list-items-box{
  position: relative;
  height: 100%;
}
.content-list-items-box .content-box {
  position: absolute;
  overflow: auto;
  height: 100%;
  width: 100%;
}
.content-list-box .v-select-box .v-select--is-menu-active .v-input__control .v-input__slot{
  border:solid;
  background-color: transparent !important;
}
.content-list-box .v-select-box .v-menu__content{
  top:274px;
}
.content-list-box .v-select-box .v-text-field.v-text-field--enclosed{
  margin-right: 0!important;
}
.content-list-box {
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  border: solid 6px #eff3ff;
  height: 100%;
  overflow: hidden;
}
.content-box {
  /*margin-top: 43px;*/
}
.content-list-box .slot-header-box{
  display: flex;
  justify-content: space-between;
  margin: 19px 14px
}
.content-list-box .slot-header-box .slot-header-box-movie{
  font-size: 20px;
  font-weight: 500;
}
.content-list-box  .slot-header-box .slot-header-box-days{
  font-size: 14px;
}
.content-list-box  .v-select-box{
  margin: 0 26px;
}
@media screen and (max-width: 1200px){
  .content-list-box .v-select-box{
    margin: 0 26px;
  }
  .content-list-box .slot-header-box{
    margin: 13px 11px
  }
}
@media screen and (max-width: 576px) {

}
@media screen and (max-width: 350px) {
  .content-list-box .slot-header-box{
    flex-direction: row;
    justify-content: space-between;
    margin: 13px 0;
  }
  .content-list-box .v-select-box{
    margin: 0 6px;
  }
  .content-list-box .slot-header-box .slot-header-box-movie {
    font-size:16px;
  }
  .content-list-box .slot-header-box .slot-header-box-days{
    font-size: 12px;
  }
}
@media screen and (max-width: 320px) {

}
</style>
