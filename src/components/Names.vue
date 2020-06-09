<template>
  <div class="name-container" :class="{complete: answered}">
    <button v-for="(name,i) in nset" :key="`name-${i}`" class="name" ref="nbuttons" @click="nameClick" :data-name="name">{{name}}</button>
  </div>
</template>

<script>
export default {
  name: 'Names',
  props: {
    nset: {
      type: Array,
      default: () => []
    }
  },
  data(){
    return {
      answered: false
    }
  },
  inject: ['checkCorrect', 'getCorrectIndex', 'nextCard'],
  methods: {
    nameClick(evt){
      const btn = evt.target
      const name = btn.dataset['name']
      this.answered = true
      if(this.checkCorrect(name)){
        btn.classList.add('correct')
      } else {
        const i = this.getCorrectIndex()
        this.$refs.nbuttons[i].classList.add('correct')
      }
      setTimeout(()=>{
        this.$refs.nbuttons.forEach(btn=>btn.classList.remove('correct'))
        this.answered = false
        this.nextCard()
      }, 1200)
    }
  }
};
</script>

<style lang="scss" scoped>
.name-container {
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  margin: auto;
  width: 700px;
  .name.correct {
    border-color: green;
    background-color: lightgreen;
    color: #333;
  }
}
.name {
  font-size: x-large;
  margin: 0.5rem 0;
  color: goldenrod;
  background-color: #333;
  border: 2px solid goldenrod;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: goldenrod;
    color: #333;
  }
}
.complete .name{
  border-color: red;
  background-color: palevioletred;
  color: #333;
}
</style>
