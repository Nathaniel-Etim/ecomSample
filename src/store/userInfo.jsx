import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: `userInfo`,
  initialState: {
    allUsers: [],
    userDetailes: [],
    loginInput: null,
    loginUser: null,
    logUserIn: false,
  },
  reducers: {
    addUser(state, action) {
      // this is to add item to the api
      state.allUsers = action.payload;
    },

    logInAsUser(state, action) {
      state.userDetailes = action.payload;
      // this is getting items from the api
    },

    loginInput(state, action) {
      // this is tho get the user input
      const userInput = action.payload;
      state.loginInput = userInput;
    },

    logout(state) {
      state.logUserIn = false;
      state.userInput = null;
    },

    checkUserInput(state) {
      let currentAccount;
      let userInfo = [];

      for (const key in state.userDetailes) {
        userInfo.push({
          id: key,
          password: state.userDetailes[key].password,
          userMail: state.userDetailes[key].userMail,
          userName: state.userDetailes[key].userName,
          userCountr: state.userDetailes[key].userCountry,
        });
      }

      currentAccount = userInfo.find((el) => {
        return el.userName === state.loginInput.userName;
      });
      console.log(currentAccount);

      if (currentAccount?.password === state?.loginInput.password) {
        // this will be required to display the user name and other personal input
        state.loginUser = currentAccount;
        state.logUserIn = true;
        console.log(currentAccount);
      }
    },
  },
});

export const userSliceAction = userSlice.actions;

const userSliceReducer = userSlice.reducer;
export default userSliceReducer;
