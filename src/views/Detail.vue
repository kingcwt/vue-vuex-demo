<template>
    <div v-if="dataObj">
        <div>
            <img :src="dataObj.poster" alt="" style="width: 100%">
            <h3>{{dataObj.name}}</h3>
            <h3>演员列表</h3>
            <swiper perview="4" class="actorSwiper" myclass="actorSwiper">
                <div class="swiper-slide" v-for="data in dataObj.actors" :key="data.avatarAddress">
                    <h5>{{data.name}}</h5>
                    <img :src="data.avatarAddress" alt="">
                </div>
            </swiper>
            <h3>剧照</h3>
            <swiper perview="2" class="photoSwiper"  myclass="photoSwiper">
                <div class="swiper-slide" v-for="data in dataObj.photos" :key="data">
                    <img :src="data" alt="">
                </div>
            </swiper>
        </div>
    </div>
</template>

<script>
    // import bus from '../bus/index';
    import axios from 'axios';
    import swiper from '../views/Detail/DetailSwiper';
    export default {
        name: "Detail",
        data:function(){
          return {
              detailId:'',
              dataObj:null
          }
        },
        methods:{

        },
        beforeMount() {
          // bus.$emit('maizuo',false)
          //   this.$store.state.isTabbarShow=false;
        this.$store.commit('HideMaizuoTabbar',false);//$1 就是mutation的名字
        },

        beforeDestroy() {
            // bus.$emit('maizuo',true)
            // this.$store.state.isTabbarShow=true;
            this.$store.commit('HideMaizuoTabbar',true);//$1 就是mutation的名字


        },
        mounted(){
            // console.log(this.$route.params.myid)
            this.detailId=this.$route.params.myid;
            axios({
                url:`https://m.maizuo.com/gateway?filmId=${this.detailId}&k=8483353`,
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1584086486721554505773","bc":"110100"}',
                    'X-Host': 'mall.film-ticket.film.info'
                }
            }).then(res=>{
                // console.log(res.data.data.film,'卡座电影详情')
                this.dataObj=res.data.data.film
            })
        },
        components:{
            swiper
        }
    }
</script>

<style scoped>

</style>