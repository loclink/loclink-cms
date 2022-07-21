import { createAsyncThunk } from '@reduxjs/toolkit';
import { userSignIn } from '../../service/user';
import { IAccountInfo } from '../../service/user/types';

const userSignInAction = createAsyncThunk('user/auth', async (accountInfo: IAccountInfo) => {
  const result = await userSignIn(accountInfo);
  return result;
});

export { userSignInAction };
