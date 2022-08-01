import React, { memo } from 'react';
import { useAppDispatch } from '@/store';
import { getUserListAction } from '@/store/user';

const User = memo(() => {
  const dispatch = useAppDispatch();
  dispatch(getUserListAction());
  return <div>User</div>;
});

User.displayName = 'User';
export default User;
