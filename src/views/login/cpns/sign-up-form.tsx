import React, { memo } from 'react';
import { LockOutlined, UserOutlined, KeyOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

const SignUpForm = memo(() => {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        labelCol={{ span: 5 }}
      >
        <Form.Item
          label="帐号"
          colon
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="账号" />
        </Form.Item>
        <Form.Item
          label="密码"
          colon
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input prefix={<LockOutlined />} type="password" placeholder="密码" />
        </Form.Item>

        <Form.Item
          label="确认密码"
          colon
          name="confirmPassword"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input prefix={<LockOutlined />} type="password" placeholder="再次输入密码" />
        </Form.Item>

        <Form.Item label="注册码" colon name="signOnCode" rules={[{ required: true, message: '请输入注册码!' }]}>
          <Input prefix={<KeyOutlined />} placeholder="注册码"></Input>
        </Form.Item>

        <Form.Item>
          <Button type="primary" style={{ width: '100%' }} htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
});
SignUpForm.displayName = 'SignUp';
export default SignUpForm;
