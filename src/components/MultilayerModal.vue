<template>
    <div class="multilayermodal">
        <!-- 整个 -->
        <div class="showbar" v-show="isShow">
            <!-- 每一行 -->
            <div class="showbarItem" v-for="(i,index) in categoryData" :key="i.classifyId" @click="getIndex(index)">
                <div class="duoceng" v-if="i.children !== null">
                    <div class="duocengItem">
                        <!-- 多层Item -->
                        <div class="isduocengItem">
                            <router-link :to="{ name: i.urls}">{{i.classifyName}}</router-link>
                            <div class="isduocengItemI">
                                <i class="iconfont icon-zuojiantou" @click="showMore(index)" id="showm"
                                    v-if="i.children.length !== 1 && $route.path === '/greenaward/price'"
                                    :class="{ 'rotate': showMoreIconRotate }"></i>
                            </div>
                        </div>
                        <!-- 多层每一行 -->
                        <div class="shows" v-show="greenShow && fcurrentShow === currentShow">
                            <router-link v-for="(t,tindex) in i.children" :key="t.classifyId" :to="{ name: t.urls}"
                                @click.native="handleClick(tindex)">
                                {{t.classifyName}}
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 右边圆圈 -->
        <div class="toList" @click="showCatalogue">
            <div class="toListA"><i class="icon-liebiao"></i></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MultilayerModal',
        props: ['categoryData'],
        data() {
            let isShow = false
            let greenShow = false
            let fcurrentShow = -1
            let currentShow = -2
            return {
                isShow,
                greenShow,
                fcurrentShow,
                currentShow,
                showMoreIconRotate: false
            }
        },
        mounted() {
            window.addEventListener('scroll', function () {
                var modal = document.getElementsByClassName('multilayermodal')[0];
                if (modal) {
                    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    if (scrollTop > 100) {
                        modal.style.top = '70px';
                    } else {
                        modal.style.top = '468px';
                    }
                }
            })
        },
        methods: {
            handleClick(tindex) { this.$emit('gindexChild', tindex) },
            showCatalogue() {
                if (this.isShow) {
                    this.isShow = false;
                    document.removeEventListener('click', this.closeModal);
                } else {
                    this.isShow = true;
                    setTimeout(() => {
                        document.addEventListener('click', this.closeModal);
                    }, 0);
                }
            },
            // closeModal(e) {
            //     let showmore = document.getElementsByClassName('showmore')[0]
            //     if (this.isShow && (this.$el.contains(e.target) || !this.$el.contains(e.target)) && !this.$el.contains(showmore)) {
            //         this.isShow = false;
            //         document.removeEventListener('click', this.closeModal)
            //     } else {
            //         e.stopPropagation();
            //         showmore.style.transform = 'rotate(0deg)'
            //     }
            // },
            closeModal(e) {
                let showmore = document.getElementById('showm')[0];
                if (this.isShow && !this.$el.contains(e.target) && !showmore.contains(e.target)) {
                    this.isShow = false;
                    document.removeEventListener('click', this.closeModal);
                } else {
                    e.stopPropagation();
                    showmore.style.transform = 'rotate(0deg)';
                }
            },
            getIndex(index) {
                this.$emit('gindex', index)
                // console.log(index, 's');
                this.fcurrentShow = index
            },
            showMore(index) {
                // console.log(index, 'f');
                this.currentShow = index;
                this.greenShow = !this.greenShow
                this.$nextTick(() => {
                    let showmore = document.getElementById('showm');
                    if (this.greenShow) {
                        if (this.greenShow) {
                            showmore.style.transform = 'translateX(-10px) rotate(-90deg)';
                            // showmore.style.transform = 'rotate(-90deg)';
                        } else {
                            showmore.style.transform = 'rotate(0deg)';
                        }
                    } else {
                        showmore.style.transform = 'rotate(0deg)';
                    }
                })
            }
        },
        beforeRouteLeave(to, from, next) {
            document.removeEventListener('click', this.closeModal);
            next();
        },
        watch: { '$route.path': { handler() { this.isShow = false } } }
    }
</script>

<style scoped>
    .rotate {
        transform: rotate(-90deg)
    }

    /* toList */
    .multilayermodal {
        width: 179px;
        position: fixed;
        z-index: 2000;
        top: 468px;
        left: calc(100vw - 179px);
        display: flex;
        justify-content: flex-end;
        border-radius: 5px;
    }

    .multilayermodal .toList {
        width: 50px;
        height: 50px;
        opacity: .7;
        border-radius: 50px;
        background: rgba(204, 204, 204, 1);
        overflow: hidden;
    }

    .multilayermodal .toList .toListA {
        padding: 4px;
        margin: 2px;
        width: 46px;
        height: 46px;
        border-radius: 50px;
        background: rgba(255, 255, 255, 1);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .multilayermodal .toList .toListA i {
        display: inline-block;
        width: 18px;
        height: 18px;
        font-size: 20px;
        font-style: normal;
        font-family: iconfont;
        color: rgba(165, 214, 63, 1);
    }

    /* showbar */
    .multilayermodal .showbar {
        border-radius: 5px;
        width: 129px;
        background-color: #fff;
    }

    .multilayermodal .showbar .showbarItem {
        width: 129px;
        border-bottom: 1px solid rgba(150, 150, 150, .7);
    }

    /* duoceng */
    .multilayermodal .showbar .showbarItem .duoceng {
        width: 129px;
        border-radius: 5px;
        background: rgba(255, 255, 255, 1);
    }

    .multilayermodal .showbar .showbarItem .duocengItem {
        border-radius: 5px;
    }

    .multilayermodal .showbar .showbarItem .duocengItem .isduocengItem {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .multilayermodal .showbar .showbarItem .duoceng .duocengItem a {
        flex: 6;
        display: inline-block;
        padding: 16px;
        min-height: 48px;
        border-radius: 5px;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 1px;
        color: rgba(150, 150, 150, 1);
        text-align: center;
    }

    .multilayermodal .showbar .showbarItem .duoceng .duocengItem .isduocengItemI {
        flex: 1;
        width: 30px;
        height: 30px;
        line-height: 30px;
        background-color: #cff;
    }

    .multilayermodal .showbar .showbarItem .duoceng .duocengItem .isduocengItemI i {
        /* margin: 0 3px; */
        flex: 1;
        display: block;
        width: 13.93px;
        height: 18.57px;
        color: rgba(150, 150, 150, 1);
        transform: translateX(-10px);
        background-color: #4e9ca8;
    }

    .multilayermodal .showbar .showbarItem .duoceng .duocengItem a:last-child {
        border-bottom: none;
    }

    /* show */
    .shows {
        padding: 16px 0;
        display: flex;
        flex-direction: column;
        width: 129px;
        background-color: #4e9ca8;
    }

    .shows a {
        padding: 8px 0;
        display: inline-block;
        font-size: 10px;
        font-weight: 300;
        letter-spacing: 1px;
        line-height: 10px;
        color: rgba(150, 150, 150, 1);
        text-align: center;
        zoom: .7
    }

    /* putong */
    .multilayermodal .showbar .showbarItem .putong {
        display: inline-block;
        padding: 16px;
        width: 100%;
        min-height: 48px;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 15.91px;
        color: rgba(150, 150, 150, 1);
        text-align: center;
        /* border-bottom: 1px solid rgba(219, 219, 219, .7); */
    }

    .multilayermodal .showbar .showbarItem .putong:last-child {
        /* border-bottom: none; */
    }

    .multilayermodal a.router-link-exact-active {
        color: rgba(165, 214, 63, 1);
    }
</style>