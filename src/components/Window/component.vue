<style src="./style.scss" lang="scss" />

<script>
  import WindowSidebar from './Sidebar/component';
  import WindowSystemButtons from './SystemButtons/component';

  const windowMinHeight = 500;
  const windowMinWidth = 650;

  export default {
    name: 'Window',
    components: { WindowSystemButtons, WindowSidebar },
    data: () => ({
      zIndex: 0,
      windowStyle: {
        'min-width': `${ windowMinWidth }px`,
        'min-height': `${ windowMinHeight }px`,
      },
    }),
    methods: {
      onFocused() {
        this.zIndex = 999;
      },
      onFocusLost() {
        this.zIndex = 0;
      },
    },
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
    :z="zIndex"
    @activated="onFocused"
    @deactivated="onFocusLost"
  >
    <div
      class="window"
      :style="windowStyle"
    >
      <WindowSystemButtons />
      <WindowSidebar />
      <div class="window--content" />
    </div>
  </vue-draggable-resizable>
</template>

