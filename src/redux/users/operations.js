import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../api/index.js';

export const registerUser = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    console.log(credentials);

    const { data } = await instance.post('/users/signup', credentials);
    toast.success(`Congratulations! You have successfully registered.`);
    console.log(data);

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
    console.log(data);

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
    const { data } = await instance.post('/users/signout');
    toast.success('You have been successfully logged out.');
    console.log(data);
  } catch (e) {
    toast.error(
      `Oops! Something went wrong. Please try again later or contact support. Error details: ${e.message}`
    );
    return thunkAPI.rejectWithValue(e.message);
  }
});
