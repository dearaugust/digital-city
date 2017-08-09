<template>
  <div>
    <h1>Hello Vuex</h1>
    {{ $store.state.count }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      localCount: 100
    }
  },
  components: {
    Test
  },
  components: mapState({
    testCount: state => state.count,
    count: 'count',
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  }),
  methods: {
    add(){
      
    }
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
</style>
