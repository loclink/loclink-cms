import React from 'react';
import Loading from './components/loading';
import RouterGurad from './components/router-gurad';

import { routes } from './router';
import { useSetToken } from './hooks/useSetToken';

const App: React.FC = () => {
  useSetToken();
  return (
    <div className="App">
      <Loading />
      <RouterGurad routes={routes}></RouterGurad>
    </div>
  );
};

export default App;
