<template>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="item-icon" src="../../../assets/image/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="../../../assets/image/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div> 
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="pink">
        <img slot="item-icon" src="../../../assets/image/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="../../../assets/image/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeColor="red">
        <img slot="item-icon" src="../../../assets/image/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="../../../assets/image/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div> 
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="yellow">
        <img slot="item-icon" src="../../../assets/image/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="../../../assets/image/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div> 
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
    name:"MainTabBar",
    components:{
        TabBar,
        TabBarItem
    }
}
</script>

<style scoped>

</style>