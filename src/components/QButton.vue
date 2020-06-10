<template>
  <div>
    <router-link v-if="link" :to="link" tag="button"><slot></slot></router-link>
    <button v-else><slot></slot></button>
    <span class="aside"><slot name="aside"></slot></span>
  </div>
</template>

<script>
export default {
  props:{
    link: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.strikethrough button{
  text-decoration: line-through red solid;
}
.aside {
  display: block;
  font-style: italic;
  font-weight: 600;
}
button {
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
</style>
