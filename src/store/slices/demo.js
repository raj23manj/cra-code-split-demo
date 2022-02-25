import { createSlice } from '@reduxjs/toolkit';
const initialDemoState = {demoCounter: 123, demoStatus: "yipee", some: ['{a: 2, b: 3}'] };

const demoSlice = createSlice({
  name: 'demo',
  initialState: initialDemoState,
  reducers: {
    dincrement(state) {
      state.demoCounter = 2323; // uses Immer internally, underneath it does {...state, counter: state.counter + 1}
    },
    ddecrement(state) {
      state.counter--;
    },
    dincrease(state, action) {
      state.counter = state.counter + action.payload;
    },
    dtoggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

export default demoSlice.reducer;

export const demoActions = demoSlice.actions;
