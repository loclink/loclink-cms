import React, { memo, useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';
import { useAuthRouter } from '../../hooks/useAuthRouter';

const Main: React.FC = memo(() => {
  const [collapsed, setCollapsed] = useState(false);

  // useEffect(() => {}, []);

  const { isFinish } = useAuthRouter();

  return (
    <div className="main">
      <Layout>
        <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'nav 1'
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2'
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3'
              }
            ]}
          />
        </Layout.Sider>

        <Layout className="site-layout">
          <Layout.Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed)
            })}
          </Layout.Header>
          <Layout.Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280
            }}
          >
            {isFinish ? <Outlet /> : null}
          </Layout.Content>
        </Layout>
      </Layout>
    </div>
  );
});

Main.displayName = 'Main';
export default Main;
