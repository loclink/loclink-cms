import React, { memo } from 'react';
import Frame from '../frame';

const FallbackComponent = memo(() => {
  return <Frame />;
});

FallbackComponent.displayName = 'FallbackComponent';
export default FallbackComponent;
