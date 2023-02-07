import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reduces: {
    increase: () => {},
  }
});

export const counterReuducer = counterSlice.reducer;

export const {increase} = counterSlice.actions;
// increase()= {type: 'counter/increase'}

export const valueSelector = state => {
  return state.counter.value
}