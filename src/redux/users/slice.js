import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser } from './operations';
import { handleError, handleRefreshing } from '../../utils/index.js';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, handleRefreshing)
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.user = { name: action.payload.name, email: action.payload.email };
        state.token = action.payload.token;
        console.log(action.payload);
      })
      .addCase(registerUser.rejected, handleError)
      .addCase(loginUser.pending, handleRefreshing)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.user = { name: action.payload.name, email: action.payload.email };
        state.token = action.payload.token;
        console.log(action.payload);
      })
      .addCase(loginUser.rejected, handleError)
      .addCase(logoutUser.pending, handleRefreshing)
      .addCase(logoutUser.fulfilled, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.error = null;
      })
      .addCase(logoutUser.rejected, handleError);
  },
});

export const authReducer = authSlice.reducer;
