import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';

const Overview = memo(() => {
  return (
    <div>
      <Outlet />
    </div>
  );
});

Overview.displayName = 'Overview';
export default Overview;
