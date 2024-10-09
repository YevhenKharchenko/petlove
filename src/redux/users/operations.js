import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../api/index.js';

export const registerUser = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    console.log(credentials);

    const { data } = await instance.post('/users/signup', credentials);
    toast.success(`Congratulations! You have successfully registered.`);

    return data;
  } catch (e) {
    toast.error(
      `Oops! Something went wrong. Please try again later or contact support. Error details: ${e.message}`
    );
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const loginUser = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  console.log(credentials);

  try {
    const { data } = await instance.post('/users/signin', credentials);
    toast.success(`You have successfully logged in.`);

    return data;
  } catch (e) {
    if (e.response.status === 400) {
      toast.error('Invalid email or password');
      return thunkAPI.rejectWithValue(e.message);
    }
    toast.error(
      `Oops! Something went wrong. Please try again later or contact support. Error details: ${e.message}`
    );
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logoutUser = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await instance.post('/users/signout');
    toast.success('You have been successfully logged out.');
  } catch (e) {
    toast.error(
      `Oops! Something went wrong. Please try again later or contact support. Error details: ${e.message}`
    );
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const getCurrentUserFull = createAsyncThunk('auth/getCurrent', async (_, thunkAPI) => {
  try {
    const { data } = await instance.get('/users/current/full');

    return data;
  } catch (e) {
    toast.error(
      `Oops! Something went wrong. Please try again later or contact support. Error details: ${e.message}`
    );
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const updateUser = createAsyncThunk('auth/update', async (formData, thunkAPI) => {
  try {
    const { data } = await instance.patch('/users/current/edit', formData);
    toast.success('Your profile has been updated successfully!');

    return data;
  } catch (e) {
    toast.error(
      `Oops! Something went wrong. Please try again later or contact support. Error details: ${e.message}`
    );
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const addPet = createAsyncThunk('auth/addPet', async (formData, thunkAPI) => {
  try {
    const { data } = await instance.post('/users/current/pets/add', formData);
    toast.success('Pet has been added successfully!');

    return data;
  } catch (e) {
    toast.error(
      `Oops! Something went wrong. Please try again later or contact support. Error details: ${e.message}`
    );
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const removePet = createAsyncThunk('auth/removePet', async (id, thunkAPI) => {
  try {
    const { data } = await instance.delete(`/users/current/pets/remove/${id}`);
    toast.success('Pet has been removed');

    return data;
  } catch (e) {
    toast.error(
      `Oops! Something went wrong. Please try again later or contact support. Error details: ${e.message}`
    );
    return thunkAPI.rejectWithValue(e.message);
  }
});
