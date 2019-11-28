<style src="./style.scss" lang="scss" />

<script>
  import { mapGetters } from 'vuex';
  import { groupBy, orderBy } from 'lodash';
  import GroupedIssues from '../GroupedIssues/component';

  export default {
    name: 'WindowContent',
    components: { GroupedIssues },
    computed: {
      ...mapGetters(['selectedIssues']),
      groupedIssues() {
        let sortedIssues = orderBy(this.selectedIssues, ['date', 'unix()'], ['desc']);
        return groupBy(sortedIssues, 'date');
      },
    },
  };
</script>

<template>
  <div class="window__content">
    <GroupedIssues
      v-for="(issues, date) in groupedIssues"
      :key="date"
      :date="date"
      :issues="issues"
    />
  </div>
</template>
