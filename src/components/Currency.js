import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch } = useContext(AppContext);
    const handleCurrencyChange = (event) => {

        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        });
    }

    const dropdownStyles = {
        backgroundColor: 'green',
        color: 'white',
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
    };
    
    const optionStyles = {
        backgroundColor: 'green',
        color: 'white',
    };
    
    const selectStyles = {
        position: 'relative',
        display: 'inline-block',
    };

    return (
<div className='alert alert-success' style={selectStyles}>
<span>Currency:</span>
<select id = 'currency' onChange={handleCurrencyChange} style={dropdownStyles}>
    <option value="₹" style={optionStyles}>Rupee (₹)</option>
    <option value="$" style={optionStyles}>Dollar ($)</option>
    <option value="£" style={optionStyles}>Pound (£)</option>
    <option value="€" style={optionStyles}>Euro (€)</option>
</select>
</div>
    );
};
export default Budget;