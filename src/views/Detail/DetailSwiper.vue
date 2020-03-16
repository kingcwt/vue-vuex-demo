<template>
  <div class="swiper-container filmswiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination film-swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/css/swiper.min.css';
    export default {
        props:['perview','myclass'],
        name: "DetailSwiper",
        mounted() {
            new Swiper('.'+this.myclass,{
                slidesPerView:this.perview,
                spaceBetween:30,
                freeMode:true

            })
        }
    }
</script>

<style scoped>
  .swiper-wrapper img{
    width: 100%;
  }
  .film-swiper-pagination{
    text-align: right;
  }

</style>