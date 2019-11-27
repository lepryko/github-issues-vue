<style src="./style.scss" lang="scss" />

<script>
  import { mapState } from 'vuex';
  import SidebarFilter from './Filter/component';

  export default {
    name: 'WindowSidebar',
    components: { SidebarFilter },
    computed: {
      ...mapState(['availableFilters']),
    },
  };
</script>

<template>
  <div class="window--sidebar">
    <SidebarFilter
      v-for="filter in availableFilters"
      :key="filter"
      :filter="filter"
    />
  </div>
</template>
