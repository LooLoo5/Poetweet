import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        URL: process.env.VUE_APP_AXIOS_URL || '',
    },
    mutations: {

    },
    actions: {

    },
});
