import React, { memo } from 'react';
import useNavigationGuard from '../../hooks/useNavigationGuard';

const Main = memo(() => {
  useNavigationGuard()
  return <div>Main</div>;
});

Main.displayName = 'Main';
export default Main;
