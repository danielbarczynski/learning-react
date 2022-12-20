import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
    const [items, setItem] = React.useState([
        {
            id: 1,
            checked: false,
            description: 'milk'
        },
        {
            id: 2,
            checked: false,
            description: 'bananas'
        },
        {
            id: 3,
            checked: false,
            description: 'juice'
        }
    ]);

    const handleCheck = (id) => {
        const newItems = items.map((x) => x.id === id ? { ...x, checked: !x.checked } : x);
        setItem(newItems);
        localStorage.setItem('groceryList', JSON.stringify(newItems)); // naming it grocery list
    }

    const handleDelete = (id) => {
        const newItems = items.filter((x) => x.id !== id);
        setItem(newItems);
        localStorage.setItem('groceryList', JSON.stringify(newItems));
    }

    return (
        <main>
            {items.length ? (
            <ul>
                {items.map((item) => (
                    <li key={item.id} className='item'>
                        <input
                            type="checkbox"
                            onChange={() => handleCheck(item.id)}
                            checked={item.checked}
                        />
                        <label
                            style={item.checked ? {textDecoration: 'line-through'} : null}
                            onDoubleClick={() => handleCheck(item.id)}
                        >{item.description}</label>
                        <FaTrashAlt 
                            role="button" 
                            tabIndex="0"
                            onClick={() => handleDelete(item.id)}    
                        />
                    </li>
                ))}
            </ul>
            ) : (
                <p>Your list is empty</p>
            )}
        </main>
    )
};

export default Content;