import React, { memo, useCallback, useState } from 'react';
import { Tabs } from 'antd';
import { LoginTabsWrapper, LoginWrapper, TabPaneWrapper } from './style';
import { singInTabData } from '@/common/global-data';

import SignInForm from './cpns/sign-in-form';
import SignUpForm from './cpns/sign-up-form';
import { useAppDispatch } from '../../store';
import { useNavigate } from 'react-router-dom';
import { setLoginStatus, userSignInThunk } from '../../store/user';
import { userSignUpThunk } from '../../store/user/thunk';

const Login: React.FC = memo(() => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [activeKey, setActiveKey] = useState('signIn');

  const onChangeTabs = useCallback((key: string) => {
    setActiveKey(key);
  }, []);

  // 处理登录
  const handleSignIn = useCallback((values: any) => {
    dispatch(userSignInThunk(values)).then((res: any) => {
      if (res.payload.code === 200) {
        dispatch(setLoginStatus(true));
        navigate({ pathname: '/main' });
      }
    });
  }, []);

  // 处理注册
  const handleSingUp = useCallback((values: any) => {
    dispatch(userSignUpThunk(values)).then((res: any) => {
      if (res.payload.code === 200) setActiveKey('signIn');
    });
  }, []);

  return (
    <LoginWrapper>
      <LoginTabsWrapper>
        <Tabs className="login-tabs" centered onChange={onChangeTabs} activeKey={activeKey}>
          {singInTabData.map((item) => {
            return (
              <Tabs.TabPane tab={item.tab} key={item.key}>
                <TabPaneWrapper>
                  {item.key === 'signIn' ? (
                    <SignInForm onFinish={handleSignIn} />
                  ) : (
                    <SignUpForm onFinish={handleSingUp} />
                  )}
                </TabPaneWrapper>
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
