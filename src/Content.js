import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['Nathan', 'Elizabeth', 'Marcus', 'Kayla']
        let rand = Math.floor(Math.random() * 4);
        return names[rand];
    }

    return (
        <main>Hello {handleNameChange()}</main>
    )
}

export default Content