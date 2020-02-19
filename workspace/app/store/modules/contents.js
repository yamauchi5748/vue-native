import axios from "axios";
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
    getContents({ commit }) {
        commit('getContents');
    }
}
// mutations
const mutations = {
    getContents(state) {
        state.loading = true;
        axios("http://172.20.10.3:8080/api/contents").then(res => {
            res.data.forEach(content => {
                state.contents.push(content);
            });
            state.loading = false;
        });
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}