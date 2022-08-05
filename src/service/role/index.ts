import { http } from '../index';
import { IResponseData } from '../types';

// 获取角色列表
const getRoleList = (): Promise<IResponseData> => {
  return http.request({
    url: '/role/list',
    method: 'post',
    loading: true
  });
};

export { getRoleList };
