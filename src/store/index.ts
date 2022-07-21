import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import userReducer from './user';

const store = configureStore({
  reducer: {
    user: userReducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispath: () => AppDispatch = useDispatch;
export default store;
