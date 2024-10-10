import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoggedIn = state => state.auth?.isLoggedIn;

export const selectUsername = state => state.auth?.user?.name;

export const selectEmail = state => state.auth?.user?.email;

export const selectAvatar = state => state.auth?.user?.avatar;

export const selectPhone = state => state.auth?.user?.phone;

export const selectPets = state => state.auth?.pets;

export const selectFavorites = state => state.auth?.favorites;

export const selectViews = state => state.auth?.views;

export const selectIsFavorite = id =>
  createSelector([selectFavorites], favorites => favorites?.some(el => el._id === id));
