import { IFormPageConfig } from '@/components/form-page/types';

const formPageConfig: IFormPageConfig = {
  formConfig: {
    layout: 'horizontal',
    labelAlign: 'right',
    colon: true,
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  },
  formItemsConfig: [
    {
      key: 'username',
      label: '用户名',
      type: 'input',
      name: 'username'
    },
    {
      label: '角色',
      type: 'select',
      name: 'role_name',
      key: 'role_name',
      wrapperCol: {
        span: 20
      },
      itemProps: {
        allowClear: true,
        loading: true
      }
    }
  ]
};
export { formPageConfig };
