<template>
  <quiz-container :format="format"></quiz-container>
</template>

<script>
import QuizContainer from '../components/QuizContainer.vue'
export default {
  name: 'Quiz',
  components: {
    QuizContainer
  },
  props: {
    format: {
      default: 'modern',
      type: String
    }
  }
}
</script>
