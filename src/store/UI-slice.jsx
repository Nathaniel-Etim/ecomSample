import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  isLogedIn: false,
  register: false,
};

const isLogedIn = createSlice({
  name: `auth`,
  initialState: defaultState,
  reducers: {
    logIn(state) {
      state.isLogedIn = true;
    },
    logOut(state) {
      state.isLogedIn = false;
    },
    register(state) {
      state.isLogedIn = false;
      state.register = true;
    },
    showLogin(state) {
      state.isLogedIn = false;
      state.register = false;
    },
  },
});
const IsLoggedInSlice = isLogedIn.reducer;

export const isLogedInAction = isLogedIn.actions;

export default IsLoggedInSlice;
