<template>
  <div class="hello">
    <h1>Welcome to the<br><i>Magic : The Gathering</i><br>Art Quiz</h1>
    <label>Username<br><input :value="user" @blur="setUser" /></label>
    <div class="button-container">
      <q-button link="/standard">Standard</q-button>
      <q-button link="/pioneer" class="strikethrough" disabled>
        Pioneer
        <template slot="aside">Coming Soon</template>
      </q-button>
      <q-button link="/modern" class="strikethrough" disabled>
        Modern
        <template slot="aside">Coming Later</template>
      </q-button>
      <q-button link="/pauper" class="strikethrough" disabled>
        Pauper
        <template slot="aside">To Be Done</template>
      </q-button>
    </div>
  </div>
</template>

<script>
import QButton from './QButton'
import {mapState} from 'vuex'
export default {
  name: "Welcome",
  components: {
    QButton
  },
  computed: mapState({
    user: state => state.username
  }),
  methods: {
    setUser(evt){
      this.$store.dispatch('saveUsername', {name: evt.target.value})
    }
  },
  mounted(){
    this.$store.dispatch('initializeUser')
    this.$store.dispatch('initializeCards')
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  margin: 60px 0;
  font-size: 3rem;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.button-container {
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  max-width: 700px;
  text-align: center;
  margin: 2rem auto;
}
label {
  font-size:1.75rem;
}
input {
  font-size: 1.75rem;
  border-radius: 5px;
  border: 1px solid goldenrod;
  text-align: center;
}
</style>
