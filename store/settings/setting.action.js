import {SITE_MODE_CHANGE} from './setting.type'
// import axios from 'axios'
export const setThemeMode = (status) => async dispatch => {
    dispatch( {
        type: SITE_MODE_CHANGE,
        payload: status
    })
}