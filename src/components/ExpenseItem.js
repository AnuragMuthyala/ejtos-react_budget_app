import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { currency, dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    const increaseStyles = {
        backgroundColor: 'green',
        borderRadius: '50%',
        display: 'flex',    
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
        border: 'none',
    };

    const decreaseStyles = {
        backgroundColor: 'red',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
        border: 'none',
    };

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button style={increaseStyles} onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button style={decreaseStyles} onClick={event=> decreaseAllocation(props.name)}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;