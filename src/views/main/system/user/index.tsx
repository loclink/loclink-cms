import React, { memo, useEffect } from 'react';
import { useAppDispatch } from '@/store';
import { getUserListAction } from '@/store/user';
import { tablePageConfig } from './config/table-page-config';
import TablePage from '@/components/table-page';

const User = memo(() => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserListAction());
  }, []);

  return (
    <div>
      <TablePage config={tablePageConfig}></TablePage>
    </div>
  );
});

User.displayName = 'User';
export default User;
