import axios from 'axios';


const setAuthToken = token =>{
    if(token) {
      axios.defaults.headers.common['x-auth-tokne']= token 
    }else{
      delete axios.defaults.headers.common['x-auth-tokne']
    }
}

export default setAuthToken;