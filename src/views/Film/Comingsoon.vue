<template>
    <div>
        <ul>
            <li v-for="data in this.$store.state.comingList" :key="data.filmId" @click="handleclick(data.isSale)">
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
    import { MessageBox } from 'mint-ui';

    export default {
        name: "Comingsoon",
        methods:{
            handleclick(data){
                console.log(data)
                if(!data){
                    MessageBox({
                        title: '提示',
                        message: '确定执行此操作?',
                        showCancelButton: true
                    });
                }
            }
        },
        mounted() {


            if(this.$store.state.comingList.length===0){
                //请求
                this.$store.dispatch('getComingListAction')
            }else{
                //数据缓存
            }
        }
    }
</script>

<style scoped>

</style>