import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    login: {
        username: '',
        password: ''
    },
    lang: {
        isEn: 'en',
        version: 1
    }
}

const action = {
}
const mutations = {
}


const store = new Vuex.Store({
    state,
    action,
    mutations
})

export default store