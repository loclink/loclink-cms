import React, { memo } from 'react';
import { Button } from 'antd';
import { ProForm, ProFormSelect, ProFormText, ProFormDateTimeRangePicker } from '@ant-design/pro-components';
import { IFormPageConfig, IFormItemConfig } from './types';
import { FormPageWrapper } from './style';

interface Props {
  formPageConfig: IFormPageConfig;
  onFinish: (formData: Record<string, any>) => Promise<boolean | void>;
  onReset: () => Promise<boolean | void>;
}

// 表单组件
const FormPage: React.FC<Props> = memo((props: Props) => {
  const { formPageConfig, onFinish, onReset } = props;
  const { formConfig, formItemsConfig } = formPageConfig;

  // 根据类型处理表单项目
  const handleFormItem = (item: IFormItemConfig) => {
    switch (item.type) {
      case 'input':
        return <ProFormText {...item} />;
      case 'select':
        return <ProFormSelect {...item} />;
      case 'dateTimeRangePicker':
        return <ProFormDateTimeRangePicker {...item} />;
      default:
        return null;
    }
  };

  // 处理表单分组数据
  const handleGroupForm = (formItem: IFormItemConfig[], index: number) => {
    return <ProForm.Group key={index}>{formItem.map((item) => handleFormItem(item))}</ProForm.Group>;
  };

  return (
    <FormPageWrapper>
      <ProForm
        {...formConfig}
        onFinish={onFinish}
        submitter={{
          render: (_) => {
            return (
              <div className="commit-footer">
                <div className="btn-wrapper">
                  <Button type="primary" htmlType="submit">
                    查询
                  </Button>
                  <Button
                    onClick={() => {
                      _.reset();
                      onReset();
                    }}
                  >
                    重置
                  </Button>
                </div>
              </div>
            );
          }
        }}
      >
        {formItemsConfig.map((item, index) => handleGroupForm(item, index))}
      </ProForm>
    </FormPageWrapper>
  );
});

export default FormPage;
