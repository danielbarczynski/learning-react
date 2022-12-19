import React from "react";

function App(){
    const handleNameChange = () => {
        const names = ['Nathan', 'Elizabeth', 'Marcus', 'Kayla']
        let rand = Math.floor(Math.random() * 4);
        return names[rand];
    }

    return (
        <h1>Hello { handleNameChange() }</h1>
    )
}

export default App