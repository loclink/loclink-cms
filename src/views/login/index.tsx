import React, { memo } from 'react';
import { Tabs } from 'antd';
import { LoginTabsWrapper, LoginWrapper, TabPaneWrapper } from './style';
import { singInTabData } from '@/common/global-data';

import SignInForm from './cpns/sign-in-form';
import SignUpForm from './cpns/sign-up-form';

const Login: React.FC = memo(() => {
  return (
    <LoginWrapper>
      <LoginTabsWrapper>
        <Tabs className="login-tabs" centered>
          {singInTabData.map((item) => {
            return (
              <Tabs.TabPane tab={item.tab} key={item.key}>
                <TabPaneWrapper>{item.key === 'signIn' ? <SignInForm /> : <SignUpForm />}</TabPaneWrapper>
              </Tabs.TabPane>
            );
          })}
        </Tabs>
      </LoginTabsWrapper>
    </LoginWrapper>
  );
});

Login.displayName = 'Login';

export default Login;
