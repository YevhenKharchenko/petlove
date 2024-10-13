import { createSlice } from '@reduxjs/toolkit';
import { getNews } from './operations.js';
import { handleError, handleRefreshing } from '../../utils/index.js';

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    news: [],
    totalPages: null,
    isRefreshing: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getNews.pending, handleRefreshing)
      .addCase(getNews.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = null;
        state.news = action.payload.results;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getNews.rejected, handleError);
  },
});

export const newsReducer = newsSlice.reducer;
