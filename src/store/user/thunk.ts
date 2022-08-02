import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMenuList, getUserInfo, getUserList, userSignIn, userSignUp } from '@/service/user';
import { IAccountInfo } from '@/service/types';

const userSignInAction = createAsyncThunk('user/auth', async (accountInfo: IAccountInfo) => {
  const result = await userSignIn(accountInfo);
  return result;
});

const userSignUpAction = createAsyncThunk('user/signup', async (accountInfo: IAccountInfo) => {
  const result = await userSignUp(accountInfo);
  return result;
});

const getUserInfoAction = createAsyncThunk('user/info', async () => {
  const result = await getUserInfo();
  return result;
});

const getMenuListAction = createAsyncThunk('user/menu', async () => {
  const result = await getMenuList();
  return result;
});

const getUserListAction = createAsyncThunk('user/list', async () => {
  const result = await getUserList();
  return result;
});

export { userSignInAction, getUserInfoAction, getMenuListAction, getUserListAction, userSignUpAction };
