import { createSlice } from '@reduxjs/toolkit';

export const loggedInSlice = createSlice({
  name: 'loggedIn',
  initialState: {
    value: false,
  },
  reducers: {
    login: state => {
      state.value = true;
    },
    logout: state => {
      state.value = false;
    },
  },
});

export const { login, logout } = loggedInSlice.actions;

export const loggedInState = state => state.loggedIn.value;

export default loggedInSlice.reducer;
