import { combineReducers } from 'redux'
import userReducer from './userReducer'
import blogReducer from '../blog/blog.reducer'

export default combineReducers({
  usersList: userReducer,
  blogStore:blogReducer
})