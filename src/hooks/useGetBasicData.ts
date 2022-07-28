import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispath } from '../store';
import { IRootState } from '../store/types';
import { getMenuListAction, getUserInfoAction } from '../store/user';

// 获取基本信息数据
const useGetBasicData = () => {
  const dispatch = useAppDispath();
  const { menuList, userInfo, loginStatus } = useSelector((state: IRootState) => state.user);
  useEffect(() => {
    menuList.length || dispatch(getMenuListAction());
    Object.keys(userInfo).length || dispatch(getUserInfoAction());
  }, []);
  return { menuList, userInfo, loginStatus };
};

export { useGetBasicData };
