<template>
    <div>
        <Swiper :key="datalist.length" class="lunbo" ref="mylunboele">
            <li class="swiper-slide" v-for="n in datalist" :key="n">{{n}}</li>
        </Swiper>
        <FilmHeader :class="isFixed?'fixed':''"></FilmHeader>
        <router-view></router-view>
    </div>
</template>

<script>
    import Swiper from '../views/Film/Swiper';
    import FilmHeader from "./Film/FilmHeader";
    export default {
        name: "Film",
        data:function(){
          return{
              datalist:[11,222,333],
              isFixed:false
          }
        },
        components:{
            FilmHeader,
            Swiper
        },
        mounted() {
            window.onscroll=this.handleScroll
        },
        destroyed() {
            window.onscroll=null;
        },
        methods:{
            handleScroll(){
                // console.log(this.$refs.mylunboele.$el.offsetHeight,document.documentElement.scrollTop);
                if(document.documentElement.scrollTop>this.$refs.mylunboele.$el.offsetHeight){
                   this.isFixed=true
                }else{
                    this.isFixed=false
                }
            }
        }
    }
</script>

<style scoped>
.lunbo{
  height: 200px;
    width: 100%;
}
</style>