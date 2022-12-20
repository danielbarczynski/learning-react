import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

//* very useful, because it is used every time we add a new element to the list
const LineItem = ({item, handleCheck, handleDelete}) => {
    return (
        <li key={item.id} className='item'>
            <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
            />
            <label
                style={item.checked ? { textDecoration: 'line-through' } : null}
                onDoubleClick={() => handleCheck(item.id)}
            >{item.description}</label>
            <FaTrashAlt
                role="button"
                tabIndex="0"
                onClick={() => handleDelete(item.id)}
            />
        </li>
    )
}

export default LineItem