import React, { memo } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { signInFormConfig } from '../config/login-config';
const { formConfig, formItemConfig } = signInFormConfig;

const SignIn = memo(() => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Form
        labelCol={formConfig.labelCol}
        wrapperCol={formConfig.wrapperCol}
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        {formItemConfig.map((item) => {
          return (
            <Form.Item name={item.name} label={item.label} rules={item.rules} key={item.name}>
              <Input placeholder={item.placeholder} type={item.type}></Input>
            </Form.Item>
          );
        })}

        {/* <Form.Item name="username" label="账号" rules={[{ required: true, message: 'Please input your Username!' }]}>
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item name="password" label="密码" rules={[{ required: true, message: 'Please input your Password!' }]}>
          <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
        </Form.Item> */}

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
});

SignIn.displayName = 'SignIn';

export default SignIn;
