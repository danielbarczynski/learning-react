import React from "react";
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

    const handleCheck = (id) => {
        // const newItems = item.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        const newItems2 = items.map((item) => {
            if (item.id === id)
                item.checked = !item.checked;
            return item; // for every item return item
        })

        setItems(newItems2);
        localStorage.setItem('groceryList', JSON.stringify(newItems2)); // naming it grocery list
    }

    const handleDelete = (id) => {
        const newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
        localStorage.setItem('groceryList', JSON.stringify(newItems));
    }

    return (
        <div className="App">
            <Header 
                title="Groceries"
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