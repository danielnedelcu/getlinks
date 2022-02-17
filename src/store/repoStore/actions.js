import { MUTATE_ADD_REPO, MUTATE_ADD_COMMIT, MUTATE_ADD_NAME, MUTATE_ADD_OWNER } from "../../constants/mutations.type";
import Services from '../../services/ApiList'


/**
* Assigns repo
 * 
 * @param {state} commit 
 * @param {Object} payload 
*/
export async function AssignRepo ({ commit }, payload) {
    try {
        let response = await Services.getRepo(payload);	      
        commit(MUTATE_ADD_REPO, response.data);
        commit(MUTATE_ADD_COMMIT, []);
    } catch (e) {
        console.log('Data fetch failure:', e)
    }    
}

/**
* Assigns commit
 * 
 * @param {state} commit 
 * @param {Object} payload 
*/
export async function AssignCommit ({ commit }, payload) {	  
    try {
        let response = await Services.getCommit(payload);	      
        commit(MUTATE_ADD_COMMIT, response.data);
    } catch (e) {
        console.log('Data fetch failure:', e)
    }        
}

/**
* Assigns owner name
 * 
 * @param {state} commit 
 * @param {Object} payload 
*/
export async function AssignRepoOwner({ commit }, payload) {	  
    commit(MUTATE_ADD_OWNER, payload);   
}

/**
* Assigns repo name
 * 
 * @param {state} commit 
 * @param {Object} payload 
*/
export async function AssignRepoName({ commit }, payload) {	  
    commit(MUTATE_ADD_NAME, payload);   
}