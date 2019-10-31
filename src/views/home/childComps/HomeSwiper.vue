<template>
    <div>
        <swiper>
            <swiper-item>
                <img src="http://s11.mogucdn.com/mlcdn/c45406/180828_550k23i82cbibh32602fl43jc9aid_800x1200.jpg_320x999.jpg" alt="">
            </swiper-item>
            <swiper-item>
                <img src="http://s3.mogucdn.com/mlcdn/c45406/180825_4figj590flej05g556d6ll8ka09a7_640x902.jpg_320x999.jpg" alt="">
            </swiper-item>
            <swiper-item>
                <img src="http://s11.mogucdn.com/mlcdn/c45406/180521_5ijdcl888016gfaag2id2e0g8l19j_640x960.jpg_320x999.jpg" alt="">
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
    import {Swiper,SwiperItem} from 'components/common/swiper'
    export default {
        name:"HomeSwiper",
        components:{
            Swiper,
            SwiperItem
        }
    }
</script>

<style scoped>
    img{
            height: 100%;
        }
</style>