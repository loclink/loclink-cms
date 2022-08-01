import React, { memo, useEffect } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import { useAuthRouter } from '../../hooks/useAuthRouter';
import SideMenu from '../../components/side-menu';
import Header from '../../components/header';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store/types';
import { MainWrapper } from './style';
import MainBreadcrumb from '../../components/main-breadcrumb';

const Main: React.FC = memo(() => {
  const { isFinish } = useAuthRouter();
  const { menuCollapsed } = useSelector((state: IRootState) => state.user);

  useEffect(() => {
    console.log('main');
  }, []);

  return (
    <MainWrapper className="main">
      <Layout className="layout-side">
        <Layout.Sider trigger={null} collapsible collapsed={menuCollapsed}>
          <SideMenu />
        </Layout.Sider>
        <Layout className="layout-right">
          <Layout.Header className="header" style={{ padding: 0 }}>
            <Header />
          </Layout.Header>
          <MainBreadcrumb />

          <Layout.Content
            className="content"
            style={{
              margin: '0 20px 20px 20px',
              padding: 20
            }}
          >
            {isFinish ? <Outlet /> : null}
          </Layout.Content>
        </Layout>
      </Layout>
    </MainWrapper>
  );
});

Main.displayName = 'Main';
export default Main;
