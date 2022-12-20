import React from 'react';

const Content = () => {
    const [count, setCount] = React.useState(0); // if all React imported. 0 is default int value for my counter
    // const [count, setCount] = useState(0); // if all just {useState} imported

    const handleNameChange = () => {
        const names = ['Nathan', 'Elizabeth', 'Marcus', 'Kayla']
        let rand = Math.floor(Math.random() * 4);
        return names[rand];
    }

    const handleClickEvent = () => {
        // count++; // can't because constant
        // setCount(count++); // it is also assigment to const 
        setCount(count + 1); // this is fine
        console.log(count) //* it also changes handleNameChange (from react virtual DOM)
    };
  
    return (
        // styling same as in index.css just for learning purposes
        <main style={{fontSize: '22px', color: 'aliceblue'}}>
            Hello {handleNameChange()}
            <button onClick={handleClickEvent}>Click me</button>
        </main>
    )
};

export default Content;