<template>
  <ul>
    <li v-for="(name,i) in nset" :key="`name-${i}`">
      <button>{{name}}</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Names',
  props: {
    nset:{
      type: Array,
      default: ()=>[]
    }
  }
}
</script>
