import { createSlice } from "@reduxjs/toolkit";

let CounterSlice = createSlice({
  name: "CounterSlice",
  initialState: {
    count: 0,
  },
  reducers: {
    inc(state) {
      state.count += 1;
    },
    dec() {},
    reset(state, action) {
      state.count = Number(action.payload);
      // {
      //   payload: 20;
      //   type: string;
      // }
    },
  },
});

export default CounterSlice;

export let { inc, dec, reset } = CounterSlice.actions;
