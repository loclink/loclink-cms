import React, { memo } from 'react';
import { LockOutlined, UserOutlined, KeyOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

interface Props {
  onFinish: (values: any) => void;
}

const SignUpForm: React.FC<Props> = memo((props: Props) => {
  const { onFinish } = props
  return (
    <div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        labelCol={{ span: 5 }}
      >
        <Form.Item label="帐号" colon name="username" rules={[{ required: true, message: '请输入账号' }]}>
          <Input prefix={<UserOutlined />} placeholder="账号" />
        </Form.Item>
        <Form.Item label="密码" colon name="password" rules={[{ required: true, message: '请输入密码！' }]}>
          <Input prefix={<LockOutlined />} type="password" placeholder="密码" />
        </Form.Item>

        <Form.Item
          label="重复密码"
          colon
          name="confirmPassword"
          rules={[
            { required: true, message: '请重复输入密码' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('密码不一致'));
              }
            })
          ]}
        >
          <Input prefix={<LockOutlined />} type="password" placeholder="再次输入密码" />
        </Form.Item>

        <Form.Item label="注册码" colon name="sign_up_code" rules={[{ required: true, message: '请输入注册码' }]}>
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
