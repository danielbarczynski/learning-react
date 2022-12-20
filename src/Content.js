import React from 'react';

const Content = () => {
    const handleNameChange = () => {
        const names = ['Nathan', 'Elizabeth', 'Marcus', 'Kayla']
        let rand = Math.floor(Math.random() * 4);
        return names[rand];
    }

    return (
        // styling same as in index.css just for learning purposes
        <main style={{fontSize: '22px', color: 'aliceblue'}}>
            Hello {handleNameChange()}
        </main>
    )
};

export default Content;