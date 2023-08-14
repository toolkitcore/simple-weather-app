import './App.css';
import { Suspense, useState } from 'react';
import WeatherControls from './components/WeatherControls';
import WeatherDataContainer from './components/WeatherDataContainer';

function App() {
  const [location, setLocation] = useState('');
  const [isCelsius, setIsCelsius] = useState(true);
  const [recentSearches, setRecentSearches] = useState([]);

  return (
    <>
      <WeatherControls
        isCelsius={ isCelsius }
        setIsCelsius={ setIsCelsius }
        setLocation={ setLocation }
        setRecentSearches={ setRecentSearches }
      />

      <Suspense fallback={ <div className='loader'></div> }>
        <WeatherDataContainer
          location={ location }
          isCelsius={ isCelsius }
          recentSearches={ recentSearches }
        />
      </Suspense>
    </>
  );
}

export default App;
