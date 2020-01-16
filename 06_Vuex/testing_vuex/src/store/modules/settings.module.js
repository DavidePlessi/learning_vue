const state = {
    name: 'Admin',
};
const getters = {
    getName: state => state.name,
};
const mutations = {
    setNome: (state, nome) => {
        state.name = nome
    },
};
const actions = {};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}