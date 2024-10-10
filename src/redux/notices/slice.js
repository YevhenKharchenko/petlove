import { createSlice } from '@reduxjs/toolkit';
import { addPetToFavorites, getPetById, removePetFromFavorites } from './operations.js';
import { handleError, handleRefreshing } from '../../utils/index.js';

const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
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
        console.log(action.payload);
        state.pet = action.payload;
      })
      .addCase(getPetById.rejected, handleError)
      .addCase(addPetToFavorites.pending, handleRefreshing)
      .addCase(addPetToFavorites.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(addPetToFavorites.rejected, handleError)
      .addCase(removePetFromFavorites.pending, handleRefreshing)
      .addCase(removePetFromFavorites.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(removePetFromFavorites.rejected, handleError);
  },
});

export const { logout } = noticesSlice.actions;

export const noticesReducer = noticesSlice.reducer;
