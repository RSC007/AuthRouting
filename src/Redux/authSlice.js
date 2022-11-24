import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  userLogin: null
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    userSignUp: (state, action) => {
      localStorage.setItem("username", action.payload.username);
      localStorage.setItem("password", action.payload.password);
      state.userLogin = action.payload
      state.users.push(action.payload);
    },
    userLogout: (state, action) => {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      state.userLogin = null
    },
    userSignIn: (state, action) => {
      localStorage.setItem("username", action.payload.username);
      localStorage.setItem("password", action.payload.password);
      state.userLogin = action.payload
    }
  }
});

export const isUserLogin = state => state.auth.userLogin
export const users = state => state.auth.users
// Action creators are generated for each case reducer function
export const { userSignUp, userLogout, userSignIn } = authSlice.actions;

export default authSlice.reducer;
