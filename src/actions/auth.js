import axios from "axios";
import {setAlert} from './alert'
import { REGISTER_SUCCESS, REGISTER_FAIL , USER_LOADED, AUTH_ERROR} from "./types";
import setAuthToken from '../utils/setAuthToken'

export const loadUser =() => async dispatch =>{
  if(localStorage.token){
    setAuthToken(localStorage.token)    
  }
  try{
    const res = await axios.get('/api/auth')
    dispatch({
      type: USER_LOADED,
      payload: res.data
    })
  }catch(e) {
    dispatch({
      type: AUTH_ERROR,
    })
  }
}


export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  const body = JSON.stringify({ name, email, password });
  try {
    const res = axios.post("/api/users", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: {token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'} //res.data
    });
  } catch (err) {
     const errors = err.responce.data.errors
     if(errors) {
       errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
     }
    dispatch({
      type: REGISTER_FAIL
    });
  }
};
