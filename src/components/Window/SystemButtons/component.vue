<style src="./style.scss" lang="scss" />

<script>
  import SystemButton from './Button/component';

  export default {
    name: 'WindowSystemButtons',
    components: { SystemButton },
  };
</script>

<template>
  <div class="window--system_buttons">
    <SystemButton :is-close-button="true" />
    <SystemButton :is-minimize-button="true" />
    <SystemButton :is-maximize-button="true" />
  </div>
</template>
