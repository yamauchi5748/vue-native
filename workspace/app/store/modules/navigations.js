const state = {
    navigations: [
        { value: "デイリー", active: true },
        { value: "週間", active: false }
    ]
}
const getters = {
    navigations: state => {
        return state.navigations;
    },
    activeStatus: state => {
        return state.navigations.filter(nav => {
            return nav.active;
        })[0].value;
    }
}
// actions
const actions = {
    changeNavigations({ commit }, active_nav) {
        commit('changeNavigations', active_nav);
    }
}
// mutations
const mutations = {
    changeNavigations(state, active_nav) {
        state.navigations.forEach(nav => {
            // データリスト初期化
            nav.active = false;

            // データリストをリアクティブに変更する
            if (active_nav.value === nav.value) nav.active = true;
        });
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}