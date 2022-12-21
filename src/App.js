import { useState, useEffect } from "react";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import SearchItem from "./SearchItem";
import apiRequest from './apiRequest';
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
        setTimeout(() => {
            fetchData();
        }, 2000);
    }, []);

    const handleCheck = async (id) => {
        const newItems = items.map((item) => {
            if (item.id === id)
                item.checked = !item.checked;
            return item;
        });
        setItems(newItems);
        const newItem = items.filter((item) => item.id === id);
        const updateOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ checked: newItem[0].checked })
        };
        const reqUrl = `${API_URL}/${id}`;
        const result = await apiRequest(reqUrl, updateOptions);
        if (result) 
            setCatchError(result);
    };

    const handleDelete = async (id) => {
        const newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
        const deleteOptions = { method: 'DELETE' };
        const reqUrl = `${API_URL}/${id}`;
        const result = await apiRequest(reqUrl, deleteOptions);
        if (result) 
            setCatchError(result);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem();
        setInputItem('');
    };

    const addItem = async () => {
        const newItem = {
            id: items.length ? items[items.length - 1].id + 1 : 1,
            checked: false,
            description: `${inputItem}`
        }
        const newItems = [...items, newItem];
        setItems(newItems);
        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        }
        const result = await apiRequest(API_URL, postOptions);
        if (result) 
            setCatchError(result);
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