import { useState } from 'react';
import { useWeather } from '../context/WeatherProvider';
import SwitchUnitButton from './SwitchUnitButton';

const WeatherControls = () => {
    const { setLocation } = useWeather();
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();

        setLocation(query);
        setQuery('');
    };

    return (
        <header>
            <SwitchUnitButton />

            <form onSubmit={ handleSearch }>
                <input
                    type='text'
                    value={ query }
                    onChange={ (e) => setQuery(e.target.value) }
                    placeholder='Search for a place...'
                />
                <button type='submit' disabled={ query ? false : true }>
                    Search
                </button>
            </form>
        </header>
    );
};

export default WeatherControls;
