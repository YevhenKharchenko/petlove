import { createSlice } from '@reduxjs/toolkit';
import { addPetToFavorites, getNotices, getPetById, removePetFromFavorites } from './operations.js';
import { handleError, handleRefreshing } from '../../utils/index.js';

const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    notices: [],
    pet: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPetById.pending, handleRefreshing)
      .addCase(getPetById.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = null;
        state.isLoggedIn = true;
        state.pet = action.payload;
      })
      .addCase(getPetById.rejected, handleError)
      .addCase(addPetToFavorites.pending, handleRefreshing)
      .addCase(addPetToFavorites.fulfilled, state => {
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(addPetToFavorites.rejected, handleError)
      .addCase(removePetFromFavorites.pending, handleRefreshing)
      .addCase(removePetFromFavorites.fulfilled, state => {
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(removePetFromFavorites.rejected, handleError)
      .addCase(getNotices.pending, handleRefreshing)
      .addCase(getNotices.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = null;
        state.notices = action.payload.results;
        console.log(action.payload);
      })
      .addCase(getNotices.rejected, handleError);
  },
});

export const { logout } = noticesSlice.actions;

export const noticesReducer = noticesSlice.reducer;
