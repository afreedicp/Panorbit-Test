import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from '../Api/index';

const initialState = {
  status: 'idle',
  usersList: undefined,
  currentUser: undefined,
};

export const getUsersList = createAsyncThunk('/getUsersList', async () => {
  const response = await getUsers();
  return response.data;
});
export const getCurrentUser = createAsyncThunk(
  '/getCurrentUser',
  async ({ data }) => {
    return data;
  }
);

const usersListSlice = createSlice({
  name: 'usersList',
  initialState,
  reducers: {
    updateStatus: (state) => {
      state.status = 'idle';
      state.isLoading = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUsersList.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getUsersList.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(getUsersList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.usersList = action.payload;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentUser = action.payload;
      });
  },
});

export const { updateStatus } = usersListSlice.actions;
export default usersListSlice.reducer;

export const selectUsers = (state) => state.usersList.usersList;
export const selectAUser = (state) => state.usersList.currentUser;
