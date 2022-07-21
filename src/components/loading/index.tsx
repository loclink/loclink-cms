import React, { memo } from 'react';
import { Spin } from 'antd';
import { LoadingWrapper } from './style';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store/types';
import { useState } from 'react';
import { useEffect } from 'react';

const Loading = memo(() => {
  const { loading } = useSelector((state: IRootState) => state.user);
  const [style, setStyle] = useState<any>({
    opacity: 0,
    display: 'none'
  });

  useEffect(() => {
    if (loading) {
      setStyle({
        opacity: 1,
        display: 'flex'
      });
    } else {
      setStyle({ opacity: 0, display: 'flex' });
      setTimeout(() => {
        setStyle({
          opacity: 0,
          display: 'none'
        });
      }, 500);
    }
  }, [loading]);

  return (
    <LoadingWrapper style={style}>
      <Spin className="spin-content" size="large" />
    </LoadingWrapper>
  );
});

Loading.displayName = 'loading';
export default Loading;
