import React from 'react';

const Content = () => {
    const handleNameChange = () => {
        const names = ['Nathan', 'Elizabeth', 'Marcus', 'Kayla']
        let rand = Math.floor(Math.random() * 4);
        return names[rand];
    }

    const handleClickEvent = () => console.log('You clicked me');
    const handleClickEvent2 = (name) => console.log(name);
    const handleClickEvent3 = (e) => console.log(e.target);
    
    return (
        // styling same as in index.css just for learning purposes
        <main style={{fontSize: '22px', color: 'aliceblue'}}>
            Hello {handleNameChange()}
            <button onClick={handleClickEvent}>Click me</button>
            {/* this will be automatically invoked at start - bad practice */}
            {/* <button onClick={handleClickEvent2('Daniel')}>Click me</button>  */}
            <button onClick={() => handleClickEvent2('Daniel')}>Click me</button> 
            <button onClick={(e) => handleClickEvent3(e)}>Click me</button>
        </main>
    )
};

export default Content;