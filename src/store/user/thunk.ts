import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMenuList, getUserInfo, getUserList, userSignIn, userSignUp } from '@/service/user';
import { IAccountInfo } from '@/service/types';

const userSignInThunk = createAsyncThunk('user/auth', async (accountInfo: IAccountInfo) => {
  const result = await userSignIn(accountInfo);
  return result;
});

const userSignUpThunk = createAsyncThunk('user/signup', async (accountInfo: IAccountInfo) => {
  const result = await userSignUp(accountInfo);
  return result;
});

const getUserInfoThunk = createAsyncThunk('user/info', async () => {
  const result = await getUserInfo();
  return result;
});

const getMenuListThunk = createAsyncThunk('user/menu', async () => {
  const result = await getMenuList();
  return result;
});

const getUserListThunk = createAsyncThunk('user/list', async (params?: any) => {
  const result = await getUserList(params);
  return result;
});

export { userSignInThunk, getUserInfoThunk, getMenuListThunk, getUserListThunk, userSignUpThunk };
