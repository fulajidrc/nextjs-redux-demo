import {LOGIN_STATUS, SET_AUTH_USER, SET_AUTH_TOKEN, SET_AUTH_ERROR} from './auth.type'

const initialState = {
    isLogin: false,
    authUser:null,
    loginToken:null,
    authError:''
}

export default function(state = initialState, action){

    switch(action.type){
        case LOGIN_STATUS:
            return {
                ...state,
                isLogin:action.payload,
            }
        case SET_AUTH_USER:
            return {
                ...state,
                authUser:action.payload,
            }
        case SET_AUTH_TOKEN:
            return {
                ...state,
                loginToken: action.payload
            }
        case SET_AUTH_ERROR:
            return {
                ...state,
                authError: action.payload
            }
        default: return state
    }

}