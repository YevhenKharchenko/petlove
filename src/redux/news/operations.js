import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../api/axiosInstance.js';

export const getNews = createAsyncThunk(
  'news/getNews',
  async ({ page, limit = 6, keyword = '' }, thunkAPI) => {
    try {
      const { data } = await instance.get(`/news?page=${page}&limit=${limit}&keyword=${keyword}`);

      return data;
    } catch (e) {
      toast.error(
        `Oops! Something went wrong. Please try again later or contact support. Error details: ${e.message}`
      );
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
