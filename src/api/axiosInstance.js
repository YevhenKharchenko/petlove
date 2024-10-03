import axios from 'axios';
import { store } from '../redux/store.js';
import { logoutUser } from '../redux/users/operations.js';

export const instance = axios.create({
  baseURL: 'https://petlove.b.goit.study/api',
});

instance.interceptors.request.use(
  config => {
    const { auth } = store.getState();
    if (auth.token) {
      config.headers.Authorization = `Bearer ${auth.token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized, logging out...');
      store.dispatch(logoutUser());
    }
    return Promise.reject(error);
  }
);
