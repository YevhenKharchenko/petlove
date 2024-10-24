import { createSlice } from '@reduxjs/toolkit';
import {
  addPetToFavorites,
  getCategories,
  getCities,
  getGenders,
  getNotices,
  getPetById,
  getSpecies,
  removePetFromFavorites,
} from './operations.js';
import { formatCategories, handleError, handleRefreshing } from '../../utils/index.js';

const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    notices: [],
    totalPages: null,
    pet: null,
    categories: [],
    genders: [],
    species: [],
    cities: [],
    isRefreshing: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getPetById.pending, handleRefreshing)
      .addCase(getPetById.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = null;
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
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getNotices.rejected, handleError)
      .addCase(getCategories.pending, handleRefreshing)
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = null;
        state.categories = [...formatCategories(action.payload)];
      })
      .addCase(getCategories.rejected, handleError)
      .addCase(getGenders.pending, handleRefreshing)
      .addCase(getGenders.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = null;
        state.genders = [...formatCategories(action.payload)];
      })
      .addCase(getGenders.rejected, handleError)
      .addCase(getSpecies.pending, handleRefreshing)
      .addCase(getSpecies.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = null;
        state.species = [...formatCategories(action.payload)];
      })
      .addCase(getSpecies.rejected, handleError)
      .addCase(getCities.pending, handleRefreshing)
      .addCase(getCities.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = null;
        state.cities = action.payload.map(el => {
          return { value: el._id, label: el.cityEn };
        });
      })
      .addCase(getCities.rejected, handleError);
  },
});

export const noticesReducer = noticesSlice.reducer;
