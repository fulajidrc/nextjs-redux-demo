import {SITE_MODE_CHANGE} from './setting.type'

const initialState = {
    darkMode: false
}

export default function(state = initialState, action){

    switch(action.type){
        case SITE_MODE_CHANGE:
            return {
                ...state,
                darkMode:action.payload,
            }
        
        default: return state
    }

}