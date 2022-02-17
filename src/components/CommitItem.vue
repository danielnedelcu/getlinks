<template>
  <div>
    <div class="commit-item">
      <span class="commit-item-field">Title: {{ data.commit.message }}</span>
      <span class="commit-item-field">username: {{ data.commit.author.name }}</span>
      <span class="commit-item-field">Hash: {{ data.sha }}</span>
      <span class="commit-item-field">Date Created: {{ formattedDate }}</span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { GETTER_GET_COMMIT }  from "../constants/getters.type";

export default {
  name: ' CommitItem',
  props : {
      data : { type : Object, required : true }
  },

  computed: {
      ...mapGetters ({
          commitData : 'repoStore/' + GETTER_GET_COMMIT
      }),

      formattedDate () {
        return new Date(this.data.commit.committer.date).toDateString()
      }
  }
}
</script>

<style scoped>
  .card {
    background-color: #2b2b2b;
    padding: 20px 20px;
    margin: 3px 0;
    width: 100%;
    color: white;
  }

  .commit-item {
    display: flex;
    flex-flow: column;
    flex-wrap: wrap;
    text-align: left;
    cursor: pointer;
  }
</style>