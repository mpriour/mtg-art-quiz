<template>
  <img
    :src="card.imageLinks.art_crop"
    alt
    class="art"
    :class="{loaded: imgLoaded}"
    @load="setLoaded"
  />
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
    ...mapState(["quizStatus"])
  },
  methods: {
    setLoaded() {
      this.imgLoaded = true;
    }
  }
};
</script>

<style>
</style>
