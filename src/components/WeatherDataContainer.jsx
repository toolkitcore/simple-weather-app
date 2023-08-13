import useWeather from '../hooks/useWeather';
import { formatWeatherData } from '../utils/weather';

const WeatherDataContainer = ({ location, isCelsius }) => {
    const data = useWeather(location, isCelsius);

    if(data.cod == '404') {
        return <div>City not found...</div>;
    }

    const { dayOfWeek, stringDate, description, temp, minTemp, maxTemp, windSpeed, humidity } = formatWeatherData(data?.list?.[0]);

    return (
        <div className='weather-data-container'>
            <div className='left-container'>
                <div className='general-data'>
                    <h2>{ dayOfWeek }</h2>
                    <span className='date'>{ stringDate }</span>
                    <span className='city'>{ data.city.name }</span>
                </div>

                <div className='main-forecast-data'>
                    <span className={ isCelsius ? 'celsius' : '' }>{ temp }</span>
                    <span>{ description }</span>
                </div>
            </div>

            <div className='right-container'>
                <div className='forecast-data'>
                    <div>
                        <strong>MIN TEMP</strong>
                        <span>{ minTemp }</span>
                    </div>

                    <div>
                        <strong>MAX TEMP</strong>
                        <span>{ maxTemp }</span>
                    </div>

                    <div>
                        <strong>HUMIDITY</strong>
                        <span>{ humidity }</span>
                    </div>

                    <div>
                        <strong>WIND</strong>
                        <span>{ windSpeed }</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherDataContainer;