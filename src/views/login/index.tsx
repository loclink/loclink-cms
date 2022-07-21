import React, { memo } from 'react';
import { Tabs } from 'antd';
import { LoginTabsWrapper, LoginWrapper, TabPaneWrapper } from './style';
import SignInForm from './cpns/sign-in-form';
import SignOnForm from './cpns/sign-on-form';


const Login = memo(() => {
  return (
    <LoginWrapper>
      <LoginTabsWrapper>
        <Tabs className="login-tabs" centered>
          <Tabs.TabPane tab="登录" key={1}>
            <TabPaneWrapper>
              <SignInForm />
            </TabPaneWrapper>
          </Tabs.TabPane>
          <Tabs.TabPane tab="注册" key={2}>
            <TabPaneWrapper>
              <SignOnForm />
            </TabPaneWrapper>
          </Tabs.TabPane>
        </Tabs>
      </LoginTabsWrapper>
    </LoginWrapper>
  );
});

Login.displayName = 'Login';

export default Login;
