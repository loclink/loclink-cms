import { ITablePageConfig } from '../components/table-page/types';
import { Button } from 'antd';
const useTableAction = <T extends {}>(config: ITablePageConfig<T>, btnInfo: any[]): ITablePageConfig<T> => {
  return {
    tableConfig: { ...config.tableConfig },
    columns: [
      ...config.columns,
      {
        title: '操作',
        key: 'action',
        render: (_: any, record: T) => {
          return (
            <>
              {btnInfo.map((item) => {
                return (
                  <Button type="link" key={item.name} onClick={() => item.onClick(record)}>
                    {item.name}
                  </Button>
                );
              })}
            </>
          );
        },
        align: 'center'
      }
    ]
  };
};
export { useTableAction };
