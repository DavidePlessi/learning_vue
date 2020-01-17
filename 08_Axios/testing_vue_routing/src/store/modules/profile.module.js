const state = {
    nome: 'Davide',
    cognome: '',
    email: ''
};
const getters = {
    getNome: (state, getters, rootState, rootGetters) =>
        state.nome + '-' + rootGetters['settings/getName'],
    getCognome: state => state.cognome,
    getEmail: state => state.email
};
const mutations = {
    setNome: (state, nome) => {
        state.nome = nome
    },
    setCognome: (state, cognome) => {
        state.cognome = cognome
    },
    setEmail: (state, email) => {
        state.email = email
    }
};
const actions = {
    setProfile: (context, profile) => {
        setTimeout(() => {
            context.commit('setNome', profile.nome);
            context.commit('setCognome', profile.cognome);
            context.commit('setEmail', profile.email);
        }, 200)
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}