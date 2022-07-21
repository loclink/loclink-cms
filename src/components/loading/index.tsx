import React, { memo } from 'react';
import { Spin } from 'antd';
import { LoadingWrapper } from './style';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store/types';

const Loading = memo(() => {
  const { loading } = useSelector((state: IRootState) => state.user);

  return (
    <LoadingWrapper showAnima={loading}>
      <Spin className="spin-content" size="large" />
    </LoadingWrapper>
  );
});

Loading.displayName = 'loading';
export default Loading;
