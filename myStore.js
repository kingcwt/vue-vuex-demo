import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import {HIDE_MAIZUO_TABBAR} from './src/type/index';
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        isTabbarShow:true,
        comingList:[]
    },

    //
    getters:{
      comingListGetter(state){
          return state.comingList.filter((item,index)=>index<0);
      }
    },
    mutations:{
        [HIDE_MAIZUO_TABBAR](state,data){
            // console.log(HideMaizuoTabbar)
            state.isTabbarShow=data;
        },
        comingListMutation(state,data){
            state.comingList=data;
        }
    },
    actions:{
        getComingListAction(store){
            axios({
                url:`https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=6770370`,
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1584086486721554505773"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res=>{
                console.log(res.data.data.films,'正在热映/反的');
                store.commit('comingListMutation',res.data.data.films)
            })
        }
    }
})