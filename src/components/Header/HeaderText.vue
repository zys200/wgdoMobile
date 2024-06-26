<template>
    <div class="box">
        <div class="headerText">
            <div ref="changeLangue" :class="$store.state.lang.isEn === 'en' ? 'catalogueEn' : 'catalogue'"
                @click="showCatalogue">
                <i class="iconfont icon-caidan"></i>
                <span>{{ $t('headertext.catalogue') }}</span>
            </div>
            <div class="logo">
                <Logo />
            </div>
            <div :class="$store.state.lang.isEn === 'en' ? 'langEn' : 'lang'" @click="changeLang">
                {{ $store.state.lang.langs }}
            </div>
            <div :class="$store.state.lang.isEn === 'en' ? 'loginEn' : 'login'">
                <a href="/login">{{ $t('headertext.login') }}</a>
            </div>
        </div>
        <vue-final-modal class="catalogueDet" v-model="isShow" @click.stop>
            <router-link to="/about/introduce">{{ $t('headertext.Aboutus') }}</router-link>
            <router-link to="/conference/foretell">{{ $t('headertext.Conferenceactivity') }}</router-link>
            <router-link to="/mediacenter/dynamic">{{ $t('headertext.Mediacenter') }}</router-link>
            <router-link to="/learning/designreport">{{ $t('headertext.Academicresearch') }}</router-link>
            <router-link to="/welfareproject/greenleaf">{{ $t('headertext.Publicwelfareproject') }}</router-link>
            <router-link to="/greenaward/contribution">{{ $t('headertext.InternationalGreenAward') }}</router-link>
            <router-link to="/greenresearchinstitute/organization">{{ $t('headertext.WGDOGreenResearchInstitute')
                }}</router-link>
            <router-link to="#">{{ $t('headertext.Greenleaflabel') }}</router-link>
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
    grid-template-columns: 1.2fr 3.0fr .7fr .8fr;
    align-items: center;
    /* margin: 10px 0; */
    padding-top: 18px;
    width: 100%;
    height: 35px;
}

.catalogue {
    position: relative;
    top: 0;
    padding-left: 15px;
    width: 105px;
    height: 23px;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 22.4px;
    color: rgba(255, 255, 255, 1);
    /* border: 1px solid green; */
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
    /* border: 1px solid hotpink; */
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
    margin-top: -24px;
    margin-left: -14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 139px;
    border-radius: 5px;
    scale: 0.8;
}

/* 模态框最外层样式 */
.box :deep(.vfm__container) {
    border-radius: 5px;
}

/* 最外层背景 */
.box :deep(.vfm__overlay) {
    border-radius: 5px;
    background:transparent;
}

/* 整体高度 */
/* .catalogueDet :deep(.vfm--inset) {} */

.catalogueDet a {
    display: flex;
    width: 100%;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1px;
    text-align: center;
    color: rgba(150, 150, 150, 1);
    border-bottom: 1px solid rgba(219, 219, 219, 1);
    background: rgba(255, 255, 255, 1);

    justify-content: center;
    align-items: center;
    padding: 15px 0;
}

.catalogueDet a:first-child {
    border-radius: 5px 5px 0 0;
}

.catalogueDet a:last-child {
    border-radius: 0 0 5px 5px;
    border: none;
}

.catalogueDet a:active {
    width: 139px;
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