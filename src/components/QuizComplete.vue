<template>
  <div>
    <div class="status">
      <slot></slot>
    </div>
    <scores :showLast="false"></scores>
    <q-button @click.native="playAgain">Play Again?</q-button>
  </div>
</template>

<script>
import Scores from "./Scores.vue";
import QButton from "./QButton.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "QuizComplete",
  components: { Scores, QButton },
  computed: {
    ...mapState(['currentScore', 'highScore'])
  },
  methods: {
    ...mapActions(["saveLastScore", "saveHighScore"]),
    playAgain() {
      this.$emit("restart");
    }
  },
  mounted() {
    this.saveLastScore({ score: this.currentScore });
    if (this.currentScore > this.highScore) {
      this.saveHighScore({ score: this.currentScore });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
