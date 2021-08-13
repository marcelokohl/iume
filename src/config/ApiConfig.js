import axios from 'axios';

import { store } from '../store';

import { Actions as AuthActions } from '../store/modules/auth/actions';
import history from '../services/history';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

api.interceptors.response.use(
  response => response,
  err => {
    if(err.response.status === 401) {
      store.dispatch(AuthActions.accessDenied())
      history.push('/admin/login')
    }
    return Promise.reject(err);
 }
);