import instance from '../request';
import { IAccountInfo } from './types';
const userSignIn = async (accountInfo: IAccountInfo): Promise<{data: any, code: number, message: string} > => {
  return instance.request({
    url: '/auth',
    method: 'post',
    data: accountInfo
  });
};

export { userSignIn };
