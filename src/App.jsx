import './App.css';
import { Suspense, useState } from 'react';
import WeatherControls from './components/WeatherControls';
import WeatherDataContainer from './components/WeatherDataContainer';

function App() {
  const [location, setLocation] = useState('');
  const [isCelsius, setIsCelsius] = useState(true);

  return (
      <Suspense fallback={ <div className='loader'></div> }>
        />
      </Suspense>
    </div>
  );
}

export default App;
