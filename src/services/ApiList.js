import Api from './Api'

/**
 * API abstraction for the tvshow service
 */
export default {
    /**
     * Fetch TV show data
     * 
     * @type GET
     * @param {String} params 
     */
    getRepo(substr) {
        return Api().get(`orgs/${substr}/repos`); 
    },

    getCommit(substr) {
        return Api().get(`repos/${substr}/commits`); 
    }
}