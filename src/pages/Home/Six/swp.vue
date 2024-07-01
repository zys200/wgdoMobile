<template>
    <div class="my-container">
        <div class="banner-box-swiper">
            <swiper v-if="sixTwo.length > 0" :options="swiperOption" ref="mySwiper" style="width: 218px; height: 151px">
                <swiper-slide class="swiper-slide" v-for="item in sixTwo" :key="item.id">
                    <a href=""><img :src="'http://www.wgdo.net' + item.cover" alt="" /></a>
                    <div>{{item.title}}</div>
                </swiper-slide>
            </swiper>
        </div>
        <div class="indicators">
            <div :class="'item' + (sixTwo == index ? 'active' : '')" v-for="(_,index) in sixTwo.length" :key="index">
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'

    let vm = null

    export default {
        name: 'swp',
        props: ['sixTwo'],
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                carouselList: [],
                active: 0,
                carouselIndex: 0,
                // 异形轮播图配置
                swiperOption: {
                    effect: 'coverflow',
                    coverflowEffect: {
                        rotate: 0, // slide做3d旋转时Y轴的旋转角度 (默认50).
                        stretch: -30, // 每个slide之间的拉伸值 越大slide靠得越紧.
                        depth: 100, // slide的位置深度 值越大z轴距离越远 看起来越小.
                        modifier: 1, // depth和rotate和stretch的倍率 相当于(depth*modifier、rotate*modifier、stretch*modifier) 值越大这三个参数的效果越明显(默认1).
                        slideShadows: false // 开启slide阴影 (默认 true)
                    },
                    centeredSlides: true,
                    loop: true,
                    autoplay: {
                        delay: 6000,
                        stopOnLastSlide: false,
                        disableOnInteraction: false
                    },
                    slideToClickedSlide: true,
                    on: {
                        slideChange: function () {
                            vm.carouselIndex = this.realIndex
                        }
                    }
                }
            }
        },
        created() { vm = this },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        }
    }
</script>

<style scoped>
    .my-container {
        width: 375px;
        padding-top: 12px;
        box-sizing: border-box;
    }

    .banner-box-swiper {
        width: 100%;
        height: 180px;
        overflow: hidden;
    }

    .swiper-container {
        height: 280px;
        width: 290px;
        overflow: visible;
    }

    .swiper-slide {
        position: relative;
        top: 0;
        left: 0;
        text-align: center;
        background: #fff;
        transition: 300ms;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .swiper-slide div {
        padding: 0 18px;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 34px;
        background-color: rgba(62, 73, 56, 0.5);
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 34px;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    a {
        width: 100%;
        height: 100%;
        display: block;
        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.21);
        overflow: hidden;
    }

    img {
        width: 100%;
        height: 100%;
        display: block;
    }

    .indicators {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px 0 18px;
    }

    .item {
        margin-left: 10px;
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 1);
        border-radius: 2px;
    }

    .active {
        width: 4px;
        height: 4px;
        color: rgba(166, 225, 99, 1);
    }
</style>