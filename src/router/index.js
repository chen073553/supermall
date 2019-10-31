import Vue from 'vue';
import VueRouter from 'vue-router';

//使用懒加载的方式导入组件
const Home = () => import('../views/home/Home.vue');
const Category = () => import('../views/category/Category.vue');
const Shopcart = () => import('../views/shopcart/Shopcart.vue');
const Profile = () => import('../views/profile/Profile.vue');


//安装插件
Vue.use(VueRouter);

//插件路由对象  
const routes=[
    {
        path:'',
        redirect: '/home'
      },
      {
        path:'/home',
        component:Home
      },
      {
        path:'/category',
        component:Category
      },
      {
        path:'/shopcart',
        component:Shopcart
      },
      {
        path:'/profile',
        component:Profile
      },
]
const router=new VueRouter({
    routes,
    mode:'history' 
});

export default router; 