<template>
  <div class="good-wrapper">
    <div class="good-name f1">{{detail.name}}</div>
    <div class="good-price f1">${{detail.price}}</div>
    <div class="good-got f1"><button class="btn" @click="addToCart(detail)">Add</button></div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  props: ['detail'],
  methods: {
    ...mapMutations('cart', ['addToCart'])
  }
}
</script>

<style scoped>
.good-wrapper {
  width: 100%;
  height: 100px;
  display: flex;
  border: 1px solid #000;
}
.good-wrapper .f1 {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.good-wrapper .btn {
  background-color: rgb(253, 74, 74);
  font-weight: bold;
  color: white;
  border: 1px solid #eee;
  width: 60px;
  height: 30px;
  border-radius: 3px;
}
</style>