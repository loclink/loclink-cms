import Loading from './components/loading';
import RouterGurad from './components/router-gurad';
import { routes } from './router';
function App() {
  return (
    <div className="App">
      <Loading />
      {RouterGurad(routes)}
    </div>
  );
}

export default App;
