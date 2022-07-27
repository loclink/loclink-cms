import React, { Suspense } from 'react';
import { routes } from './router';
import RouterGurad from './components/router-gurad';
import Loading from './components/loading';
import { useSetToken } from './hooks/useSetToken';
import { useGetBasicData } from './hooks/useGetBasicData';

// 使用Suspense，将在渲染组件之前等待一些操作
const App: React.FC = () => {
  return (
    <div className="App">
      <Loading />
      <Suspense>{RouterGurad(routes)}</Suspense>
    </div>
  );
};

export default App;
