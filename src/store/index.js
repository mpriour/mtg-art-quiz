import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [],
    names: [],
    randomSet: []
  },
  mutations: {
    setCards(state, cards){
      state.cards = cards
    },
    setNames(state, names){
      state.names = names
    },
    setRandom(state, set){
      state.randomSet = set
    },
    clearRandom(state){
      state.randomSet = []
    }
  },
  actions: {
    async initialize({commit}){
      try {
        const response = await Promise.all([
          fetch('./data/standard.json').then(r=>r.json()),
          fetch('./data/names-standard.json').then(r=>r.json())
        ]);
        commit('setCards', response[0])
        commit('setNames', response[1])
      } catch (err) {
        console.error(`Could not initialize. Error: ${err}`)
      }
    },
    makeRandom({commit, state}, {format, count=20}){
      const legalCards = state.cards.filter(c => c[format])
      const rindex = new Set()
      const selected = []
      while(rindex.size < count){
        rindex.add(Math.floor(Math.random() * legalCards.length))
      }
      rindex.forEach(i => {
        selected.push(legalCards[i])
      })
      commit('setRandom', selected)
    },
    clearRandom({commit}){
      commit('clearRandom')
    }
  },
  modules: {
  }
})
