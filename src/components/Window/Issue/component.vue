<style src="./style.scss" lang="scss" />

<script>
  import IconStar from '../../icons/IconStar/component';
  import { mapActions } from 'vuex';

  export default {
    name: 'Issue',
    components: { IconStar },
    props: {
      issue: {
        type: Object,
        required: true,
      },
    },
    methods: {
      ...mapActions(['changeIssueFavouriteStatus']),
      toggleFavouriteFlag() {
        this.changeIssueFavouriteStatus(this.issue.id);
      },
    },
  };
</script>

<template>
  <div class="issue">
    <span class="issue--title">{{ issue.title }}</span>
    <icon-star
      class="issue--favourite_star"
      :class="{'issue--favourite_star__selected': issue.favourite}"
      :on-click="toggleFavouriteFlag"
    />
  </div>
</template>
