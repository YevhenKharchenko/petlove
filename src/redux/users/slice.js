import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser, getCurrentUserFull, updateUser } from './operations';
import { handleError, handleRefreshing } from '../../utils/index.js';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
      avatar: '',
      phone: '',
    },
    pets: [],
    favorites: [],
    views: [],
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
        state.error = null;
        state.user = { name: action.payload.name, email: action.payload.email };
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, handleError)
      .addCase(loginUser.pending, handleRefreshing)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.error = null;
        state.user = { name: action.payload.name, email: action.payload.email };
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, handleError)
      .addCase(logoutUser.pending, handleRefreshing)
      .addCase(logoutUser.fulfilled, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.error = null;
        state.user = { name: null, email: null };
        state.token = null;
      })
      .addCase(logoutUser.rejected, handleError)
      .addCase(getCurrentUserFull.pending, handleRefreshing)
      .addCase(getCurrentUserFull.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = null;
        state.user = {
          name: action.payload.name,
          email: action.payload.email,
          avatar: action.payload.avatar,
          phone: action.payload.phone,
        };
        state.token = action.payload.token;
        state.pets = action.payload.pets;
        state.favorites = action.payload.noticesFavorites;
        state.views = action.payload.noticesViewed;
      })
      .addCase(getCurrentUserFull.rejected, handleError)
      .addCase(updateUser.pending, handleRefreshing)
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = null;
        state.user = {
          name: action.payload.name,
          email: action.payload.email,
          avatar: action.payload.avatar,
          phone: action.payload.phone,
        };
        state.token = action.payload.token;
        state.pets = action.payload.pets;
        state.favorites = action.payload.noticesFavorites;
        state.views = action.payload.noticesViewed;
      })
      .addCase(updateUser.rejected, handleError);
  },
});

export const authReducer = authSlice.reducer;
