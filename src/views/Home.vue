<template>
  <div class="home">
    <img
      alt="coming soon"
      class="coming-soon-image"
      src="../assets/image/cs_960-1920.png"
    >
    <img
      alt="coming soon"
      class="coming-soon-mobile"
      src="../assets/image/cs_0-960.png"
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
.home{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home .coming-soon-image{
  width: 873px;
  height: 454px;
  margin: 114px 440px;
}
.home .coming-soon-mobile{
  display: none;
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
    width: 600px;
    height: 311px;
    margin: 80px 30px;
  }

}
@media screen and (max-width: 960px){
  .home .coming-soon-image{
    display: none !important;
  }
  .home .coming-soon-mobile {
    display: block !important;
    width: 427px;
    height: 569px;
    margin: 109px 75px;
  }
}
@media screen and (max-width: 768px){
  .home .coming-soon-mobile {
    width: 427px;
    height: 569px;
    margin: 109px 82px ;
  }
  .home .coming-soon{
    font-size: 24px;
  }
  .home .coming-soon-description{
    font-size: 14px;

  }
}

@media screen and (max-width: 576px){
  .home .coming-soon-mobile {
    width: 257px;
    height: 342px;
    margin: 35px 23px;
  }
  .home .coming-soon{
    font-size: 24px;
  }
  .home .coming-soon-description{
    font-size: 14px;
    width: 177px;
    height: 48px;

  }
}
@media screen and (max-width: 350px) {
  .home .coming-soon-description{
    font-size: 14px;
    width: 177px;
    height: 48px;

  }
}


</style>
