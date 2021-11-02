import { configureStore } from "@reduxjs/toolkit";
import toastReducer from "./toastSlice";
import modeReducer from "./modeSlice";

export default configureStore({
  reducer: {
    toast: toastReducer,
    mode: modeReducer,
  },
});
