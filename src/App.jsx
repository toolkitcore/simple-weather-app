import './App.css';
import WeatherControls from './components/WeatherControls';
import { WeatherProvider } from './context/WeatherProvider';

function App() {
  return (
    <WeatherProvider>
      <WeatherControls />
    </WeatherProvider>
  );
}

export default App;
