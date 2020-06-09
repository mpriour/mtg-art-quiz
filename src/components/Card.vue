<template>
  <img
    :src="artSrc"
    alt=""
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
    ...mapState(["quizStatus"]),
    artSrc(){
      return this.card?.imageLinks?.art_crop ?? ''
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
</style>
