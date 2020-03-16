<template>
  <div class="box">
    <tabbar v-show='isTabbarShow'></tabbar>
    <router-view></router-view>
  </div>
</template>    "antd-mobile": "^2.3.1",


<script>
  import tabbar from './components/Tabbar';
  import {mapState} from 'vuex';
  // import sidebar from './components/Sidebar';
  // import navbar from './components/Navbar';
  // import bus from './bus/index'
  //全局引用的方式
  // import vue from 'vue';
  // vue.component('navbar',navbar);
  // vue.component('sidebar',sidebar);


  export default {
    data(){
      return{
        datalist:[],
        status:true,
      }
    },
    methods:{
      handleadd(){
        this.datalist.push(this.$refs.mytext.value)
      }
    },
      // computed:{
      //   isShow(){
      //       return this.$store.state.isTabbarShow;
      //   }
      // },
      computed:{
          ...mapState(['isTabbarShow'])
      },

      components:{
      tabbar
    },
    mounted() {

    }

  }
</script>

<style >
 *{
     margin:0;
     padding: 0;
 }
  html,body{
      height: 100%;
  }
  ul,li{
    list-style: none;
  }
  .box{
    padding-bottom: 100px;
  }

</style>