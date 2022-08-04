import React, { memo, useRef } from 'react';
import { Button, Cascader, DatePicker, Form, Input, InputNumber, Select, Switch, TreeSelect } from 'antd';
import { IFormPageConfig, ItemType } from './types';
import { FormPageWrapper } from './style';

interface Props {
  formPageConfig: IFormPageConfig;
  onFinish: (values: any) => void;
}

// 表单组件
const FormPage: React.FC<Props> = memo((props: Props) => {
  const { formPageConfig, onFinish } = props;
  const { formConfig, formItemsConfig } = formPageConfig;

  const formRef = useRef<any>();
  const handleFormItem = (type: ItemType, itemProps?: object) => {
    switch (type) {
      case 'input':
        return <Input {...itemProps} />;
      case 'select':
        return <Select {...itemProps} />;
      default:
        return null;
    }
  };

  return (
    <FormPageWrapper>
      <Form {...formConfig} onFinish={(values) => onFinish(values)} ref={formRef}>
        {formItemsConfig.map((item) => {
          return (
            <Form.Item className="form-item" label={item.label} key={item.label} name={item.name}>
              {handleFormItem(item.type)}
            </Form.Item>
          );
        })}

        <div style={{ width: '100%', position: 'relative', height: '32px' }}>
          <div style={{ position: 'absolute', right: '10px', display: 'flex' }}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
            </Form.Item>
            <Form.Item>
              <Button onClick={() => formRef.current.resetFields()}>重置</Button>
            </Form.Item>
          </div>
        </div>

        {/* <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[{ title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] }]}
          />
        </Form.Item>
        <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou'
                  }
                ]
              }
            ]}
          />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item> */}
      </Form>
    </FormPageWrapper>
  );
});

export default FormPage;
