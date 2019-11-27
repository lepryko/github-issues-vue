<style src="./style.scss" lang="scss" />

<script>
  import IconAllIssues from '../../../icons/IconAllIssues/component';
  import IconClosedIssues from '../../../icons/IconClosedIssues/component';
  import IconOpenIssues from '../../../icons/IconOpenIssues/component';
  import { mapMutations } from 'vuex';

  export default {
    name: 'SidebarFilter',
    components: { IconOpenIssues, IconClosedIssues, IconAllIssues },
    props: {
      filter: {
        type: String,
        required: true,
      },
    },
    methods: {
      ...mapMutations(['selectFilter']),
    },
    computed: {
      isFilterSelected() {
        return this.$store.state.selectedStatusFilter === this.filter;
      },
      issuesCount() {
        return this.$store.getters.getStatusFilterIssuesCount(this.filter);
      },
      iconName() {
        return `icon-${ this.filter }-issues`;
      },
    },
  };
</script>

<template>
  <div
    class="sidebar--filter"
    :class="{'sidebar--filter__selected': isFilterSelected}"
    @click="selectFilter(filter) "
  >
    <div class="sidebar--filter_name">
      <component :is="iconName" />
      {{ filter }}
    </div>
    <div class="sidebar--filter_counter">
      {{ issuesCount }}
    </div>
  </div>
</template>
