import React, { memo, useEffect, useState } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { useAuthRouter } from '../../hooks/useAuthRouter';

import SideMenu from '../../base-ui/side-menu';
import Header from '../../base-ui/header';
import { MainWrapper } from './style';

const Main: React.FC = memo(() => {
  const [collapsed, setCollapsed] = useState(false);
  const { isFinish } = useAuthRouter();

  useEffect(() => {
    console.log('main');
  }, []);

  return (
    <MainWrapper className="main">
      <Layout className="layout">
        <Layout.Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="layout-side"
       
        >
          <SideMenu />
        </Layout.Sider>
        <Layout className="layout-right" >
          <Layout.Header className="header" style={{ padding: 0 }}>
            <Header collapsed={collapsed} changeCollapsed={() => setCollapsed(!collapsed)} />
          </Layout.Header>

          <Layout.Content
            className="content"
            style={{
              margin: 20,
              padding: 20,
              overflow: 'initial'
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
