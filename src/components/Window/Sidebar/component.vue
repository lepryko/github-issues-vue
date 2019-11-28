<style src="./style.scss" lang="scss" />

<script>
  import { mapState } from 'vuex';
  import SidebarFilter from './Filter/component';

  export default {
    name: 'WindowSidebar',
    components: { SidebarFilter },
    computed: {
      ...mapState(['availableStatusFilters']),
    },
  };
</script>

<template>
  <div class="window__sidebar">
    <SidebarFilter
      v-for="filter in availableStatusFilters"
      :key="filter"
      :filter="filter"
    />
  </div>
</template>
