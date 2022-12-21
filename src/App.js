import { useState, useEffect } from "react";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import SearchItem from "./SearchItem";
import "./index.css";


function App() {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('groceryList')));
    const [inputItem, setInputItem] = useState('');
    const [searchItem, setSearchItem] = useState('');

    useEffect(() => { //* updates state on changes in items. cannot use inside function
        localStorage.setItem('groceryList', JSON.stringify(items));
    }, [items]);

    const handleCheck = (id) => {
        const newItems = items.map((item) => {
            if (item.id === id)
                item.checked = !item.checked;
            return item;
        });

        setItems(newItems);
    };

    const handleDelete = (id) => {
        const newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem();
        setInputItem('');
    };

    const addItem = () => {
        const newItem = {
            id: items.length ? items[items.length - 1].id + 1 : 1,
            checked: false,
            description: `${inputItem}`
        }
        const newItems = [...items, newItem]; // uses useEffect
        // items.push(newItem); // not uses useEffect
        setItems(newItems)
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
            <SearchItem
                searchItem={searchItem}
                setSearchItem={setSearchItem}
            />
            <Content
                items={items.filter((item) => ((item.description).toLowerCase()).includes(searchItem.toLowerCase()))}
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