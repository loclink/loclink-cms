import React, { memo } from 'react';
import { Table, Pagination } from 'antd';
import { ITablePageConfig } from './types';
import TableHeader from './cpns/header';

interface Props<T> {
  tablePageConfig: ITablePageConfig<T>;
  dataSource: T[];
  total: number
}

// 表格组件
const TablePage = <T extends {}>(props: Props<T>) => {
  const { tablePageConfig, dataSource = [], total } = props;
  const { tableConfig, columns } = tablePageConfig;
  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        bordered={tableConfig.bordered}
        size={tableConfig.size}
        title={() => <TableHeader title={tableConfig.title} />}
      />
      {
        tableConfig.showPagination ? 
        <div style={{ height:'32px', width:'100%', position:'relative'}}>
          <Pagination style={{marginTop:'10px', position:'absolute', right:0}} total={total}/>
        </div> : null
      }
    </>
  );
};

// 包装memo
const TablePageWrapped = <T extends {}>(props: Props<T>) => React.createElement(memo(TablePage<T>), {...props})

export default TablePageWrapped;
