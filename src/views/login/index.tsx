import React, { memo } from 'react';
import { Tabs } from 'antd';
import { tabConfig } from './config/login-config';
import { LoginTabsWrapper, LoginWrapper } from './style';
import SignIn from './cpns/sign-in';
import SignOn from './cpns/sign-on';

const { TabPane } = Tabs;

const Login = memo(() => {

  const tabContent = (type: string) => {
    if (type === 'signIn') {
      return <SignIn />;
    } else {
      return <SignOn />;
    }
  };

  return (
    <LoginWrapper>
      <LoginTabsWrapper>
        <Tabs  className="login-tabs" centered>
          {tabConfig.map((item, index) => {
            return (
              <TabPane tab={item.label} key={index}>
                {tabContent(item.type)}
              </TabPane>
            );
          })}
        </Tabs>
      </LoginTabsWrapper>
    </LoginWrapper>
  );
});

Login.displayName = 'Login';

export default Login;
