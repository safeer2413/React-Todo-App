import React, { useState } from 'react'

function AddTask({ items, setItems }) {

    const [itemValue, setItemValue] = useState("")

    const addItems = (e) => {
        e.preventDefault();

        if (itemValue.trim() !== '') {

            const todos = {
                id: Math.floor(Math.random() * 10000),
                items: itemValue,
                timestamp: new Date(),
                status: false,
            };

            setItems([todos, ...items]);
            setItemValue("")
        }

    };
    return (
        <>
            <form onSubmit={addItems} className="input-section">

                <h1>Todo App</h1>

                <textarea name="text"
                    placeholder='Enter Items...'
                    onChange={(e) => setItemValue(e.target.value)}
                    value={itemValue}
                />

                <button type='submit'><strong>Add Todo</strong></button>
            </form>
        </>
    )
}

export default AddTask