<template>
    <div class="recommend">
        <div class="recommenditem">
            <a href="http://www.taobao.com">
            <img src="http://s11.mogucdn.com/mlcdn/c45406/180828_550k23i82cbibh32602fl43jc9aid_800x1200.jpg_320x999.jpg" alt="">
            <div>优惠内购</div>
            </a>
        </div>
        <div class="recommenditem">
            <a href="http://www.taobao.com">
            <img src="http://s11.mogucdn.com/mlcdn/c45406/180828_550k23i82cbibh32602fl43jc9aid_800x1200.jpg_320x999.jpg" alt="">
            <div>十点抢券</div>
            </a>
        </div>
        <div class="recommenditem">
            <a href="http://www.taobao.com">
            <img src="http://s11.mogucdn.com/mlcdn/c45406/180828_550k23i82cbibh32602fl43jc9aid_800x1200.jpg_320x999.jpg" alt="">
            <div>好物特卖</div>
            </a>
        </div>
        <div class="recommenditem">
            <a href="http://www.taobao.com">
            <img src="http://s11.mogucdn.com/mlcdn/c45406/180828_550k23i82cbibh32602fl43jc9aid_800x1200.jpg_320x999.jpg" alt="">
            <div>初秋新款</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name:"RecommendView",
        props:{
            recommend:{
                type:Array,
                default(){
                    return[]
                }
            }
        }
    }
</script>

<style scoped>
    .recommend{ 
        width:100%;        
        display:flex;
        text-align: center;
        padding: 10px 0 20px;
        border-bottom: 8px solid lightgray;
    }
    .recommenditem{
        flex:1
    }
    .recommenditem img{
        width:60px;
        height:60px;
        border-radius: 50%;
        margin-bottom: 2px
    }
</style>