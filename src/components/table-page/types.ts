import type { ColumnsType } from 'antd/es/table';

type SizeType = 'small' | 'middle' | 'large' | undefined;

interface ITablePageConfig<T> {
  tableConfig: { title: string; bordered?: boolean; size?: SizeType; };
  columns: ColumnsType<T>;
}

export type { ITablePageConfig };
