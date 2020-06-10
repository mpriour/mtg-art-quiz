<template>
  <div>
    <h2>Scores</h2>
    <h3>Current Score : {{currentScore}}</h3>
    <p v-if="showLast">Last Score : {{lastScore}}</p>
    <p>High Score : {{highScore}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Scores',
  props: {
    showLast: { type: Boolean, default: true }
  },
  computed: {
    ...mapState('u',['lastScore','highScore','currentScore'])
  }
}
</script>

<style lang="scss" scoped>

</style>
