import React, { memo, useEffect } from 'react';
import { useAppDispatch } from '@/store';
import { getUserListAction } from '@/store/user';
import TablePage from '@/components/table-page';
import { useRouteSearch } from '../../../../hooks/useRouteSearch';

const User = memo(() => {
  const dispatch = useAppDispatch();
  useRouteSearch({ a: 1, b: 10 });
  useEffect(() => {
    dispatch(getUserListAction());
  }, []);

  return (
    <div>
      <TablePage></TablePage>
    </div>
  );
});

User.displayName = 'User';
export default User;
