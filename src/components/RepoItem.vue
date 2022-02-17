<template>
  <div>
    <div v-on:click="onRepClick" class="repo-item">
      <span class="repo-item-field">Repo Name: {{ data.name }}</span>
      <span class="repo-item-field">Language: {{ data.language }}</span>
      <span class="repo-item-field">Star Count: {{ data.stargazers_count }}</span>
      <span class="repo-item-field">Fork Count: {{ data.forks_count }}</span>
      <span class="repo-item-field">Date Created: {{ formattedDate }}</span>
      <span class="repo-item-field">Description: {{ data.description }}</span>
    </div>

  </div>
</template>

<script>
import { ASSIGN_COMMIT }  from "../constants/actions.type";
import { GETTER_GET_OWNER }  from "../constants/getters.type";
import  store from '../store/index'
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'RepoItem',
    store,
    props : {
        data : { type : Object, required : true }
    },

    data () {
      return {
        item: this.data,
        obj: {}
      }
    },
    
    computed: {
      ...mapGetters ({
          getRepoOwner : 'repoStore/' + GETTER_GET_OWNER
      }),

      formattedDate () {
        return new Date(this.data.created_at).toDateString()
      }
    },

    methods : {
      ...mapActions( {
          addCommit: 'repoStore/' + ASSIGN_COMMIT,
      }), 

      onRepClick () {
        // const date = new Date(this.data.created_at);
        // console.log(date.toDateString());
        this.addCommit(this.item.full_name);
      }      
    }
}
</script>

<style scoped>
  .card {
    background-color: #f0f0f0;
    padding: 20px 20px;
    margin: 3px 0;
    width: 100%;

  }

  .repo-item {
    display: flex;
    flex-flow: column;
    flex-wrap: wrap;
    text-align: left;
    cursor: pointer;
  }
</style>