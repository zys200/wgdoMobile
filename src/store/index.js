import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import i18n from '@/lang/index.js'

Vue.use(Vuex)

const state = {
    login: { username: '', password: '' },
    // lang: {
    //     isEn: 'en',
    //     version: '2',
    //     isText1Visible: true,
    //     langs: '中文',
    //     homeTitle: [],
    // },
    lang: {
        isEn: 'zh',
        version: '1',
        isText1Visible: false,
        langs: 'En',
        homeTitle: [],
    },
    isMore: false,
    urlDatas: []
}

const action = {}

const mutations = {
    changeLang({ lang }) {
        lang.isText1Visible = !lang.isText1Visible
        lang.isEn = lang.isText1Visible === false ? 'zh' : 'en'
        lang.version = lang.isText1Visible === false ? '1' : '2'
        lang.langs = lang.isText1Visible === false ? 'En' : '中文'
        i18n.locale = lang.isEn
    },
    upCurrentLang({ lang }) {
        let currentlang = sessionStorage.getItem('langs')?.replace(/^"(.*)"$/, '$1')
        if (currentlang) {
            if (currentlang === 'en') {
                lang.isEn = 'en'
                lang.version = '2'
                lang.isText1Visible = true
                lang.langs = '中文'
            } else {
                lang.isEn = 'zh'
                lang.version = '1'
                lang.isText1Visible = false
                lang.langs = 'En'
            }
        }
    },
    setHomeTitle({ lang }, datas) { lang.homeTitle = datas },
    changeIsMore(state) { state.isMore = !state.isMore },
    updateUrlDataAction({ commit, state }, newPath) {
        const currentIndex = state.urlDatas.findIndex(item => item === newPath)
        if (currentIndex === -1) {
            commit('pushUrlData', newPath)
            console.log(state.urlDatas, 'nesss')
        } else {
            commit('popUrlData', currentIndex)
        }
    },
    pushUrlData(state, newPath) {
        if (state.urlDatas.length === 0) {
            state.urlDatas = newPath
        } else {
            state.urlDatas.push(newPath)
        }
    },
    popUrlData(state, endIndex) {
        state.urlDatas.splice(endIndex + 1)
    },
    clearUrlDatas(state) { state.urlDatas = [] }
}

const store = new Vuex.Store({
    state,
    action,
    mutations,
    plugins: [
        createPersistedState({
            storage: window.sessionStorage,
            key: "langs",
            reducer(state) {
                return state.lang.isEn;
            }
        }),
        createPersistedState({
            storage: window.sessionStorage,
            key: "urlDatasState",
            reducer(state) {
                return {
                    urlDatas: state.urlDatas
                }
            }
        })
    ]
})

export default store