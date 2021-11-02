import { createSlice } from "@reduxjs/toolkit";

export const modeSlice = createSlice({
  name: "mode",
  initialState: {
    modeData: [{ id: "InternetOn", active: true }],
  },
  reducers: {
    modeDataIncrement: (state, action) => {
      state.modeData.find(
        (e) => e.id === action.payload && (e.active = !e.active)
      );
    },
  },
});

export const { modeDataIncrement } = modeSlice.actions;
export default modeSlice.reducer;
