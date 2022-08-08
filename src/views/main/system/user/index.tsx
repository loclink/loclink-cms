import React, { memo } from 'react';

import { formPageConfig } from './config/form-page-config';
import { tablePageConfig } from './config/table-page-config';

import FormPage from '@/components/form-page';
import TablePage from '@/components/table-page';

import { useTablePage } from '@/hooks/useTablePage';

import { IDataType } from './types';

const User = memo(() => {
  const { total, dataSource, currentPage, pageSize, onChangePage, onReset, onFinish, config } = useTablePage<IDataType>(
    'user',
    tablePageConfig
  );

  return (
    <div>
      <FormPage formPageConfig={formPageConfig} onFinish={onFinish} onReset={onReset} />
      <TablePage<IDataType>
        tablePageConfig={config}
        dataSource={dataSource}
        total={total}
        onChangePage={onChangePage}
        currentPage={currentPage}
        pageSize={pageSize}
      />
    </div>
  );
});

User.displayName = 'User';
export default User;
