<style src="./style.scss" lang="scss"/>

<script>
  import Window from './components/Window/component';

  export default {
    name: 'App',
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
    <Window/>
  </div>
</template>
