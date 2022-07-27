import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispath } from '../store';
import { IRootState } from '../store/types';
import { setAuthToken } from '../store/user';
import { getCache } from '../utils/cache';
import { useGetBasicData } from './useGetBasicData';

// 获取token
const useSetToken = () => {
  const location = useLocation();
  const dispatch = useAppDispath();
  const navigate = useNavigate();
  const { authToken } = useSelector((state: IRootState) => state.user);

  useEffect(() => {
    if (location.pathname !== '/login') {
      const token = authToken || getCache('token');
      token ? dispatch(setAuthToken(token)) : navigate({ pathname: '/login' });
    }
  }, []);
};

export { useSetToken };
