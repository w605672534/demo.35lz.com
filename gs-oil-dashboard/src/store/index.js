import Vue from "vue";
import Vuex from "vuex";
import Resource from "vue-resource";

Vue.use(Vuex)
Vue.use(Resource)
Vue.http.options.credentials = true;

export default new Vuex.Store({
    state: {
        params: {},
        server: window.location.hostname == 'rainbow2.hulu.io' ? 'http://localhost:8080' : 'https://train.35lz.com',
        corpId: window.location.hostname == 'poten.35lz.com' ? 'dinge63fd07c8dbfdcc1' : 'ding14726d2e2b8beb6e35c2f4657eb6378f',
        resources: localStorage.getItem('store.resources') ? JSON.parse(localStorage.getItem('store.resources')) : [],
        user: localStorage.getItem('store.user') ? JSON.parse(localStorage.getItem('store.user')) : {},
        theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark',
        realTimer: null
    },
    mutations: {
        setParams(state, ployed) {
            if (!state.params[ployed.name]) {
                Vue.set(state.params, ployed.name, {})
            }

            if (!state.params[ployed.name][ployed.key]) {
                Vue.set(state.params[ployed.name], ployed.key, ployed.value)
            }

            state.params[ployed.name][ployed.key] = ployed.value
        },
        setResources(state, ployed) {
            state.resources = ployed
            localStorage.setItem('store.resources', JSON.stringify(ployed))
        },
        setUser(state, ployed) {
            state.user = ployed
            localStorage.setItem('store.user', JSON.stringify(ployed))
        },
        setTheme(state, ployed) {
            state.theme = ployed
            localStorage.setItem('theme', ployed)
        },
        removeResources(state) {
            state.resources = null
            localStorage.removeItem('store.resources')
        },
        removeUser(state) {
            state.user = null
            localStorage.removeItem('store.user')
        },
    },
    getters: {}
})