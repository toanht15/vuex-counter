<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="counter">
      {{ $store.state.counter }}
    </div>
    <div class="counter-squared">
      {{ $store.state.counter }}
      <sup>2</sup> =
      {{ $store.getters.counterSquared }}
    </div>
    <div class="buttons">
      <button @click="$store.dispatch('decreaseCounter')">-</button>
      <button @click="$store.dispatch('increaseCounter')">+</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
}


</script>

<style>
  .counter {
    font-size: 100px;
  }

  .buttons button {
    font-size: 50px;
    width: 120px;
    margin: 0 10px;
  }

  .counter-squared {
    font-size: 40px;
    margin-bottom: 20px;
  }
</style>