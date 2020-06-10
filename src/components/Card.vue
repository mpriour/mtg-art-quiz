<template>
  <div class="card">
    <img
      :src="artSrc"
      alt
      class="art"
      :class="{loaded: imgLoaded}"
      @load="setLoaded(true)"
      @error="setLoaded(false)"
    />
    <img src="../assets/mtg-colors.png" alt class="loader" :class="{loaded: imgLoaded}" />
  </div>
</template>

<script>
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
    artSrc() {
      return this.card?.imageLinks?.art_crop ?? "";
    }
  },
  methods: {
    setLoaded(status) {
      this.imgLoaded = status;
    }
  },
  watch: {
    card() {
      this.imgLoaded = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.art {
  display: none;
}
.art.loaded {
  display: initial;
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

.card {
  max-height: 50vh;
  img {
    width: auto;
    height: auto;
    object-fit: scale-down;
  }
}
</style>
