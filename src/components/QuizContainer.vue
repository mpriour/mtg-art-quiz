<template>
  <div class="quiz-container">
    <quiz-loading v-if="!ready || error" :error="error"></quiz-loading>
    <div v-if="current===0">
      <div class="status">Quiz Complete</div>
      <scores :showLast="false"></scores>
      <q-button @click.native="playAgain">Play Again?</q-button>
    </div>
    <div v-else>
      <scores></scores>
      <div class="status">{{current}} of {{total}}</div>
      <quiz @update="incrementQuiz" ref="quiz"></quiz>
    </div>
  </div>
</template>

<script>
import QuizLoading from "./QuizLoading.vue";
import Quiz from "./Quiz.vue";
import Scores from "./Scores.vue";
import QButton from "./QButton.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "QuizContainer",
  components: {
    Quiz,
    QuizLoading,
    Scores,
    QButton
  },
  props: {
    format: {
      type: String,
      default: "modern"
    },
    total: {
      type: Number,
      default: 10
    }
  },
  data(){
    return {
      current: 1
    }
  },
  computed: {
    ...mapState(["quizStatus","highScore","currentScore"]),
    ready() {
      return this.quizStatus == "ready";
    },
    error() {
      return this.quizStatus == "error";
    }
  },
  methods: {
    ...mapActions(['makeRandom','saveLastScore','saveHighScore','clearCurrentScore']),
    newGame() {
      this.makeRandom({
        format: this.format,
        count: this.total
      });
      this.$refs.quiz.ndx = 0
    },
    playAgain() {
      this.current = 1
      this.clearCurrentScore()
      setTimeout(()=>this.newGame(), 0)
    },
    incrementQuiz(ndx) {
      this.current = ndx + 1
    }
  },
  mounted() {
    this.newGame();
  },
  watch:{
    current(val){
      if(val === 0){
        this.saveLastScore({score: this.currentScore})
        if(this.currentScore > this.highScore){
          this.saveHighScore({score: this.currentScore})
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
