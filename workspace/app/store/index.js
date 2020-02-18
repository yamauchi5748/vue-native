import Vue from 'vue-native-core'
import Vuex from 'vuex'
import contents from './modules/contents'
import navigations from './modules/navigations'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        contents,
        navigations
    }
})