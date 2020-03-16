import Vue from 'vue';
import Router from 'vue-router';
import Film from './views/Film';
import Cinema from './views/Cinema';
import Center from './views/Center';
import Nowplaying from "./views/Film/Nowplaying";
import Comingsoon from "./views/Film/Comingsoon";
import Detail from "./views/Detail";
import Login from './views/Login';
import City from "./views/City";
Vue.use(Router);
// const auth={
//     isLogin(){
//         return false;
//     }
// };
const router=new Router({
    // mode: 'history', //history 有风险会请求后台接口 避免404 需要后台配合 返回当前index.html 和后段沟通好 看vue-router官网有解释
    routes:[
        {
            path:'/film',
            component:Film,
            children:[
                {
                    path:'/film/nowplaying',
                    component:Nowplaying
                },
                {
                    path:'/film/comingsoon',
                    component:Comingsoon
                },
                {
                    path:'',
                    redirect:'/film/nowplaying'
                }
            ]
        },
        {
            path:'/cinema',
            component:Cinema
        },
        {
            path:'/city',
            component:City
        },
        {
            path:'/detail/:myid',  //动态路由
            name:'kerwindetail',
            component:Detail
        },
        {
            path:'/center',
            component:Center
        },
        {
            path:'/login',
            component:Login
        },

        {
            path:'*',
            redirect:'/film'
        }

    ]
});


// 全局守卫
// router.beforeEach((to,from,next) => {
//     // ...
//     console.log(to);
//     if(to.path==='/center'){
//         console.log('盘查');
//         if(auth.isLogin()){
//             next();
//         }else{
//             next('/login')
//         }
//     }else{
//         next();
//     }
// });

export default router;