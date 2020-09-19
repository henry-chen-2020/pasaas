const json = require('./data.json')

const state = {
  devices: json
}

const getters = {
  allDevices: (state) => state.devices
}
const actions = {
  setDevices({ commit }) {
    commit("SET_DEVICES", json)
  }
}
const mutations = {
  SET_DEVICES: (state, json) => (state.devices = json) 
}

export default {
  state,
  getters,
  actions,
  mutations
}
