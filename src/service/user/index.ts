import { request } from '../index';
import { IAccountInfo, IResponseData } from '../types';

const userSignIn = async (accountInfo: IAccountInfo): Promise<IResponseData> => {
  return request.request({
    url: '/auth',
    method: 'post',
    data: accountInfo,
    loading: true,
    message: true
  });
};

const getUserInfo = async (): Promise<IResponseData> => {
  return request.request({
    url: '/user/info',
    method: 'post',
    loading: true
  });
};

const getMenuList = async (): Promise<IResponseData> => {
  return request.request({
    url: '/user/menu',
    method: 'get',
    loading: true
  });
};

const getUserList = async (): Promise<IResponseData> => {
  return request.request({
    url: '/user/list',
    method: 'get',
    loading: true
  });
};

export { userSignIn, getUserInfo, getMenuList, getUserList };
