<template>
  <div class="quiz-container">
    <quiz-loading :error="error" v-if="!this.ready || this.error"></quiz-loading>
    <div v-else>
      <scores></scores>
      <quiz></quiz>
    </div>
  </div>
</template>

<script>
import QuizLoading from './QuizLoading.vue'
import Quiz from './Quiz.vue'
import Scores from './Scores.vue'
import { mapState } from 'vuex'
export default {
  name: 'QuizContainer',
  components: {
    Quiz, QuizLoading, Scores
  },
  props: {
    format: {
      type: String,
      default: 'modern'
    }
  },
  computed: {
    ...mapState(['quizStatus']),
    ready(){
      return this.quizStatus == 'ready'
    },
    error(){
      return this.quizStatus == 'error'
    }
  },
  mounted(){
    this.$store.dispatch('makeRandom', { format: this.format })
  }
}
</script>

<style lang="scss" scoped>

</style>
