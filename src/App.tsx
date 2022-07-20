import { useRoutes } from 'react-router-dom';
import { routes } from './router';


function App() {
  const routeElement = useRoutes(routes);
  return <div className="App">{routeElement}</div>;
}

export default App;
