import { IFormPageConfig } from '@/components/form-page/types';
import { getRoleListThunk } from '@/store/role';
import store from '@/store';

const formPageConfig: IFormPageConfig = {
  formConfig: {
    layout: 'horizontal',
    labelAlign: 'right',
    colon: true,
  },

  formItemsConfig: [
    [
      {
        key: 'username',
        label: '用户名',
        type: 'input',
        name: 'username'
      },
      {
        label: '角色',
        type: 'select',
        name: 'role',
        key: 'role',
        size: 'large',
        width: 200,
        request: async () => {
          const roleListData = await store.dispatch<any>(getRoleListThunk());
          if (roleListData.payload.code === 200) {
            return roleListData.payload.data.list.map((item: any) => ({ label: item.role_name, value: item.id }));
          } else {
            return [];
          }
        }
      }
    ]
  ]
};
export { formPageConfig };
