import * as Switch from '@radix-ui/react-switch';
import { useWeather } from '../context/WeatherProvider';

const SwitchUnitButton = () => {
    const { isCelsius, setIsCelsius } = useWeather();

    return (
        <div className='switch-unit-container'>
            <label htmlFor='temp-unit'>Toggle</label>

            <Switch.Root
                checked={ isCelsius }
                onCheckedChange={ (isChecked) => setIsCelsius(isChecked) }
                className='toggle'
                id='temp-unit'
            >
                <Switch.Thumb className='switch-thumb' />
            </Switch.Root>
        </div>
    );
};

export default SwitchUnitButton;
