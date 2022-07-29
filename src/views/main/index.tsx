import React, { memo, useState, useEffect, useCallback } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import { useAuthRouter } from '../../hooks/useAuthRouter';
import SideMenu from '../../components/side-menu';
import Header from '../../components/header';
import Frame from '../../components/frame';

const Main: React.FC = memo(() => {
  useEffect(() => {
    console.log('main');
  }, []);
  const { isFinish } = useAuthRouter();
  return <Frame header={<Header />} side={<SideMenu />} content={isFinish ? <Outlet /> : null} />;
});

Main.displayName = 'Main';
export default Main;
