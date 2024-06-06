<template>
    <div class="box">
        <div class="headerText">
            <div ref="changeLangue" :class="$store.state.lang.isEn === 'en' ? 'catalogueEn' : 'catalogue' " is-link
                @click="showCatalogue">
                <i class="iconfont icon-caidan"></i>
                <span>{{$t('headertext.catalogue')}}</span>
            </div>
            <div class="logo">
                <Logo />
            </div>
            <div :class="$store.state.lang.isEn === 'en' ? 'langEn' : 'lang' " @click="changeLang">
                {{$store.state.lang.langs}}
            </div>
            <div :class="$store.state.lang.isEn === 'en' ? 'loginEn' : 'login' ">
                <a href="/login">{{$t('headertext.login')}}</a>
            </div>
        </div>
        <vue-final-modal class="catalogueDet" v-model="isShow" @click.stop>
            <router-link to="/about/introduce">关于我们</router-link>
            <router-link to="/conference/foretell">会议活动</router-link>
            <router-link to="/mediacenter/dynamic">媒体中心</router-link>
            <router-link to="/learning/designreport">学术研究</router-link>
            <router-link to="/welfareproject/greenleaf">公益项目</router-link>
            <router-link to="#">国际绿奖</router-link>
            <router-link to="#">WGDO绿研究院</router-link>
            <router-link to="#">绿叶标</router-link>
        </vue-final-modal>
    </div>
</template>

<script>
    import Logo from '@/components/Logo.vue'

    export default {
        name: 'HeaderText',
        components: { Logo },
        data() {
            let isShow = false
            return {
                isShow
            }
        },
        mounted() {
            // this.getItemNum()
            this.$store.commit('upCurrentLang')
            this.setLanguageStyles()
        },
        methods: {
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
            closeModal(e) {
                if (this.isShow && (this.$el.contains(e.target) || !this.$el.contains(e.target))) {
                    this.isShow = false;
                    document.removeEventListener('click', this.closeModal)
                } else {
                    e.stopPropagation();
                }
            },
            // getItemNum() {
            //     let catalogueDet = document.getElementsByClassName("catalogueDet")[0]
            //     let aCount = document.querySelectorAll('.box .catalogueDet a')
            //     let catalogueDetHeight = 57 * aCount.length
            //     console.log(catalogueDetHeight);
            //     catalogueDet.style.height = catalogueDetHeight + 'px'
            // }
            changeLang() {
                this.$store.commit('changeLang')
            },
            setLanguageStyles() {
                if (this.$store.state.lang.isEn === '中文') {
                    this.$refs.changeLangue.classList.remove('catalogue');
                    this.$refs.changeLangue.classList.add('catalogueEn');
                } else {
                    this.$refs.changeLangue.classList.remove('catalogueEn');
                    this.$refs.changeLangue.classList.add('catalogue');
                }
            }
        },
        beforeDestroy() {
            document.removeEventListener('click', this.closeModal);
        }
    }
</script>

<style scoped>
    .box {
        width: 100%;
    }

    .headerText {
        display: grid;
        grid-template-columns: 1.5fr 4fr auto 1.5fr;
        align-items: center;
        margin-top: 52px;
        width: 100%;
        height: 35px;
    }

    .catalogue {
        position: relative;
        top: 0;
        padding-left: 15px;
        width: 95px;
        height: 23px;
        text-align: center;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 22.4px;
        color: rgba(255, 255, 255, 1);
    }

    .catalogueEn {
        position: relative;
        top: 0;
        padding-left: 3px;
        width: 95px;
        height: 23px;
        text-align: right;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 22.4px;
        color: rgba(255, 255, 255, 1);
    }

    .catalogue i {
        position: absolute;
        top: .3px;
        left: 7px;
    }

    .catalogueEn i {
        position: absolute;
        top: .3px;
        left: 7px;
        zoom: 1;
    }

    .logo {
        justify-self: center;
        width: 145px;
        height: 35px;
    }

    .lang {
        width: 30px;
        /* height: 35px; */
        font-size: 14px;
        line-height: 35px;
        text-align: center;
        color: rgba(255, 255, 255, 1);
    }

    .langEn {
        width: 30px;
        font-size: 14px;
        line-height: 35px;
        text-align: center;
        color: rgba(255, 255, 255, 1);
    }

    .login {
        padding-right: 19px;
        height: 35px;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 35px;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        vertical-align: top;
    }

    .loginEn {
        padding-right: 19px;
        height: 35px;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 35px;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        vertical-align: top;
    }

    .login a {
        display: inline-block;
        height: 35px;
        font-size: 14px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        text-align: center;
    }

    .loginEn a {
        display: inline-block;
        height: 35px;
        font-size: 14px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        text-align: center;
    }

    /* catalogueDet */
    .box .catalogueDet {
        margin-top: 95px;
        display: flex;
        flex-direction: column;
        width: 209px;
        height: 464px;
        background: rgba(255, 255, 255, 1);
        border-radius: 5px;
    }

    /* 模态框最外层样式 */
    .box :deep(.vfm__container) {
        width: 209px;
        border-radius: 5px;
    }

    /* 最外层背景 */
    .box :deep(.vfm__overlay) {
        border-radius: 5px;
        background: rgba(255, 255, 255, 1);
    }

    /* 整体高度 */
    /* .catalogueDet :deep(.vfm--inset) {} */

    .catalogueDet a {
        display: inline-block;
        width: 100%;
        max-height: 57px;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 1px;
        text-align: center;
        line-height: 57px;
        color: rgba(150, 150, 150, 1);
        border-bottom: 1px solid rgba(219, 219, 219, 1);
    }

    .catalogueDet a:first-child {
        border-radius: 5px 5px 0 0;
    }

    .catalogueDet a:last-child {
        border-radius: 0 0 5px 5px;
        border: none;
    }

    .catalogueDet a:active {
        width: 209px;
        height: 57px;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 1px;
        line-height: 57px;
        color: rgba(165, 214, 63, 1);
        text-align: center;
    }

    a.router-link-exact-active {
        color: rgba(165, 214, 63, 1);
    }
</style>