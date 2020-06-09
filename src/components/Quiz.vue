<template>
  <div>
    <ul>
      <li v-for="card in randomSet" :key="card.id">{{card.name}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Quiz',
  computed: {
    ...mapState(['randomSet', 'names'])
  }
}
</script>

<style>

</style>
