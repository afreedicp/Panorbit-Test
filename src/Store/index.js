import { configureStore } from '@reduxjs/toolkit';
import usersListReducer from './userSlice';
const store = configureStore({
  reducer: { usersList: usersListReducer },
});

export default store;
