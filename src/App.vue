<template>
  <div id="app">
    <nav>
      <router-link to="/" class="left branding">
        <img src="./assets/mtg-colors.jpg" alt="The 5 color symbols of Magic the Gathering" />
      </router-link>
      <router-link to="/">Home</router-link>|
      <router-link to="/user">User</router-link>
    </nav>
    <router-view class="main-view" />
  </div>
</template>

<style lang="scss">
body {
  background-color: black;
  color: #bababa;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  .main-view {
    display: flex;
    flex-direction: column;
    margin: 60px auto 0 auto;
  }
  nav {
    padding: 5px;
    position: fixed;
    background-color: goldenrod;
    top: 0;
    left: -10px;
    width: 100vw;
    .left {
      float: left;
    }
    .branding {
      img {
        padding: 0 5px;
        width: 2rem;
        height: auto;
      }
    }
    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color:honeydew;
      }
    }
  }
}
</style>
