import { IDataType } from '../types';
import { formatDate } from '@/utils/format';
import type { ITablePageConfig } from '@/components/table-page/types';

const tablePageConfig: ITablePageConfig<IDataType> = {
  tableConfig: {
    title: '用户管理：',
    bordered: true,
    size: 'small'
  },

  columns: [
    {
      title: 'id',
      dataIndex: 'key',
      key: 'id',
      align: 'center'
    },
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
      align: 'center'
    },
    {
      title: '角色',
      key: 'role_name',
      dataIndex: 'role',
      render: (value) => value.role_name,
      align: 'center'
    },
    {
      title: '上次登录ip',
      dataIndex: 'last_login_ip',
      key: 'last_login_ip',
      align: 'center'
    },
    {
      title: '上次登录时间',
      key: 'last_login_time',
      dataIndex: 'last_login_time',
      render: (value) => formatDate(value),
      align: 'center'
    },
    {
      title: '创建时间',
      key: 'created',
      dataIndex: 'created',
      render: (value) => formatDate(value),
      align: 'center'
    },
    {
      title: '更新时间',
      key: 'updated',
      dataIndex: 'updated',
      render: (value) => formatDate(value),
      align: 'center'
    }
  ]
};

export { tablePageConfig };
