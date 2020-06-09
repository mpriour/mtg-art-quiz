<template>
  <div class="hello">
    <h1>Welcome to the MTG Art Quiz</h1>
    <label>Username : <input :value="user" @blur="setUser" /></label>
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
</style>
