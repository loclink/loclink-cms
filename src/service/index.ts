import store from '../store';
import Request from './request';
import { isLoading, setLoginStatus } from '../store/user';
import { BASE_URL, TIME_OUT } from './request/config';
import { message } from 'antd';
const http = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,

  // 请求校验
  authRequest(res) {
    // 身份过期
    if (res.data.code === 10401) {
      const errorMessage = store.getState().user.authToken ? res.data.message : '当前未登录';
      store.dispatch(setLoginStatus(false));
      if (res.config.url !== '/user/menu') message.error(errorMessage);
    }
  },

  // 定义显示加载动画方法
  showLoading() {
    store.dispatch(isLoading(true));
  },

  // 隐藏加载动画
  hideLoading() {
    store.dispatch(isLoading(false));
  },

  // 显示成功信息方法
  showMessage(res) {
    if (res.data.code === 200) message.success(res.data.message);
    else message.error(res.data.message);
  },

  // 显示错误信息方法
  showErrorMessage(err) {
    message.error(err);
  },

  // 单个实例拦截器
  interceptors: {
    // 请求拦截
    requestInterceptors: (config) => {
      const token = store.getState().user.authToken;
      config.headers!.Authorization = `Bearer ${token}`;
      return config;
    },

    // 请求失败
    requestInterceptorsCatch: (err) => {
      return err;
    },

    // 响应拦截
    responseInterceptors: (res) => {
      return res;
    }

    // 响应失败拦截
    // responseInterceptorsCatch: (err) => {
    //   return err;
    // }
  }
});
export { http };
