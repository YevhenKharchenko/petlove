import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../api/axiosInstance.js';

export const getNotices = createAsyncThunk(
  'notices/getNotices',
  async (
    {
      page,
      limit = 6,
      keyword = '',
      category = '',
      species = '',
      sex = '',
      locationId = '',
      popularity = '',
      price = '',
    },
    thunkAPI
  ) => {
    try {
      const { data } = await instance.get(
        `/notices?page=${page}&limit=${limit}&keyword=${keyword}&category=${category}&species=${species}&sex=${sex}&locationId=${locationId}&byPopularity=${popularity}${
          price ? '&byPrice=true' : ''
        }`
      );

      return data;
    } catch (e) {
      toast.error(
        `Oops! Something went wrong. Please try again later or contact support. Error details: ${e.message}`
      );
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

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

      return data;
    } catch (e) {
      toast.error(
        `Oops! Something went wrong. Please try again later or contact support. Error details: ${e.message}`
      );
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCategories = createAsyncThunk('notices/getCategories', async (_, thunkAPI) => {
  try {
    const { data } = await instance.get('/notices/categories');

    return data;
  } catch (e) {
    toast.error(
      `Oops! Something went wrong. Please try again later or contact support. Error details: ${e.message}`
    );
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const getGenders = createAsyncThunk('notices/getGenders', async (_, thunkAPI) => {
  try {
    const { data } = await instance.get('/notices/sex');

    return data;
  } catch (e) {
    toast.error(
      `Oops! Something went wrong. Please try again later or contact support. Error details: ${e.message}`
    );
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const getSpecies = createAsyncThunk('notices/getSpecies', async (_, thunkAPI) => {
  try {
    const { data } = await instance.get('/notices/species');

    return data;
  } catch (e) {
    toast.error(
      `Oops! Something went wrong. Please try again later or contact support. Error details: ${e.message}`
    );
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const getCities = createAsyncThunk('notices/getCities', async (_, thunkAPI) => {
  try {
    const { data } = await instance.get('/cities/locations');

    return data;
  } catch (e) {
    toast.error(
      `Oops! Something went wrong. Please try again later or contact support. Error details: ${e.message}`
    );
    return thunkAPI.rejectWithValue(e.message);
  }
});
