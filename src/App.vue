<style src="./style.scss" lang="scss"/>

<script>
  import Window from './components/Window/component';
  import store from './store';

  export default {
    name: 'App',
    store: store,
    components: { Window },
  };
</script>

<template>
  <div id="app">
    <img
      class="background-img"
      alt="Background image"
      src="./assets/background.jpg"
    >
    <Window />
  </div>
</template>
