import React, { memo, useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from '@/store';
import { getUserListThunk } from '@/store/user';
import { IDataType } from './types';
import { useSelector } from 'react-redux';
import { IRootState } from '@/store/types';

import { useTableAction } from '@/hooks/useTableAction';

import { formPageConfig } from './config/form-page-config';
import { tablePageConfig } from './config/table-page-config';

import FormPage from '@/components/form-page';
import TablePage from '@/components/table-page';

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
    dispatch(getUserListThunk({}));
  }, []);

  // 处理列表数据 对应table格式
  useEffect(() => {
    setDataSource(handleDataSource(userListData));
  }, [userListData]);

  // 提交查询
  const onFinish = (formData: Record<string, any>): Promise<any> => {
    return dispatch(getUserListThunk(formData));
  };

  // 重置
  const onReset = (): Promise<any> => {
    return dispatch(getUserListThunk({}));
  };

  const onChangePage = (page: number, pageSize: number) => {
    console.log(page, pageSize);
    dispatch(
      getUserListThunk({
        offset: (page - 1) * pageSize,
        limit: pageSize
      })
    );
  };

  return (
    <div>
      <FormPage formPageConfig={formPageConfig} onFinish={onFinish} onReset={onReset} />
      <TablePage<IDataType>
        tablePageConfig={config}
        dataSource={dataSource}
        total={userListData.total}
        onChangePage={onChangePage}
      />
    </div>
  );
});

User.displayName = 'User';
export default User;
