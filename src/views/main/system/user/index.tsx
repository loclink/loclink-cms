import React, { memo, useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from '@/store';
import { getUserListAction } from '@/store/user';
import { tablePageConfig } from './config/table-page-config';
import { IDataType } from './types';
import { useSelector } from 'react-redux';
import { IRootState } from '@/store/types';
import { useTableAction } from '@/hooks/useTableAction';

import FormPage from '@/components/form-page';
import TablePage from '@/components/table-page';
import { formPageConfig } from './config/form-page-config';

const User = memo(() => {
  const dispatch = useAppDispatch();
  // const search = useRouteSearch();

  const { userListData } = useSelector((state: IRootState) => state.user);
  const [dataSource, setDataSource] = useState<any>([]);

  // 处理表格数据
  const handleDataSource = (userListData: any) => {
    return userListData.list.map((item: any) => ({ ...item, key: item.id }));
  };

  // 处理点击编辑按钮
  const handleClickEditBtn = useCallback((record: IDataType) => {
    console.log(record);
  }, []);

  // 处理点击删除按钮
  const handleClickDeleteBtn = useCallback((record: IDataType) => {
    console.log(record);
  }, []);

  //  加入表格 action
  const config = useTableAction<IDataType>(tablePageConfig, [
    {
      name: '编辑',
      onClick: handleClickEditBtn
    },
    {
      name: '删除',
      onClick: handleClickDeleteBtn
    }
  ]);

  // 拿到列表数据
  useEffect(() => {
    dispatch(getUserListAction());
  }, []);

  // 处理列表数据 对应table格式
  useEffect(() => {
    setDataSource(handleDataSource(userListData));
  }, [userListData]);

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      <FormPage formPageConfig={formPageConfig} onFinish={onFinish} />
      <TablePage<IDataType> tablePageConfig={config} dataSource={dataSource} total={userListData.total} />
    </div>
  );
});

User.displayName = 'User';
export default User;
