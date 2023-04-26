import { combineReducers } from 'redux'
import userReducer from './userReducer'
import blogReducer from '../blog/blog.reducer'
import settingReducer from '../settings/setting.reducer'
import authReducer from '../auth/auth.reducer'

export default combineReducers({
  usersList: userReducer,
  blogStore:blogReducer,
  setting: settingReducer,
  auth:authReducer
})