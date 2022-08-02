import React from 'react';
import { Table } from 'antd';
import { ITablePageConfig } from './types';

interface Props<T> {
  tablePageConfig: ITablePageConfig<T>;
  dataSource: T[];
}

const TablePage = <T extends {}>(props: Props<T>) => {
  const { tablePageConfig, dataSource } = props;
  return (
    <div>
      <Table
        columns={tablePageConfig.columns}
        dataSource={dataSource}
        bordered
        title={() => <div>{tablePageConfig.tableConfig.title}</div>}
        footer={() => 'Footer'}
      />
    </div>
  );
};

export default TablePage;
