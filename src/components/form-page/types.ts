import type { SelectProps } from 'antd/es/select';
import type { ProFormProps, ProFormItemProps, ProFieldRequestData } from '@ant-design/pro-components';
type ItemType = 'input' | 'select' | 'datePicker';

interface IFormItemProp {
  label: string;
  name: string;
  key: string | number;
  type: ItemType;
  request?: ProFieldRequestData<any>;
}

type IFormItemConfig = ProFormItemProps & SelectProps & IFormItemProp;

interface IFormPageConfig {
  formConfig: ProFormProps;
  formItemsConfig: IFormItemConfig[][];
}

export type { IFormPageConfig, ItemType, IFormItemConfig };
