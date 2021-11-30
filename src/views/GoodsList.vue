<template>
  <div class="wrapper">
    <Good v-for="item in goods" :key="item.id" :detail="item"/>
  </div>
</template>

<script>
import Good from '../components/Good.vue'
import {mapState} from 'vuex'
export default {
  components: { Good },
  computed: {
    ...mapState('goods', ["goods"])
  }
}
</script>

<style scoped>
.wrapper {
  width: 500px;
  margin: 0 auto;
  margin-top: 50px;
}
</style>
