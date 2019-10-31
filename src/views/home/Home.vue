<template>
    <div id="home" class="wrapper">
        <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>

        <scroll class="content" 
                ref="scroll"    
                :probe-type="3" 
                @scroll="contentScroll" 
                :pull-up-load="true"
                @pullingUp="loadMore">
            <home-swiper></home-swiper>
            <recommend-view/>
            <feature-view/>
            <tab-control class="tab-control" 
                        :titles="['流行','新款','精选']"
                        @tabClick="tabClick"/>
            <goods-list :goods="showGoods"/>
        </scroll>   

        <back-top @click.native="backClick" v-show="isShowBackTop"/>
    </div>
</template>

<script>
    import HomeSwiper from './childComps/HomeSwiper.vue'
    import RecommendView from './childComps/RecommendView'
    import FeatureView from './childComps/FeatureView.vue'

    import NavBar from 'components/common/navbar/NavBar.vue'
    import TabControl from 'components/content/tabControl/TabControl.vue'
    import GoodsList from 'components/content/goods/GoodsList.vue'
    import Scroll from '../../components/common/scroll/Scroll.vue'
    import BackTop from 'components/content/backTop/BackTop.vue'

    import {getHomeGoods} from '../../network/home.js'


    export default {
        name:"Home",
        components:{
            HomeSwiper,
            RecommendView,
            FeatureView,
            NavBar,
            TabControl,
            GoodsList,
            Scroll,
            BackTop
        },
        data(){
            return{
                result:null,
                goods:{
                    'pop':{page:0,list:[]},
                    'new':{page:0,list:[]},
                    'sell':{page:0,list:[]}
                },
                currentType:'pop',
                isShowBackTop:false
                //filters:[],
                //recommends:[]
            }
        },
        computed: {
            showGoods(){
                return this.goods[this.currentType].list
            }
        },
        created(){
            //1.请求轮播图多个数据
            //this.getHomeMultidata()

            //2.请求商品列表数据
            this.getHomeGoods('pop')
            this.getHomeGoods('new')
            this.getHomeGoods('sell')
            
            
        },
        methods: {
            /*
                事件监听相关的方法
            */
            tabClick(index){
                switch (index) {
                    case 0:
                        this.currentType='pop'
                        break
                    case 1:
                        this.currentType='new'
                        break
                    case 2:
                        this.currentType='sell'
                        break   
                }
            },              

            backClick(){
                this.$refs.scroll.scrollTo(0,0,500)
            },

            contentScroll(position){
                this.isShowBackTop = (-position.y) > 1000
            },

            loadMore(){
                this.getHomeGoods(this.currentType)
            },


            /*
                网络请求相关的方法
            */
            //getHomeMultidata(){           
            // getHomeMultidata().then(res =>{
            //     this.result=res
            //     console.log(this.result)
            //     //this.recommends=res.data.list;
            //     //console.log(this.recommends)
                
            // })
            //}
            
            getHomeGoods(type){
                const page = this.goods[type].page+1
                getHomeGoods(type,page).then(res => {                   
                    this.goods[type].list.push(...res.data.list)
                    this.goods[type].page +=1

                    this.$refs.scroll.finishPullUp()
                })
            }

        }
    }
</script>

<style scoped>
    #home{
        padding-top: 44px;
        height: 100vh;
        position: relative;
    }
    .home-nav{
        background-color: pink;
        color: white;
        position: fixed;
        top:0;
        left:0;
        right:0;
        z-index: 9;
    }
    .tab-control{
        position: sticky;
        top:44px;
        z-index: 9;
    }
    .content{
        position: absolute;
        top:44px;
        left: 0;
        right: 0;
        bottom:49px;
        overflow: hidden;
    }
</style>