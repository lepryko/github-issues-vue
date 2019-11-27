<style src="./style.scss" lang="scss" />

<script>
  import IconAllIssues from '../../../icons/IconAllIssues/component';
  import IconClosedIssues from '../../../icons/IconClosedIssues/component';
  import IconOpenIssues from '../../../icons/IconOpenIssues/component';

  export default {
    name: 'SidebarFilter',
    components: { IconOpenIssues, IconClosedIssues, IconAllIssues },
    props: {
      filter: {
        type: String,
        required: true,
      },
    },
    computed: {
      iconName() {
        return `icon-${this.filter}-issues`
      },
    },
  };
</script>

<template>
  <div class="sidebar--filter">
    <div class="sidebar--filter_name">
      <component :is="iconName" />
      {{ filter }}
    </div>
    <div class="sidebar--filter_counter">
      2
    </div>
  </div>
</template>
