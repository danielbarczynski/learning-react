import React from "react";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

import './index.css';

function App(){
    const [items, setItems] = React.useState([
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

    const [inputItem, setInputItem] = React.useState('');

    const handleCheck = (id) => {
        const newItems = items.map((item) => {
            if (item.id === id)
                item.checked = !item.checked;
            return item;
        });

        saveItems(newItems);
    };

    const handleDelete = (id) => {
        const newItems = items.filter((item) => item.id !== id);
        saveItems(newItems);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem();
        setInputItem('');
    };

    const addItem = () => {
        const newItem = {
            id: items[items.length - 1].id + 1,
            checked: false,
            description: `${inputItem}` 
        }

        items.push(newItem);
        saveItems(items);
    }

    const saveItems = (newItems) => {
        setItems(newItems);
        localStorage.setItem('groceryList', JSON.stringify(newItems));
    }
    return (
        <div className="App">
            <Header 
                title="Groceries"
            />
            <AddItem 
                handleSubmit={handleSubmit}
                inputItem={inputItem}
                setInputItem={setInputItem}
            />
            <Content
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
            <Footer 
                length={items.length}
            />
        </div>
    )
};

export default App;