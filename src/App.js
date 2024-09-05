import { useEffect } from 'react';
import './App.css';
import RouteTable from './components/RouteTable';
import './css/style.css'


function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_TRACKING_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', process.env.REACT_APP_TRACKING_ID);
  }, []);
  return (
    <div className="App">
      <RouteTable/>
    </div>
  );
}

export default App;