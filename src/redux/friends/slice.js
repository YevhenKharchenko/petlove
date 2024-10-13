import { createSlice } from '@reduxjs/toolkit';
import { getFriends } from './operations.js';
import { handleError, handleRefreshing } from '../../utils/index.js';

const friendsSlice = createSlice({
  name: 'friends',
  initialState: {
    friends: [],
    isRefreshing: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getFriends.pending, handleRefreshing)
      .addCase(getFriends.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = null;
        state.friends = action.payload;
      })
      .addCase(getFriends.rejected, handleError);
  },
});

export const friendsReducer = friendsSlice.reducer;
