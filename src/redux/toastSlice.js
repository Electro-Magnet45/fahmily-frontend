import { createSlice } from "@reduxjs/toolkit";

export const toastSlice = createSlice({
  name: "toast",
  initialState: {
    toastData: [],
  },
  reducers: {
    toastDataIncrement: (state, action) => {
      const newToast = action.payload;
      newToast._id = new Date().toISOString();
      state.toastData.push(newToast);
    },
    toastDataReduction: (state) => {
      state.toastData = state.toastData.slice(1);
    },
  },
});

export const { toastDataIncrement, toastDataReduction } = toastSlice.actions;
export default toastSlice.reducer;
