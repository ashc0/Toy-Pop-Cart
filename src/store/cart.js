let state = {
  cartGoods: []
}

let mutations = {
  addToCart(state, payload) {
    let target = state.cartGoods.find(good => good.id === payload.id)
    if (target) target.count++
    else state.cartGoods.unshift({
      ...payload,
      count: 1,
      checked: true
    })
  },

  selectItem(state, id) {
    let target = state.cartGoods.find(good => good.id === id)
    target.checked = !target.checked
  },

  addCount(state, id) {
    let target = state.cartGoods.find(good => good.id === id)
    target.count++
  },

  decreaseCount(state, id) {
    let target = state.cartGoods.find(good => good.id === id)
    if (target.count === 1) {
      let idx = state.cartGoods.findIndex(good => good.id === id)
      state.cartGoods.splice(idx, 1)
    } else {
      target.count--
    }
  },

  selectAll(state) {
    state.cartGoods.forEach(good => {
      good.checked = true
    })
  },

  reverseElection(state) {
    state.cartGoods.forEach(good => {
      good.checked = !good.checked
    })
  }
}

let getters = {
  totalPrice(state) {
    let tp = 0
    state.cartGoods.forEach(good => {
      tp += good.checked * good.count * good.price
    })
    return tp
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters
}