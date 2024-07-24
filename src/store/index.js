// src/store/index.js
import { createStore } from 'vuex'

export default createStore({
    state: {
        splashScreenShown: false
    },

    getters: {
        // Define your getters here
    },
    mutations: {
        SET_SPLASH_SCREEN_SHOWN(state, value) {
            state.splashScreenShown = value
        },
        SET_LOGGED_IN(state, value) {
            state.isLoggedIn = value
        },
        SET_USER(state, user) {
            state.user = user
        }
    },
    actions: {
        setSplashScreenShown({ commit }, value) {
            commit('SET_SPLASH_SCREEN_SHOWN', value)
        },
        setLoggedIn({ commit }, value) {
            commit('SET_LOGGED_IN', value)
        },
        setUser({ commit }, user) {
            commit('SET_USER', user)
        }
    },
    modules: {
        // Define your modules here
    }
})