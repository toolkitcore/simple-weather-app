import * as Switch from '@radix-ui/react-switch';

const SwitchUnitButton = ({ isCelsius, setIsCelsius }) => {
    return (
        <div className='switch-unit-container'>
            <Switch.Root
                checked={ isCelsius }
                onCheckedChange={ (isChecked) => setIsCelsius(isChecked) }
                className='toggle'
            >
                <Switch.Thumb className={ isCelsius ? 'switch-thumb celsius' : 'switch-thumb' } />
            </Switch.Root>
        </div>
    );
};

export default SwitchUnitButton;
