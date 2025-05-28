import React, { useState } from 'react'
import './editPage.css'
function EditPage({ update, setItems, goToList }) {

    const [itemValue, setItemValue] = useState(update?.items ?? "")

    const updateHandler = (e) => {
        e.preventDefault();

        if (itemValue.trim() !== '') {

            const updateTodo = {
                id: update.id,
                items: itemValue,
                timestamp: new Date().toLocaleString(),
                status: update.status,
            };

            setItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === updateTodo.id ? updateTodo : item
                )
            );

            ; goToList();
        };
        ;
    };

    const backButton = () => {
        goToList()
    }

    return (
        <>
            <form onSubmit={updateHandler} className="edit-input">

                <textarea name="text"
                    placeholder='Edit Item...'
                    value={itemValue}
                    onChange={(e) => setItemValue(e.target.value)}

                />
                <div className='btns'>
                    <button type='submit'><strong>Update</strong></button>
                    <button onClick={backButton}>Cancel</button>
                </div>

            </form>
        </>
    )
}

export default EditPage