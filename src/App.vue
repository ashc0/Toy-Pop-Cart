<template>
  <div id="app">
    <span id="nav">
      <router-link to="/">GoodsList</router-link> |
      <router-link to="/cart">Cart</router-link>
    </span>
    <keep-alive>
      <router-view />
    </keep-alive>
    
  </div>
</template>

<style>
#app {
  text-align: center;
  margin-top: 20px;
}
#nav {
  font-size: 20px;
}
</style>
