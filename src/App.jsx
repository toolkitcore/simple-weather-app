import './App.css';
import { useState } from 'react';
import WeatherControls from './components/WeatherControls';
import WeatherDataContainer from './components/WeatherDataContainer';

function App() {
  const [location, setLocation] = useState('');
  const [isCelsius, setIsCelsius] = useState(true);

  return (
    <div>
        <WeatherControls
          isCelsius={ isCelsius }
          setIsCelsius={ setIsCelsius }
          setLocation={ setLocation }
        />
        <WeatherDataContainer location={ location } isCelsius={ isCelsius } />
    </div>
  );
}

export default App;
