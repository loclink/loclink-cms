import axios from 'axios';
import { BASE_URL, TIME_OUT } from './config';
import { message } from 'antd';
import { isLoading } from '../store/user';
import store from '@/store';
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT
});

// 请求拦截
instance.interceptors.request.use(
  (config) => {
    store.dispatch(isLoading(true));
    return config;
  },
  (err) => {
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
    message.error(err);
  }
);

export default instance;
