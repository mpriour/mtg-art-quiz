<template>
  <div class="card">
    <img :src="artSrc" alt="" class="art" :class="{loaded: imgLoaded}" @load="setLoaded" />
    <img src="../assets/mtg-colors.png" alt="" class="loader" :class="{loaded: imgLoaded}" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Card",
  props: {
    card: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      imgLoaded: false
    };
  },
  computed: {
    ...mapState(["quizStatus"]),
    artSrc() {
      return this.card?.imageLinks?.art_crop ?? "";
    }
  },
  methods: {
    setLoaded() {
      this.imgLoaded = true;
    }
  }
};
</script>

<style>
.art{
  visibility: hidden;
}
.art.loaded{
  visibility: visible;
}
.loader {
    animation: load-spin 1s linear infinite;
}
.loader.loaded {
  display: none;
}
@keyframes load-spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
