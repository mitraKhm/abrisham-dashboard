<template>
  <div class="home">
    <img
      alt="coming soon"
      class="coming-soon-image"
      src="../assets/image/cs_960-1920.png"
    >
    <p class="coming-soon">
      ...به زودی
    </p>
    <p class="coming-soon-description">
      این بخش هنوز آماده نیست ولی به زودی آماده و فعال میشه.
    </p>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {

  }
}
</script>
<style scoped>
.home .coming-soon-image{
  width: 873px;
  height: 454px;
  margin: 114px 477px 43px 440px;
}
.home .coming-soon{
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  color: #3e5480;
}
.home .coming-soon-description{
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: #9fa5c0;
}

@media screen and (max-width: 1200px) {
  .home .coming-soon-image{
    width: 478px;
    height: 34px;
    margin: 97px 311px 113px;
  }

}

</style>
