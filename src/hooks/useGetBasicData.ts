import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store';
import { IRootState } from '../store/types';
import { getMenuListThunk, getUserInfoThunk } from '../store/user';

// 获取基本信息数据
const useGetBasicData = () => {
  const dispatch = useAppDispatch();
  const { menuList, userInfo, loginStatus } = useSelector((state: IRootState) => state.user);
  useEffect(() => {
    menuList.length || dispatch(getMenuListThunk());
    Object.keys(userInfo).length || dispatch(getUserInfoThunk());
  }, []);
  return { menuList, userInfo, loginStatus };
};

export { useGetBasicData };
