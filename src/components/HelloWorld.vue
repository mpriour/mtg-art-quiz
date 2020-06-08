<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <q-button>Standard</q-button>
    <q-button class="strikethrough">
      Pioneer
      <template slot="aside">Coming Soon</template>
    </q-button>
    <q-button class="strikethrough">
      Modern
      <template slot="aside">Coming Soon</template>
    </q-button>
    <q-button class="strikethrough">
      Pauper
      <template slot="aside">Coming Soon</template>
    </q-button>
  </div>
</template>

<script>
import QButton from "./QButton";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    QButton
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
