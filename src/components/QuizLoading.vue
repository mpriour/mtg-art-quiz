<template>
  <div>
    <div v-if="error">
      <h2 class="error">Error Loading Quiz</h2>
      <router-link to="/">&laquo; Back to Home</router-link>
    </div>
    <div v-else>
      <h2>Please Wait...</h2>
      <h3>Loading your quiz</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
