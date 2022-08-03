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

// 用户注册
const userSignUp = async (accountInfo: IAccountInfo): Promise<IResponseData> => {
  return http.request({
    url: '/user',
    method: 'post',
    data: accountInfo,
    loading: true,
    message: true
  });
};

// 用户信息
const getUserInfo = async (): Promise<IResponseData> => {
  return http.request({
    url: '/user/info',
    method: 'post',
    loading: true
  });
};

// 菜单列表
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
