import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import './index.css';

function App(){
    return (
        <div className="App">
            <Header />
            <Content />
            <Footer />
        </div>
    )
};

export default App;