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
  import 'swiper/css/swiper.css';
    export default {
        name: "Swiper",
        mounted() {
            new Swiper ('.swiper-container', {
                loop: true, // 循环模式选项
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

            });
        }
    }
</script>

<style scoped>
  .swiper-container {
    width: 600px;
    height: 300px;
  }
</style>