import React, { memo, useEffect } from 'react';
import { useAppDispatch } from '@/store';
import { getUserListAction } from '@/store/user';
import TablePage from '@/components/table-page';
import { useRouteSearch } from '../../../../hooks/useRouteSearch';
import { tablePageConfig } from './config/table-page-config';
import { IDataType } from './types';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../../store/types';

const TablePageWrapped = memo(TablePage<IDataType>)

const User = memo(() => {
  const dispatch = useAppDispatch();
  useRouteSearch({ a: 1, b: 10 });
  const {userListData}  = useSelector((state: IRootState) => state.user)
  useEffect(() => {
    dispatch(getUserListAction());
  }, []);

  return (
    <div>
      <TablePageWrapped tablePageConfig={tablePageConfig} dataSource={userListData}></TablePageWrapped>
    </div>
  );
});

User.displayName = 'User';
export default User;
