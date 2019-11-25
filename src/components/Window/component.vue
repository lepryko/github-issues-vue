<style src="./style.scss" lang="scss" />

<script>
  const windowMinHeight = 500;
  const windowMinWidth = 650;

  const data = {
    windowStyle: {
      'min-width': `${ windowMinWidth }px`,
      'min-height': `${ windowMinHeight }px`,
    },
  };

  export default {
    name: 'Window',
    data: () => data,
    computed: {
      getX: () => (window.innerWidth - windowMinWidth) / 2,
      getY: () => (window.innerHeight - windowMinHeight) / 2,
    },
  };
</script>

<template>
  <vue-draggable-resizable
    :resizable="false"
    :x="getX"
    :y="getY"
  >
    <div
      class="window"
      :style="windowStyle"
    >
      <div class="window--system_buttons" />
      <div class="window--sidebar" />
      <div class="window--content" />
    </div>
  </vue-draggable-resizable>
</template>

