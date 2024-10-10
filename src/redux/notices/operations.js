import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../api/axiosInstance.js';

export const getPetById = createAsyncThunk('notices/getPet', async (id, thunkAPI) => {
  try {
    const { data } = await instance.get(`/notices/${id}`);

    return data;
  } catch (e) {
    toast.error(
      `Oops! Something went wrong. Please try again later or contact support. Error details: ${e.message}`
    );
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const addPetToFavorites = createAsyncThunk('notices/addPet', async (id, thunkAPI) => {
  try {
    const { data } = await instance.post(`/notices/favorites/add/${id}`);
    toast.success('Pet has been added to favorites!');

    console.log(data);

    return data;
  } catch (e) {
    toast.error(
      `Oops! Something went wrong. Please try again later or contact support. Error details: ${e.message}`
    );
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const removePetFromFavorites = createAsyncThunk(
  'notices/removePet',
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/notices/favorites/remove/${id}`);
      toast.success('Pet has been removed from favorites');

      console.log(data);

      return data;
    } catch (e) {
      toast.error(
        `Oops! Something went wrong. Please try again later or contact support. Error details: ${e.message}`
      );
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
