import { AxiosRequestConfig } from 'axios';

interface RequestInterceptors {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorsCatch?: (error: any) => any;
  responseInterceptors?: (config: any) => any;
  responseInterceptorsCatch?: (error: any) => any;
}

interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors;
  loading?: boolean;
  message?: boolean;
  showLoading?: () => void;
  hideLoading?: () => void;
  showMessage?: (message: string) => void;
  showErrorMessage?: (errMessage: string) => void;
}

export type { RequestConfig, RequestInterceptors };
