import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loggedInReducer from '../components/AppBar/LoginButton/LoggedInSlice';

export default configureStore({
  reducer: {
    loggedIn: loggedInReducer
  },
});
