<style src="./style.scss" lang="scss" />

<script>
  import WindowSidebar from './Sidebar/component';
  import WindowSystemButtons from './SystemButtons/component';
  import WindowContent from './Content/component';

  const windowHeight = 500;
  const windowWidth = 650;

  export default {
    name: 'Window',
    components: { WindowContent, WindowSystemButtons, WindowSidebar },
    data: () => ({
      zIndex: 0,
      windowStyle: {
        'min-width': `${ windowWidth }px`,
        'width': `${ windowWidth }px`,
        'min-height': `${ windowHeight }px`,
        'height': `${ windowHeight }px`,
      },
    }),
    computed: {
      getX: () => (window.innerWidth - windowWidth) / 2,
      getY: () => (window.innerHeight - windowHeight) / 2,
    },
    methods: {
      onFocused() {
        this.zIndex = 999;
      },
      onFocusLost() {
        this.zIndex = 0;
      },
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
      <WindowContent />
    </div>
  </vue-draggable-resizable>
</template>

