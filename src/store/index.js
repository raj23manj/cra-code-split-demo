//import { configureStore } from '@reduxjs/toolkit';
import { createStore, combineReducers } from 'redux'
import counterReducer from './counter';
import setupInterceptors from './../utils/interceptors';

const staticReducers = {
  counter: counterReducer
};
// const store = configureStore({
//   reducer: rootReducers()
// });

// const reducer = combineReducers(rootReducers());

// const store = createStore(reducer);

// export default store;
// https://redux-toolkit.js.org/api/createSlice#extrareducers


// Configure the store
export default function configureStore() {
  const store = createStore(createReducer())
  setupInterceptors(store);
  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {}

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer
    store.replaceReducer(createReducer(store.asyncReducers))
  }

  // Return the modified store
  return store
}

function createReducer(asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers
  })
}
