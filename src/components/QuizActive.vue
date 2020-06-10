<template>
  <div>
    <scores></scores>
    <div class="status">{{current}} of {{total}}</div>
    <quiz @update="incrementQuiz" ref="quiz"></quiz>
  </div>
</template>

<script>
export default {
  name: 'QuizActive',
  props: {
    total: {type: Number, default: 10},
    format: {type: String, default: 'modern'}
  },
  data(){
    return {
      current: 1
    }
  },
  methods:{
    incrementQuiz(ndx) {
      this.current = ndx + 1
    },
    newGame() {
      this.$store.dispatch("makeRandom", {
        format: this.format,
        count: this.total
      });
      this.$refs.quiz.ndx = 0
    },
  },
  mounted(){
    this.newGame()
  }
};
</script>

<style lang="scss" scoped>
</style>
