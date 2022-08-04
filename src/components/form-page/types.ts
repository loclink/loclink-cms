import type { SelectProps } from 'antd/es/select';
import type { FormProps, FormItemProps } from 'antd/es/form';

type ItemType = 'input' | 'select' | 'datePicker';

interface formItemConfig extends FormItemProps {
  key: string | number;
  type: ItemType;
  itemProps?: object & SelectProps;
}

interface IFormPageConfig {
  formConfig: FormProps;
  formItemsConfig: formItemConfig[];
}
export type { IFormPageConfig, ItemType };
