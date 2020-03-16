<template>
    <div class="cinema" :style="mystyle">
        <ul>
            <li v-for="data in datalist" :key="data.cinemaId">
                <h3>{{data.name}}</h3>
                <p style="font-size: 15px;color:#999">{{data.address}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from "axios";
    import BetterScroll from 'better-scroll';
    export default {
        name: "Cinema",
        data:function(){
            return{
                datalist:[],
                mystyle:'0px'
            }
        },
        mounted(){
            this.mystyle=document.documentElement.clientHeight-50+'px';
            this.detailId=this.$route.params.myid;
            var cityId=localStorage.getItem('cityId');
            axios({
                url:`https://m.maizuo.com/gateway?cityId=${cityId}&ticketFlag=1&k=9389278`,
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1584086486721554505773","bc":"110100"}',
                    'X-Host': 'mall.film-ticket.cinema.list'
                }
            }).then(res=>{
                this.datalist=res.data.data.cinemas;
                this.$nextTick(()=>{
                    new BetterScroll('.cinema',{
                        scrollbar:{
                            fade:true,
                            interactive:false
                        }
                    })
                })
            })
        },
    }
</script>

<style scoped>
li{
    height: 50px;
    padding-bottom: 15px;

}
    .cinema{
        height: 500px;
        overflow: hidden;
        position: relative;
    }
</style>