import instance from '../request';
import { IAccountInfo, IResponseData } from './types';
const userSignIn = async (accountInfo: IAccountInfo): Promise<IResponseData> => {
  return instance.request({
    url: '/auth',
    method: 'post',
    data: accountInfo
  });
};

const getUserInfo = async (): Promise<IResponseData> => {
  return instance.request({
    url: '/info',
    method: 'get'
  });
};

export { userSignIn, getUserInfo };
