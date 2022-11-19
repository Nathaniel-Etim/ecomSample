import { configureStore } from "@reduxjs/toolkit";
import IsLoggedInSlice from "./UI-slice";
import userSliceReducer from "./userInfo";

const store = configureStore({
  reducer: { login: IsLoggedInSlice, userInfo: userSliceReducer },
});

export default store;
