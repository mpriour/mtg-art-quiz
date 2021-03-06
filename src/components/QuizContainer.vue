<template>
  <div class="quiz-container">
    <component :is="currentComponent" :error="error" @restart="newGame">{{statusMessage}}</component>
  </div>
</template>

<script>
import QuizLoading from "./QuizLoading.vue";
import QuizActive from "./QuizActive.vue";
import QuizComplete from "./QuizComplete.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "QuizContainer",
  components: {
    QuizActive,
    QuizLoading,
    QuizComplete
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
  computed: {
    ...mapState("q", ["quizStatus", "qindex", "randomSet"]),
    ...mapState("u", ["highScore", "currentScore"]),
    ready() {
      return this.quizStatus == "ready";
    },
    error() {
      return this.quizStatus == "error";
    },
    currentComponent() {
      if (!this.ready || this.error) {
        return QuizLoading;
      } else if (this.qindex === -1) {
        return QuizComplete;
      }
      return QuizActive;
    },
    statusMessage() {
      if (this.qindex === -1) {
        return "Quiz Complete";
      } else {
        return `${this.qindex + 1} of ${this.randomSet.length}`;
      }
    }
  },
  methods: {
    ...mapActions("q", ["makeRandom", "resetIndex", "clearRandom"]),
    ...mapActions("u", ["clearCurrentScore"]),
    newGame() {
      this.clearRandom();
      this.makeRandom({
        format: this.format,
        count: this.total
      });
    }
  },
  mounted() {
    this.clearCurrentScore();
    this.newGame();
  },
  watch: {
    randomSet() {
      this.resetIndex();
    }
  }
};
</script>

<style lang="scss" scoped>
$breakpoint-tablet: 768px;
.quiz-container {
  width: 95vw;
}
@media (min-width: $breakpoint-tablet) {
  .quiz-container {
    width: 60vw;
  }
}
</style>
