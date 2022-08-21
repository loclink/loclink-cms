import React, { memo } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

interface Props {
  onFinish: (values: any) => void;
}

const SignInForm: React.FC<Props> = memo((props: Props) => {
  const { onFinish } = props;

  return (
    <div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true, username: 'admin', password: 'admin' }}
        onFinish={onFinish}
      >
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
