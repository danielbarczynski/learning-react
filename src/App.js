import { useState, useEffect } from "react";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import SearchItem from "./SearchItem";
import "./index.css";


function App() {
    const API_URL = 'http://localhost:3500/items';
    const [items, setItems] = useState([]);
    const [inputItem, setInputItem] = useState('');
    const [searchItem, setSearchItem] = useState('');
    const [catchError, setCatchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);

                if (!response.ok) 
                    throw Error('Did not receive expected data');

                const dbItems = await response.json();
                setItems(dbItems);

            } catch (error) {
                setCatchError(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        
        // (async () => await fetchData())();
        setTimeout(() => {
            fetchData();
        }, 2000);
    }, []);

   

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
                catchError={catchError}
                isLoading={isLoading}
            />
            <Footer
                length={items.length}
            />
        </div>
    )
};

export default App;