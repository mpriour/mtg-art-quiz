<template>
  <div>
    <scores></scores>
    <div class="status"><slot></slot></div>
    <quiz></quiz>
  </div>
</template>

<script>
import Scores from "./Scores.vue";
import Quiz from "./Quiz.vue";
export default {
  name: 'QuizActive',
  components: {Scores, Quiz}
};
</script>

<style lang="scss" scoped>
</style>
