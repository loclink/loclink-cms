import React, { Suspense, useEffect } from 'react';
import Loading from './components/loading';
import RouterGurad from './components/router-gurad';
import { routes } from './router';
import { useSetToken } from './hooks/useSetToken';
import FallbackComponent from './components/fallback-component';

const App: React.FC = () => {
  useSetToken();
  return (
    <div className="App">
      <Loading />
      <Suspense fallback={<FallbackComponent />}>
        <RouterGurad routes={routes} />
      </Suspense>
    </div>
  );
};

export default App;
