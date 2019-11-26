<style src="./style.scss" lang="scss" />

<script>
  export default {
    name: 'SystemButton',
    props: {
      isCloseButton: {
        type: Boolean,
        required: false,
        default: false,
      },
      isMinimizeButton: {
        type: Boolean,
        required: false,
        default: false,
      },
      isMaximizeButton: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
    computed: {
      componentClass() {
        return {
          'system_button--close': this.isCloseButton,
          'system_button--minimize': this.isMinimizeButton,
          'system_button--maximize': this.isMaximizeButton,
        };
      },
    },
  };
</script>

<template>
  <div
    class="system_button"
    :class="componentClass"
  >
    <font-awesome-icon
      v-if="isCloseButton"
      :icon="['fas', 'times']"
    />
    <font-awesome-icon
      v-if="isMinimizeButton"
      :icon="['fas', 'window-minimize']"
    />
    <font-awesome-icon
      v-if="isMaximizeButton"
      :icon="['fas', 'expand-arrows-alt']"
    />
  </div>
</template>
