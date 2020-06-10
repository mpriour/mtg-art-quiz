import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [],
    names: [],
    randomSet: [],
    username: '',
    lastScore: 0,
    highScore: 0,
    currentScore: 0,
    quizStatus: 'empty'
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
    setUser(state, name){
      state.username = name
    },
    setLastScore(state, score){
      state.lastScore = score
    },
    setCurrentScore(state, score){
      state.currentScore = score
    },
    setHighScore(state, score){
      state.highScore = score
    },
    setStatus(state, status){
      state.quizStatus = status
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
    initializeUser({commit}){
      const user = localStorage.getItem('quiz_username')
      if(user){
        commit('setUser', user)
        commit('setLastScore', localStorage.getItem('quiz_lastscore') ?? 0)
        commit('setHighScore', localStorage.getItem('quiz_highscore') ?? 0)
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
    saveUsername({commit}, {name}){
      commit('setUser', name)
      localStorage.setItem('quiz_username', name)
    },
    saveLastScore({commit}, {score}){
      commit('setLastScore', score)
      localStorage.setItem('quiz_lastscore', score)
    },
    saveCurrentScore({commit}, {score}){
      commit('setCurrentScore', score)
    },
    saveHighScore({commit, state}, {score}){
      if(state.highScore <= score){
        commit('setHighScore', score)
        localStorage.setItem('quiz_highscore', score)
      }
    },
    addCurrentScore({commit, state}, {points}){
      commit('setCurrentScore', state.currentScore + points)
    },
    clearCurrentScore({commit}){
      commit('setCurrentScore', 0)
    },
    clearLastScore({commit}){
      commit('setLastScore', 0)
      localStorage.setItem('quiz_lastscore', 0)
    },
    clearHighScore({commit}){
      commit('setHighScore', 0)
      localStorage.setItem('quiz_highscore', 0)
    },
  },
  modules: {
  }
})
