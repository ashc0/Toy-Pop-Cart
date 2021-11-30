<template>
  <div class="good-wrapper">
    <div class="good-name f1 center">{{ good.name }}</div>
    <div class="good-price f1 center">${{ good.price }}</div>
    <div class="good-opt f1">
      <div class="opt-item ctrl-count">
        <span @click="decreaseCount(good.id)"> - </span>
        {{good.count}}
        <span @click="addCount(good.id)"> + </span>
        </div>
      <div class="opt-item" :style="{'background-color': good.checked ? 'blue' : 'white'}" @click="selectItem(good.id)"></div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["good"],
  methods: {
    ...mapMutations("cart", ["addToCart", "selectItem", "addCount", "decreaseCount"]),
  },
};
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
}
.center {
  justify-content: center;
  align-items: center;
}
.good-wrapper .good-opt.f1 {
  flex-wrap: wrap;
  align-content: space-around;
}
.good-wrapper .good-opt .ctrl-count{
  display: flex;
  justify-content: space-around;
}
.good-wrapper .good-opt .opt-item {
  width: 100%;
  height: 20px;
  border: 1px solid #000;
}
</style>