import { useCallback, useEffect, useState } from 'react';
import { ITablePageConfig } from '../components/table-page/types';
import { useAppDispatch } from '../store';
import { getUserListThunk } from '../store/user';
import { IDataType } from '../views/main/system/user/types';
import { useTableAction } from './useTableAction';

type PageType = 'user' | 'menu';

const useTablePage = <T>(pageType: PageType, tablePageConfig:ITablePageConfig<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [dataSource, setDataSource] = useState([]);
  const [total, setTotal] = useState<number>(0);
  const [condition, setCondition] = useState({});

  const dispatch = useAppDispatch();

    // 处理点击编辑按钮
    const handleClickEditBtn = useCallback((record: IDataType) => {
      console.log(record);
    }, []);
  
    // 处理点击删除按钮
    const handleClickDeleteBtn = useCallback((record: IDataType) => {
      console.log(record);
    }, []);
  
    //  加入 action
    const config = useTableAction<T>(tablePageConfig, [
      {
        name: '编辑',
        onClick: handleClickEditBtn
      },
      {
        name: '删除',
        onClick: handleClickDeleteBtn
      }
    ]);

  // 处理表格数据
  const handleDataSource = (listData: any) => {
    setDataSource(listData.list.map((item: any) => ({ ...item, key: item.id })));
  };

  // 重置
  const onReset = useCallback((): Promise<void | boolean> => {
    return new Promise((resolve) => {
      setCurrentPage(1);
      setPageSize(10);
      setCondition({});
      resolve(true);
    });
  }, [condition]);

  // 提交查询
  const onFinish = useCallback(
    (formData: Record<string, any>): Promise<void | boolean> => {
      return new Promise((resolve) => {
        setCondition(formData);
        resolve(true);
      });
    },
    [condition]
  );

  // 改变页码
  const onChangePage = useCallback(
    (page: number, pageSize: number) => {
      setCurrentPage(page);
      setCondition({
        ...condition,
        offset: (page - 1) * pageSize,
        limit: pageSize
      });
    },
    [condition]
  );

  useEffect(() => {
    getListData();
  }, [condition]);

  // 获取列表数据
  const getListData = useCallback(async () => {
    switch (pageType) {
      case 'user':
        return await dispatch(getUserListThunk(condition)).then((res: any) => {
          handleDataSource(res.payload.data);
          setTotal(res.payload.data.total);
        });
      case 'menu':
        break;
      default:
        break;
    }
  }, [condition]);

  return { total, dataSource, currentPage, pageSize, onChangePage, onReset, onFinish, config };
};
export { useTablePage };
