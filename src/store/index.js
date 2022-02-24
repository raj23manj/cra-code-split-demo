import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';

const rootReducers = () => {
  return {
    counter: counterReducer
  }
}

const store = configureStore({
  reducer: rootReducers()
});

export default store;
// https://redux-toolkit.js.org/api/createSlice#extrareducers
