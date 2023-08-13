import { createContext, useContext, useState } from 'react';

const WeatherContext = createContext();

export const useWeather = () => {
    return useContext(WeatherContext);
};

export const WeatherProvider = ({ children }) => {
    const [location, setLocation] = useState('');
    const [isCelsius, setIsCelsius] = useState(true);

    const value = {
        location,
        isCelsius,
        setLocation,
        setIsCelsius,
    };

    return (
        <WeatherContext.Provider value={ value }>
            { children }
        </WeatherContext.Provider>
    );
};
