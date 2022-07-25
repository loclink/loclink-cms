import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';

const System: React.FC = memo(() => {
  return (
    <div>
      <Outlet />
    </div>
  );
});

System.displayName = 'System';
export default System;
