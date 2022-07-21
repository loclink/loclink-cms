import { useRoutes } from 'react-router-dom';
import Loading from './components/loading';
import { routes } from './router';


function App() {
  const routeElement = useRoutes(routes);
  return <div className="App">
    <Loading/>
    {routeElement}
    </div>;
}

export default App;
