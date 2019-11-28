<style src="./style.scss" lang="scss" />

<script>
  import Issue from '../Issue/component';
  import moment from 'moment';

  export default {
    name: 'GroupedIssues',
    components: { Issue },
    props: {
      date: {
        type: String,
        required: true,
      },
      issues: {
        type: Array,
        required: true,
      },
    },
    computed: {
      formattedDate() {
        return moment(this.date).format('DD-MM-YYYY');
      },
    },
  };
</script>

<template>
  <article class="grouped_issues">
    <span class="grouped_issues--title"> {{ formattedDate }} </span>
    <Issue
      v-for="issue in issues"
      :key="issue.title"
      :issue="issue"
    />
  </article>
</template>
