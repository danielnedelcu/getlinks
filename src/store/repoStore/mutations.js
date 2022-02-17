import { MUTATE_ADD_REPO, MUTATE_ADD_COMMIT, MUTATE_ADD_NAME, MUTATE_ADD_OWNER } from "../../constants/mutations.type";

const mutations = {

    /**
     * Adds repos array to state
     * 
     * @param {*} state 
     * @param {*} obj 
     */
    [MUTATE_ADD_REPO](state, obj) {    
        state.repos.splice(0, state.repos.length);
        state.repos = obj;
     },

    /**
     * Adds commit obj to state
     * 
     * @param {*} state 
     * @param {*} obj 
     */
    [MUTATE_ADD_COMMIT](state, obj) {  
        state.commits.splice(0, state.commits.length);  
        state.commits = obj;
     },

    /**
     * Adds repo owner to state
     * 
     * @param {*} state 
     * @param {*} str 
     */
    [MUTATE_ADD_OWNER](state, str) {    
        state.owner = str;
     },

    /**
     * Adds repo name to state
     * 
     * @param {*} state 
     * @param {*} str 
     */
    [MUTATE_ADD_NAME](state, str) {    
        state.repoName = str;
     }     
}

export default mutations;