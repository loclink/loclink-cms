import { http } from '../index';
import { IAccountInfo, IResponseData } from '../types';

// 用户登录
const userSignIn = async (accountInfo: IAccountInfo): Promise<IResponseData> => {
  return http.request({
    url: '/auth',
    method: 'post',
    data: accountInfo,
    loading: true,
    message: true
  });
};

const userSignUp = async (accountInfo: IAccountInfo): Promise<IResponseData> => {
  return http.request({
    url: '/user',
    method: 'post',
    data: accountInfo,
    loading: true,
    message: true
  });
};

const getUserInfo = async (): Promise<IResponseData> => {
  return http.request({
    url: '/user/info',
    method: 'post',
    loading: true
  });
};

const getMenuList = async (): Promise<IResponseData> => {
  return http.request({
    url: '/user/menu',
    method: 'get',
    loading: true
  });
};

// 获取用户列表
const getUserList = async (): Promise<IResponseData> => {
  return http.request({
    url: '/user/list',
    method: 'get',
    loading: true
  });
};

export { userSignIn, userSignUp, getUserInfo, getMenuList, getUserList };
