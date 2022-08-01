import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons';
import type { ActionType } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button, Dropdown, Menu, Space, Tag } from 'antd';
import React, { useRef } from 'react';
import {IColumns} from './types'



const menu = (
  <Menu>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

interface Props {
  config: IColumns
}
const ProTablePage: React.FC<Props> = (props: Props) => {
  const { config } = props
  const actionRef = useRef<ActionType>();
  return (
    <ProTable
      columns={config}
      actionRef={actionRef}
      cardBordered
      editable={{
        type: 'multiple'
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
        onChange(value: any) {
          console.log('value: ', value);
        }
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto'
      }}
      options={{
        setting: {
          listsHeight: 400
        }
      }}
      form={{
        // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
        syncToUrl: (values, type) => {
          if (type === 'get') {
            return {
              ...values,
              created_at: [values.startTime, values.endTime]
            };
          }
          return values;
        }
      }}
      pagination={{
        pageSize: 5,
        onChange: (page: any) => console.log(page)
      }}
      dateFormatter="string"
      headerTitle="高级表格"
      toolBarRender={() => [
        <Button key="button" icon={<PlusOutlined />} type="primary">
          新建
        </Button>,
        <Dropdown key="menu" overlay={menu}>
          <Button>
            <EllipsisOutlined />
          </Button>
        </Dropdown>
      ]}
    />
  );
};

export default ProTablePage;
