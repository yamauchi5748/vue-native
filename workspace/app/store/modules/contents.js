import moment from 'moment';

const state = {
    loading: true,
    contents: []
}
const getters = {
    dailyContents: state => {
        return state.contents.filter(content => {
            const fromDate = moment(content.created_at);
            const toDate = moment();
            const diff = toDate.diff(fromDate, 'days')
            return diff <= 0;
        }).slice(0, 20);
    },
    weeklyContents: state => {
        return state.contents.slice(0, 20);
    },
    loading: state => {
        return state.loading;
    }
}
// actions
const actions = {
    addContents({ commit }, contents) {
        commit('addContents', contents);
    },
    changeLoading({ commit }, loading) {
        commit('changeLoading', loading);
    },
}
// mutations
const mutations = {
    addContents(state, contents) {
        state.contents.push(contents);
    },
    changeLoading(state) {
        state.loading = !state.loading;
    },
}
export default {
    state,
    getters,
    actions,
    mutations
}