import {GET_BLOGS, BLOGS_ERROR, GET_ONE_BLOGS} from './blog.type'
import axios from 'axios'
import { store } from '../store'
export const getBlogs = () => async dispatch => {
    
    try{
        const {blogs} = store.getState().blogStore
        if(blogs.length == 0){
            const res = await axios.get(`https://fakestoreapi.com/products`)
            dispatch( {
                type: GET_BLOGS,
                payload: res.data
            })
        }
    }
    catch(error){
        dispatch( {
            type: BLOGS_ERROR,
            payload: error,
        })
    }

}

export const getOneBlogs = (id) => async dispatch => {
    
    try{
        if(id){
            const {blogs, blog} = store.getState().blogStore
            if(blogs.length == 0){
                const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
                dispatch( {
                    type: GET_ONE_BLOGS,
                    payload: res.data
                })
            }else{
                const getBlogs = blogs.filter(blog => blog.id == id);
                dispatch( {
                    type: GET_ONE_BLOGS,
                    payload: getBlogs[0]
                })
            }
        }
    }
    catch(error){
        dispatch( {
            type: BLOGS_ERROR,
            payload: error,
        })
    }

}