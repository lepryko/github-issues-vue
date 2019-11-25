<style src="./style.scss" lang="scss"/>

<script>
  export default {
    name: 'Window',
  };
</script>

<template>
  <vue-draggable-resizable :resizable="false">
    <div class="window">
      <div class="window--system_buttons"/>
      <div class="window--navbar"/>
      <div class="window--content"/>
    </div>
  </vue-draggable-resizable>
</template>

