<template>
  <div class="world">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'world',
    data () {
      return {
        msg: '欢迎使用VUE组件'
      }
    }
  }
</script>

<style media="screen" scoped>
  h1 {
    font-size: 50px;
    color: rgba(235, 66, 19, 0.62);
  }
</style>
