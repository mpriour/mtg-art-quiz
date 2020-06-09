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
      currentCard: null,
      ndx: 0
    }
  },
  computed: {
    ...mapState(['randomSet', 'names']),
      nameSet(){
        const rnames = []
        const ndxs = new Set()
        if(this.currentCard){
          while(ndxs.size<3){
            ndxs.add(Math.floor(Math.random()*this.names.length))
          }
          ndxs.forEach(i => { rnames.push(this.names[i]) })
          rnames.splice(Math.floor(Math.random()*3), 0, this.currentCard.name)
        }
        return rnames
      },
  },
  methods:{
    nextCard(){
      this.currentCard = this.randomSet[this.ndx]
      if(this.ndx++ >= this.randomSet.length){
        this.ndx = -1
      }
    },
  },
  mounted(){
    this.nextCard()
  }
}
</script>

<style>

</style>
