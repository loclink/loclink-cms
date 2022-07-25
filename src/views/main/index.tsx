import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispath } from '../../store';
import { IRootState } from '../../store/types';
import { getMenuListAction, getUserInfoAction } from '../../store/user';
import {  Layout, Menu } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
const Main: React.FC = memo(() => {
  const dispatch = useAppDispath();
  const [collapsed, setCollapsed] = useState(false);
  const { menuList, userInfo } = useSelector((state: IRootState) => state.user);

  useEffect(() => {
    Object.keys(userInfo).length || dispatch(getUserInfoAction());
    menuList.length || dispatch(getMenuListAction());
  }, [menuList]);

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
            <Outlet />
          </Layout.Content>
        </Layout>
      </Layout>
    </div>
  );
});

Main.displayName = 'Main';
export default Main;
