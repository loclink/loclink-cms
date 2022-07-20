// tabs配置
const tabConfig = [
  {
    label: '登录',
    type: 'signIn'
  },
  {
    label: '注册',
    type: 'signOn'
  }
];

// 登录 form表单配置
const signInFormConfig = {
  formConfig: {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 }
  },
  formItemConfig: [
    {
      name: 'username',
      label: '账号:',
      type:'text',
      placeholder:'Username',
      rules: [
        {
          required: true,
          message: '请输入账号!'
        }
      ]
    },
    {
      name: 'password',
      label: '密码:',
      type:'password',
      placeholder:'Username',
      rules: [
        {
          required: true,
          message: '请输入密码!'
        }
      ]
    }
  ]
};

// 注册 form表单配置
const signOnFormConfig = {};

export { tabConfig, signInFormConfig, signOnFormConfig };
