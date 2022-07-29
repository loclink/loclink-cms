import React, { memo, ReactNode } from 'react';
import { Layout } from 'antd';
import { FrameWrapper } from './style';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store/types';

interface Props {
  header?: ReactNode;
  side?: ReactNode;
  content?: ReactNode;
}

const Frame: React.FC<Props> = memo((props: Props) => {
  const { menuCollapsed } = useSelector((state: IRootState) => state.user);

  return (
    <FrameWrapper>
      <Layout className="layout-side">
        <Layout.Sider trigger={null} collapsible collapsed={menuCollapsed}>
          {props.side}
        </Layout.Sider>
        <Layout className="layout-right">
          <Layout.Header className="header" style={{ padding: 0 }}>
            {props.header}
          </Layout.Header>
          <Layout.Content
            className="content"
            style={{
              margin: 20,
              padding: 20
            }}
          >
            {props.content}
          </Layout.Content>
        </Layout>
      </Layout>
    </FrameWrapper>
  );
});

Frame.displayName = 'Frame';
export default Frame;
