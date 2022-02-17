import axios from 'axios'
axios.defaults.withCredentials = true;

export default() => {
    return axios.create({
        baseURL: `https://api.github.com/`,
        withCredentials: false,
        headers: {            
            'Accept': 'application/json',
            'Content-Type': 'application/json',                  
        },
        mode: "cors"
    })
}