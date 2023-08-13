import useWeather from '../hooks/useWeather';
import { formatWeatherData, isSunny } from '../utils/weather';
import { GoLocation } from 'react-icons/go';
import { BsSun, BsCloudHaze2 } from 'react-icons/bs';

const WeatherDataContainer = ({ location, isCelsius }) => {
    const data = useWeather(location, isCelsius);

    if(data.cod == '404') {
        return <div className='not-found'>City not found...</div>;
    }

    const { dayOfWeek, stringDate, description, temp, minTemp, maxTemp, windSpeed, humidity } = formatWeatherData(data?.list?.[0]);

    return (
        <div className='weather-data-container'>
            <div className='left-container'>
                <div className='general-data'>
                    <h2>{ dayOfWeek }</h2>
                    <span className='date'>{ stringDate }</span>
                    <span className='city'>
                        <GoLocation />
                        { data.city.name }
                    </span>
                </div>

                <div className='main-forecast-data'>
                    {
                        isSunny(temp, isCelsius) ?
                            <BsSun />
                        :
                            <BsCloudHaze2 />
                    }
                    <span className={ isCelsius ? 'degrees celsius' : 'degrees' }>{ temp }</span>
                    <span className='description'>{ description }</span>
                </div>
            </div>

            <div className='right-container'>
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
    );
};

export default WeatherDataContainer;