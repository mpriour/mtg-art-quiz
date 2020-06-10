export default {
  namespaced: true,
  state: {
    username: '',
    lastScore: 0,
    highScore: 0,
    currentScore: 0,
  },
  mutations: {
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
  },
  actions: {
    initializeUser({commit}){
      const user = localStorage.getItem('quiz_username')
      if(user){
        commit('setUser', user)
        commit('setLastScore', localStorage.getItem('quiz_lastscore') ?? 0)
        commit('setHighScore', localStorage.getItem('quiz_highscore') ?? 0)
      }
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
  }
}
