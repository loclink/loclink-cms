import React, { memo } from 'react';
import { Table } from 'antd';
import { ITablePageConfig } from './types';
import TableHeader from './cpns/header';

interface Props<T> {
  tablePageConfig: ITablePageConfig<T>;
  dataSource: T[];
}

// 表格组件
const TablePage = <T extends {}>(props: Props<T>) => {
  const { tablePageConfig, dataSource = [] } = props;
  const { tableConfig, columns } = tablePageConfig;
  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        bordered={tableConfig.bordered}
        size={tableConfig.size}
        title={() => <TableHeader title={tableConfig.title} />}
      />
    </>
  );
};

// 包装memo
const TablePageWrapped = <T extends {}>(props: Props<T>) => React.createElement(memo(TablePage<T>), {...props})

export default TablePageWrapped;
