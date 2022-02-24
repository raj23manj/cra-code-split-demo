import { createSlice } from '@reduxjs/toolkit';
const initialCounterState = {counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++; // uses Immer internally, underneath it does {...state, counter: state.counter + 1}
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

export default counterSlice.reducer;

export const counterActions = counterSlice.actions;
