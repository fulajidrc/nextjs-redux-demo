import {LOGIN_STATUS, SET_AUTH_ERROR, SET_AUTH_TOKEN, SET_AUTH_USER} from './auth.type'
import axios from 'axios'
import { store } from '../store'    
export const loginAction = ({email, password}) => async dispatch => {
    try{
        const res = await axios.post(`https://fakestoreapi.com/auth/login`, {
            username: email,
            password: password
        })
        if(res.status == 200){
            dispatch({
                type: LOGIN_STATUS,
                payload: true,
            });
            dispatch({
                type: SET_AUTH_TOKEN,
                payload: res.data.token,
            });
            dispatch(getUserData(email));
            //push('/');
        }else{
            dispatch( {
                type: SET_AUTH_ERROR,
                payload: "Please enter valid username or password!",
            })
        }
    } catch(error){
        console.log(error);
        dispatch( {
            type: SET_AUTH_ERROR,
            payload: "Please enter valid username or password!",
        })
    }

}

export const getUserData = (username) => async dispatch => {
    try{
        const res = await axios.get(`https://fakestoreapi.com/users`)
        if(res.status == 200){
            const users = res.data
            const arrUsers = users.filter(user => user.username == username)
            const user = arrUsers.length > 0 ? arrUsers[0] : null
            if(user){
                dispatch({
                    type: SET_AUTH_USER,
                    payload: user,
                });
            }
        }
    } catch(error){
        console.log(error);
        // dispatch( {
        //     type: BLOGS_ERROR,
        //     payload: error,
        // })
    }
}   

export const logoutAction = () => async dispatch => {
    dispatch({
        type: LOGIN_STATUS,
        payload: false,
    });
    dispatch({
        type: SET_AUTH_TOKEN,
        payload: null,
    });
    dispatch({
        type: SET_AUTH_USER,
        payload: null,
    });
}