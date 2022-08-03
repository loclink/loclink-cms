import React, { memo } from 'react';
import { TableHeaderWrapper } from './style';

interface Props {
  title: string;
}
const TableHeader: React.FC<Props> = memo((props: Props) => {
  const { title } = props;
  return <TableHeaderWrapper>{title}</TableHeaderWrapper>;
});

export default TableHeader;
export {};
