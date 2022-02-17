<template>
  <div>
    <div>
      <h1>Search for repo</h1>
      <div class="input-container">
        <input v-on:keyup.enter="onSearch" type="text" v-model="search" placeholder="Search repo.."/>
        <button v-on:click="onSearch" type="button">Search</button>
      </div>
      <div v-if="sortedRepo.length" class="repo-container">
        <div class="repo-block col-50">
          <h2>Repos</h2>
          <repo-item v-for="(item,  index) in sortedRepo"
            :key="item.id" 
            :index="index"
            :data="item"
            class="card"
          />
        </div>
        <div class="commit-block col-50">
          <h2>Commits</h2>
          <commit-item v-for="(item, index) in getCommitList"
            :key="item.sha" 
            :index="index"
            :data="item"
            class="card"
          />
        </div>
      </div>
      <div v-else>
        <p v-if="!isFirstLoad">No repos meet the serch criteria</p>
      </div>
    </div>
  </div>
</template>

<script>
import {ASSIGN_REPO, ASSIGN_OWNER }  from "../constants/actions.type";
import { GETTER_GET_REPO, GETTER_GET_COMMIT }  from "../constants/getters.type";
import { mapActions, mapGetters } from 'vuex';
import RepoItem from '../components/RepoItem';
import CommitItem from '../components/CommitItem';

export default {
  name: 'repo',

  components : {
    'repo-item' : RepoItem,
    'commit-item' : CommitItem
  },    


  data () {
    return {
      search: '',
      isFirstLoad: true
    }
  },

  computed: {
      ...mapGetters ({
          showsList : 'repoStore/' + GETTER_GET_REPO,
          getCommitList : 'repoStore/' + GETTER_GET_COMMIT,
      }),

      sortedRepo() {
        var byStarCount = this.showsList.slice(0);

        return byStarCount.sort((a,b) => {
            let x = a.stargazers_count;
            let y = b.stargazers_count;

            return x > y ? -1 : x < y ? 1 : 0;            
        })
      }
  },              
  
  methods : {
      ...mapActions( {
          setRepo: 'repoStore/' + ASSIGN_REPO,
          setRepoOwner: 'repoStore/' + ASSIGN_OWNER,
      }), 


    onSearch () {
       this.setRepo(this.search);
       this.setRepoOwner(this.search);
       this.isFirstLoad = false;
       this.search = '';
    }      
  }
}
</script>

<style scoped>
    .col-50 {
      width: 50%;
    }

    .repo-container {
      display: flex;
      flex-flow: rows;
    }

    .repo-block {
      display: flex;
      flex-wrap: wrap;  
      justify-content: space-between;
      padding: 0 20px;
    }

    .commit-block {
      padding: 0 20px;
    }

    .full-width {
      width: 100%;
      display: flex;
      flex-wrap: wrap;  
      justify-content: space-between;
    }

    .input-container {
      padding: 50px 0;
    }

    input {
      border: 1px solid #c6c6c6;
      padding: 12px;
      width: 400px;
      margin-bottom: 18px;
      color: #888;
      font-size: 16px;
      font-weight: 300;
      margin-right: 10px;
    }

    input[type="text"]:focus {
      outline: none !important;
      border: 1px solid black;
    }

    button {
      border: 0;
      outline: 0;
      padding: 16px;
      border-radius: 5px;
      background-color: #ddd;
      -webkit-appearance: button;
      cursor: pointer;
      text-transform: uppercase;
    }
</style>