<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="router">
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
      <router-view></router-view>
    </div>
    <hello></hello>
    <world></world>
  </div>
</template>

<script>
import Hello from './components/Hello'
import World from './components/World.vue'

export default {
  name: 'app',
  components: {
    Hello,
    World
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router div{
  font-size: 20px;
  color: orange;
  line-height:100px;
  border: 1px solid #ccc;
}
</style>
