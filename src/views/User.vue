<template>
  <div class="user">
    <h1>User Profile</h1>
    <h3>{{username}}</h3>
    <div class="scores container">
      <div>
        <p>High Score</p>
        <p class="highlight">{{highScore}}</p>
      </div>
      <div>
        <p>Last Score</p>
        <p class="highlight">{{lastScore}}</p>
      </div>
    </div>
    <div class="buttons container">
      <q-button @click.native="clearScores">Clear Scores</q-button>
      <q-button link="/">Home</q-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import QButton from "../components/QButton.vue";
export default {
  name: "User",
  components: { QButton },
  computed: {
    ...mapState("u", ["highScore", "lastScore", "username"])
  },
  methods: {
    ...mapActions("u", ["clearLastScore", "clearHighScore"]),
    clearScores() {
      this.clearLastScore();
      this.clearHighScore();
    }
  }
};
</script>

<style lang="scss" scoped>
$breakpoint-tablet: 768px;
h3,
p {
  font-size: x-large;
}
p {
  margin: 2px 0;
}
.container {
  display: flex;
  margin: 1rem auto;
  max-width: 95vw;
  text-align: center;
}
.container > div {
  margin: 0 1rem;
  text-align: center;
}
.highlight {
  color: goldenrod;
}
@media (min-width: $breakpoint-tablet) {
  .container {
    max-width: 50vw;
  }
  .container > div {
    margin: 0 2.25rem;
  }
}
</style>
