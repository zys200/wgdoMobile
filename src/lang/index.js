import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from '@/lang/zh.json'
import en from '@/lang/en.json'

Vue.use(VueI18n)

const localeLang = sessionStorage.getItem('langs')
const currentlLocale = localeLang ? localeLang.replace(/^"(.*)"$/, '$1') : 'en'

const i18n = new VueI18n({
    locale: currentlLocale,
    messages: {
        zh,
        en
    },
    silentFallbackWarn: true,
})

export default i18n