<template>
    <div>
        <ul
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10"
        >
            <li v-for="data in datalist" :key="data.filmId" @click="handlepush(data.filmId)">
<!--                {{data}}-->
                <div class="imgbox"><img :src="data.poster | myfilter" alt=""></div>
                <div class="libox">
                    <h3>{{data.name}}</h3>
                    <p><span class="wish">{{data.category}}</span><span></span></p>
                    <p>{{data.synopsis}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    import Vue from 'vue';
    Vue.filter('myfilter',function (item) {
        return item.replace('w.h','80.100')
    });
    export default {
        name: "Nowplaying",
        data(){
            return{
                datalist:[],
                loading:false
            }
        },
        methods:{
            handlepush(id){
                console.log(id);
                //编程式 路径跳转
                // this.$router.push(`/detail/${id}`);
                //编程式 名字跳转
                this.$router.push({name:'kerwindetail',params:{myid:id}})
            },
            loadMore(){
                console.log('到底啦');
            }
        },
        mounted() {
            // axios.get('/ajax/mostExpected?ci=1&limit=10&offset=0&token=&optimus_uuid=3C0142D0642311EA96885F6C8BEFB3CE8EC54C4D01444061BDDCD16CF292089C&optimus_risk_level=71&optimus_code=10').then(res=>{
            //     console.log(res.data.coming)
            //     this.datalist=res.data.coming
            // })

            //卖座电影
            axios({
                url:'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=7239881',
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1584086486721554505773","bc":"110100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res=>{
                console.log(res.data.data.films,'卡座电影')
                this.datalist=res.data.data.films
            })
        }
    }
</script>

<style scoped>
  ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
li{
  display: flex;
  font-size: 13px;
  color: #666;
  padding: 10px 15px;
  box-sizing: border-box;
}
  .wish{
    color: #faaf00;
    font-size: 15px;
    font-weight: 600;
  }
  .libox{
    display: flex;
    flex-direction: column;
    padding-top: 5px;
    padding-left: 10px;
    justify-content: space-around;
    align-items: end;
    height: inherit;
    padding-bottom: 32px;
    width: 50%;
  }
  .imgbox{
    width: 200px;
    height: 120px;
  }
  .imgbox img{width: 100%}
</style>