import { configureStore } from '@reduxjs/toolkit';
import { loginReducer } from '../views/login/store';

export default configureStore({
  reducer: {
    login:loginReducer
  }
});
