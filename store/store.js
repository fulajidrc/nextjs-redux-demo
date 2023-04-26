import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

// initial states here
const initalState = {};

// middleware
const middleware = [thunk];
// creating store
export const store = createStore(
  persistedReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export const persistor = persistStore(store)
// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
