<template>
  <div id="app">
    <p>点击次数：{{$store.state.count}}，奇偶性：{{evenOrOdd}}</p>
    <button @click="add">+</button>
    <button @click="reduce">-</button>
    <button @click="addIfOdd">奇数才加</button>
    <button @click="addAsync">延时1s加</button>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    computed:{
      ...mapGetters([
        'evenOrOdd'
      ])
    },
    methods:{
      ...mapActions([
        'add',
        'reduce',
        'addIfOdd',
        'addAsync'
      ])
    }
  }
</script>