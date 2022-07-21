import axios from 'axios';
import { message } from 'antd';
import store from '@/store';
import { isLoading } from '@/store/user';
import { BASE_URL, TIME_OUT } from './config';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT
});

// 请求拦截
instance.interceptors.request.use(
  (config: any) => {
    config.headers.authorization = 'Bearer ' + store.getState().user.authToken;
    store.dispatch(isLoading(true));
    return config;
  },
  (err) => {
    message.error(err.message);
    console.log(err);
  }
);

// 响应拦截
instance.interceptors.response.use(
  (res) => {
    if (res.data.code === 200) {
      message.success(res.data.message);
    } else {
      message.error(res.data.message);
    }
    store.dispatch(isLoading(false));

    return res.data;
  },
  (err) => {
    store.dispatch(isLoading(false));
    console.log(err);
    message.error(err.message);
  }
);

export default instance;
