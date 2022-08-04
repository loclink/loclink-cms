import { IFormPageConfig } from '@/components/form-page/types';

const formPageConfig: IFormPageConfig = {
  formConfig: {
    layout: 'inline',
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
    labelAlign: 'right',
    colon: true
  },
  formItemsConfig: [
    {
      label: '用户名',
      type: 'input',
      name: 'username'
    },
    {
      label: '角色',
      type: 'input',
      name: 'role_name'
    }
  ]
};
export { formPageConfig };
