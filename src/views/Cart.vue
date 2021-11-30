<template>
  <div class="cart-wrapper">
    Total Price: {{totalPrice}}
    <div class="selectBtn" @click="selectAll">Select All</div>
    <div class="selectBtn" @click="reverseElection">Reverse</div>
    <CartItem v-for="item in cartGoods" :key="item.id" :good="item"/>
    
  </div>
</template>

<script>
import CartItem from "../components/CartItem.vue";
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  components: { CartItem },
  computed: {
    ...mapState("cart", ["cartGoods"]),
    ...mapGetters('cart', ['totalPrice'])
  },
  methods: {
    ...mapMutations('cart', ['selectAll', 'reverseElection'])
  }
};
</script>

<style scoped>
.cart-wrapper {
  width: 500px;
  margin: 0 auto;
  margin-top: 50px;
}
.cart-wrapper .selectBtn {
  display: inline-block;
  margin: 0 20px;
  margin-bottom: 20px;
  border: 1px solid #999;
  width: 100px;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
}
</style>
