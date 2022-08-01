import React, { memo, useEffect, useState } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { useAuthRouter } from '../../hooks/useAuthRouter';

import MainBreadcrumb from '../../components/main-breadcrumb';
import SideMenu from '../../components/side-menu';
import Header from '../../components/header';
import { MainWrapper } from './style';

const Main: React.FC = memo(() => {
  const [ collapsed, setCollapsed  ] = useState(false)
  const { isFinish } = useAuthRouter();

  useEffect(() => {
    console.log('main');
  }, []);

  return (
    <MainWrapper className="main">
      <Layout className="layout-side">
        <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
          <SideMenu />
        </Layout.Sider>
        <Layout className="layout-right">
          <Layout.Header className="header" style={{ padding: 0 }}>
            <Header collapsed={collapsed} changeCollapsed={() => setCollapsed(!collapsed)}/>
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
