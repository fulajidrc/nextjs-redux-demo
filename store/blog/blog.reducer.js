import {GET_BLOGS, BLOGS_ERROR, GET_ONE_BLOGS} from './blog.type'

const initialState = {
    blogs:[],
    loading:true,
    blog: null
}

export default function(state = initialState, action){

    switch(action.type){
        case GET_ONE_BLOGS:
            return {
                ...state,
                blog:action.payload,
                loading:false
    
            }
        case GET_BLOGS:
        return {
            ...state,
            blogs:action.payload,
            loading:false

        }
        case BLOGS_ERROR:
            return{
                loading: false, 
                error: action.payload 
            }
        default: return state
    }

}