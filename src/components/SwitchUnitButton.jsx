import * as Switch from '@radix-ui/react-switch';

const SwitchUnitButton = ({ isCelsius, setIsCelsius }) => {
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
