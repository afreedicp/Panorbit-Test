import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from '../Api/index';

const initialState = {
  status: 'idle',
  usersList: undefined,
};

export const getUsersList = createAsyncThunk('/getUsersList', async () => {
  const response = await getUsers();
  return response.data;
});

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
      });
  },
});

export const { updateStatus } = usersListSlice.actions;
export default usersListSlice.reducer;

export const selectUsers = (state) => state.usersList.usersList;
