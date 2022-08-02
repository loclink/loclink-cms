import type { ColumnsType } from 'antd/es/table';

interface ITablePageConfig<T> {
  tableConfig: { title: string };
  columns: ColumnsType<T>;
}

export type { ITablePageConfig };
