import './App.css';
import RouteTable from './components/RouteTable';
import './css/style.css'

import ReactGA from "react-ga4";


ReactGA.initialize(process.env.REACT_APP_SERVICE_ID);

function App() {
  return (
    <div className="App">
      <RouteTable/>
    </div>
  );
}

export default App;