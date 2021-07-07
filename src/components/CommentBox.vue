<template>
  <div class="comment-box">
    <v-textarea
        class="rounded-xl  comment-main"
        background-color="#eff3ff"
        placeholder="یادداشت این جلسه"
        filled
        auto-grow
        solo
        flat
    >


    </v-textarea>
  </div>
</template>

<script>
export default {
  name: "CommentBox"
}
</script>

<style>
.comment-box .comment-main{
  margin: 0 70px 883px 25px;
}


.comment-box .comment-main textarea::-webkit-input-placeholder {
  color: #3e5480 !important;
  padding-top: 19px;
  padding-right: 25px;
  font-size: 16px;

}

.comment-box .comment-main textarea:-moz-placeholder { /* Firefox 18- */
  color: #3e5480 !important;
  padding-top: 19px;
  padding-right: 25px;
  font-size: 16px;
}

.comment-box .comment-main textarea::-moz-placeholder {  /* Firefox 19+ */
  color: #3e5480 !important;
  padding-top: 19px;
  padding-right: 25px;
  font-size: 16px;
}

.comment-box .comment-main textarea:-ms-input-placeholder {
  color: #3e5480 !important;
  padding-top: 19px;
  padding-right: 25px;
  font-size: 16px;
}

.comment-box .comment-main textarea::placeholder {
  color: #3e5480 !important;
  padding-top: 19px;
  padding-right: 25px;
  font-size: 16px;
}


</style>
