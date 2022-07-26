import { IDataType } from '../types';
import { formatDate } from '@/utils/format';
import type { ITablePageConfig } from '@/components/table-page/types';

const tablePageConfig: ITablePageConfig<IDataType> = {
  tableConfig: {
    title: '用户列表：',
    bordered: true,
    size: 'small',
    showPagination: true
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
      align: 'center',
      render: (value) => value.role_name
    },
    {
      title: '上次登录ip',
      dataIndex: 'last_login_ip',
      key: 'last_login_ip',
      align: 'center',
      render: (value) => value ?? '——'
    },
    {
      title: '上次登录时间',
      key: 'last_login_time',
      dataIndex: 'last_login_time',
      align: 'center',
      render: (value) => formatDate(value) ?? '——'
    },
    {
      title: '创建时间',
      key: 'created',
      dataIndex: 'created',
      align: 'center',
      render: (value) => formatDate(value)
    },
    {
      title: '更新时间',
      key: 'updated',
      dataIndex: 'updated',
      align: 'center',
      render: (value) => formatDate(value)
    }
  ]
};

export { tablePageConfig };
