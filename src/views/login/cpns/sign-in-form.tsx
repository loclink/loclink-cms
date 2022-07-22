import React, { memo } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

import { useAppDispath } from '../../../store';
import { userSignInAction } from '../../../store/user';
import { useNavigate } from 'react-router-dom';

const SignInForm = memo(() => {
  const dispatch = useAppDispath();
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    dispatch(userSignInAction(values)).then((res: any) => {
      console.log(res.payload)
      if(res.payload.code === 200) navigate({pathname: '/main'})
    });
  };

  return (
    <div>
      <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item
          label="帐号"
          colon
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          label="密码"
          colon
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
        </Form.Item>

        <Form.Item name="remember" className="remember-password" valuePropName="checked">
          <Checkbox>记住密码</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" className="login-button" style={{ width: '100%' }} htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
});

SignInForm.displayName = 'SignInForm';

export default SignInForm;