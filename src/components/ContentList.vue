<template>
  <div class="content-list-box">
    <!--    <v-overlay-->
    <!--      v-if="loading"-->
    <!--      absolute-->
    <!--    >-->
    <!--      <v-progress-circular indeterminate />-->
    <!--    </v-overlay>-->
    <slot name="header">
      <div>
        <div class="slot-header-box">
          <v-card-text
            class="slot-header-box-movie"
          >
            {{ header.title }}
          </v-card-text>
          <div
            v-if="header.button"
            class="d-flex justify-end"
          >
            <v-chip
              text-color="#9fa5c0"
              depressed
              color="transparent"
              class="slot-header-box-days"
            >
              <div
                @click="btnClicked()"
              >
                {{ header.button.title }}
              </div>
            </v-chip>
          </div>
        </div>
      </div>
    </slot>
    <slot name="filter" />
    <div class="content-list-items-box">
      <div
        v-if="!loading"
        class="content-box"
      >
        <content-list-item
          v-for="(item , index) in filteredList"
          :key="index"
          :content="item"
          :type="type"
          :selected="selectedItem.id === item.id"
          @itemClicked="changeSelectedId(item)"
        />
      </div>
      <div
        v-for="i in 6"
        :key="i"
      >
        <v-skeleton-loader
          v-if="loading"
          max-height="100"
          type="list-item-avatar-three-line"
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
      type:ContentList,
      default :() => {
        return new ContentList();
      }
    },
    value: {
      type: Content,
      default () {
        return new Content()
      }
    },
    type:{
      type: String,
      default:''
    },
    loading:{
      type: Boolean,
      default: false
    },
    contentTitle :{
      type:String,
      default:'لیست فیلم ها '
    },
    header :{
      type: Object,
      default (){
        return {
        }
      }
    },
  },
  data(){
    return {
      items: ['تست1', 'تست2', 'تست3', 'تست4'],
      selectedItem: new Content(),
    }
  },
 computed :{
   // ----------------------------------Yadegari----------------------------------
   //  filteredList () {
   //    return this.contents.list.filter(item => {
   //      var typeId = 0
   //       if ( item.content_type.name === 'video') {
   //         typeId = 8
   //       }
   //       if (item.content_type.name === 'pamphlet') {
   //         typeId = 1
   //       }
   //       return  item.content_type.id === typeId
   //     })
   // },
   filteredList () {
      return this.contents.list.filter(item => item.content_type.name === this.type)
   }
  },
  watch:{
    value: function () {
      this.selectedItem = this.value
    },
  },
  methods:{
    btnClicked () {
      this.$emit('clicked')
    },
    changeSelectedId(content){
      this.$emit('input', content)
    }
  },
  created() {
    this.selectedItem = this.value
  }
}
</script>

<style >
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
  position: relative;
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
  flex-direction: row;
  justify-content: space-between;
  margin: 19px 14px
}
.content-list-box .slot-header-box .slot-header-box-movie{
  color:#3e5480;
  font-size: 20px;
  font-weight: 500;
}
.content-list-box  .slot-header-box .slot-header-box-days{
  font-size: 14px;
  padding-bottom:0;
  justify-self: end;
}
.content-list-box  .v-select-box{
  margin: 0 26px;
}
@media screen and (max-width: 1920px){
  .content-list-box .v-select-box{
    margin: 0 10px;
  }
  .content-list-box .slot-header-box .slot-header-box-movie{
    order:2;
    padding: 0 10px 0  0;
  }
  .content-list-box .slot-header-box{
    flex-direction: column;
    margin: 13px 11px
  }
}
@media screen and (max-width: 960px) {

  .content-list-items-box .content-box {
    position: relative;
    max-height: 300px;
  }
}

@media screen and (max-width: 1200px) {

}
@media screen and (max-width: 990px) {
  .content-list-box .slot-header-box {
    flex-direction: row;
  }

  .content-list-box .slot-header-box .slot-header-box-movie {
    order: 0;
    padding: 0 10px 0 0;
  }

}
@media screen and (max-width: 768px) {
  .content-list-box .slot-header-box .slot-header-box-movie {
    font-size: 16px;
  }
  .content-list-box  .slot-header-box .slot-header-box-days{
    font-size: 12px;
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
    padding:0;
  }
  .content-list-box .slot-header-box .slot-header-box-days{
    font-size: 12px;
  }
}
@media screen and (max-width: 320px) {

}
</style>
