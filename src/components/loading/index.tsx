import React, { memo, useRef } from 'react';
import { Spin } from 'antd';
import { LoadingWrapper } from './style';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store/types';
import { useState } from 'react';
import { useEffect } from 'react';

const Loading = memo(() => {
  const hideTimer = useRef<any>();
  const showTimer = useRef<any>();
  const { loading } = useSelector((state: IRootState) => state.user);
  const [style, setStyle] = useState<any>({
    opacity: 0,
    display: 'none'
  });

  useEffect(() => {
    clearTimeout(showTimer.current);
    clearTimeout(hideTimer.current);
    if (loading) {
      showTimer.current = setTimeout(() => {
        setStyle({
          opacity: 1,
          display: 'flex'
        });
      }, 10);
    } else {
      setStyle({ opacity: 0, display: 'flex' });
      hideTimer.current = setTimeout(() => {
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
