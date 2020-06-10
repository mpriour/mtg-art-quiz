<template>
  <div>
    <router-link v-if="link" :to="link" tag="button"><slot></slot></router-link>
    <button v-else><slot></slot></button>
    <slot name="aside" class="aside"></slot>
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
</style>
