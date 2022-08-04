type ItemType = 'input' | 'select' | 'datePicker';

interface formItemConfig {
  label: string;
  colon?: boolean;
  type: ItemType;
  name: string;
  itemProps?: object;
}

interface IFormPageConfig {
  formConfig: {
    labelCol?: { span?: number; offset?: number };
    wrapperCol?: { span?: number; offset?: number };
    layout?: 'horizontal' | 'vertical' | 'inline';
    size?: 'small' | 'middle' | 'large';
    labelAlign?: 'left' | 'right';
    colon?: boolean;
  };

  formItemsConfig: formItemConfig[];
}
export type { IFormPageConfig, ItemType };
