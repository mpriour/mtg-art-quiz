<template>
  <div>
    <card :card="currentCard"></card>
    <names :nset="nameSet"></names>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Card from './Card.vue'
import Names from './Names.vue'
export default {
  name: 'Quiz',
  components: {
    Card, Names
  },
  data(){
    return {
      ndx: 0
    }
  },
  computed: {
    ...mapState(['randomSet', 'names']),
      nameSet(){
        const rnames = []
        const ndxs = new Set()
        if(this.currentCard?.name){
          while(ndxs.size<3){
            ndxs.add(Math.floor(Math.random()*this.names.length))
          }
          ndxs.forEach(i => { rnames.push(this.names[i]) })
          rnames.splice(Math.floor(Math.random()*4), 0, this.currentCard.name)
        }
        return rnames
      },
      currentCard(){
        return this.ndx == -1 ? {} : this.randomSet[this.ndx]
      }
  },
  methods:{
    checkCorrect(name){
      return name == this.currentCard.name
    },
    getCorrectIndex(){
      let i = -1
      this.nameSet.some((n, x) => {
        if(this.checkCorrect(n)){
          i = x
          return true
        }
      })
      return i
    },
    nextCard(){
      if(this.ndx == this.randomSet.length-1){
        this.ndx = -1
      } else {
        this.ndx++
      }
      this.$emit('update', this.ndx)
    }
  },
  provide(){
    return {
      checkCorrect: this.checkCorrect,
      getCorrectIndex: this.getCorrectIndex,
      nextCard: this.nextCard
    }
  }
}
</script>

<style>

</style>
