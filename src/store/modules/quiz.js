export default {
  namespaced: true,
  state: {
    cards: [],
    names: [],
    randomSet: [],
    quizStatus: 'empty',
    qindex: 0
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
    },
    setStatus(state, status){
      state.quizStatus = status
    },
    setIndex(state, i){
      state.qindex = i
    }
  },
  actions: {
    async initializeCards({commit}){
      try {
        commit('setStatus', 'loading')
        const response = await Promise.all([
          fetch('./data/standard.json').then(r=>r.json()),
          fetch('./data/names-standard.json').then(r=>r.json())
        ]);
        commit('setCards', response[0])
        commit('setNames', response[1])
        commit('setStatus', 'loaded')
      } catch (err) {
        commit('setStatus', 'error')
        console.error(`Could not initialize. Error: ${err}`)
      }
    },
    makeRandom({commit, state}, {format, count=20}){
      commit('setStatus', 'calculating')
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
      commit('setStatus', 'ready')
    },
    clearRandom({commit}){
      commit('clearRandom')
      commit('setStatus', 'loaded')
    },
    incrementIndex({commit, state}){
      let ndx = state.qindex;
      if(ndx == state.randomSet.length - 1){
        ndx = -1
      } else {
        ndx++
      }
      commit('setIndex', ndx)
    },
    resetIndex({commit}){
      commit('setIndex', 0)
    }
  }
}
