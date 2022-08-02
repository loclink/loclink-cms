import type { ITablePageConfig } from '@/components/table-page/types';
import  { IDataType } from '../types';

const tablePageConfig: ITablePageConfig<IDataType> = {
  tableConfig: {
    title: '用户管理'
  },
  columns: [
    {
      title: '用户名',
      dataIndex: 'username'
    }
  ]
};

export { tablePageConfig };
