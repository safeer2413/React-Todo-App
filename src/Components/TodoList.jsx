import React, { useState } from 'react'
import './todolist.css'
import { FaEdit, FaTrashAlt } from "react-icons/fa";

function TodoList({ items, setItems, goToView, setSelectedItem,
    setUpdate, gotoUpdate }) {

    const [show, setShow] = useState(true);
    const [selectItem, setSelectItem] = useState(null);
    const [filter, setFilter] = useState("all");

    const changeStatus = (id) => {
        const currentStatus = items.map((todo) =>
            todo.id === id ? { ...todo, status: !todo.status } : todo
        );

        setItems(currentStatus)
    }

    const deleteHandler = (id) => {
        setItems(items.filter(item => item.id !== id));

        if (selectItem && selectItem.id === id) {
            setSelectItem(null);
        }
    };

    const updateHandler = (id) => {
        const editText = items.find(item => item.id === id);
        setUpdate(editText);
        gotoUpdate()
    }

    const viewPage = (id) => {

        const item = items.find(item => item.id === id);
        setSelectedItem(item);
        goToView();
    }

    const getFilteredItems = () => {
        switch (filter) {
            case "completed":
                return items.filter(item => item.status);
            case "incomplete":
                return items.filter(item => !item.status);
            default:
                return items;
        }
    };

    return (
        <>
            <ul>
                <section className='hide-show'>
                    <button onClick={() => setShow(!show)} className="toggle"><strong>{show ? "Hide" : "Show"}</strong></button>
                    <div className="filter-section">
                        <button onClick={() => setFilter("all")}>All</button>
                        <button onClick={() => setFilter("completed")}>Completed</button>
                        <button onClick={() => setFilter("incomplete")}>Incomplete</button>
                    </div>
                </section>

                {show && getFilteredItems().map((item, index) => (

                    <div key={index} className={item?.status ? 'completed todo-list' : 'incomplete todo-list'}>
                        <li>
                            <input className='checkbox'
                                type="checkbox"
                                checked={item?.status}
                                onChange={() => changeStatus(item.id)}
                            />
                            <span>{item?.items}</span>
                        </li>

                        <div className='btn-group'>
                            <button onClick={() => updateHandler(item.id)} className="edit icon">
                                <FaEdit />
                                <span className="tooltip-text">Edit</span>
                            </button>
                            <button onClick={() => viewPage(item.id)} className="view icon">
                                View
                                <span className="tooltip-text">View</span>
                            </button>
                            <button onClick={() => deleteHandler(item.id)} className='delete icon'>
                                <FaTrashAlt />
                                <span className="tooltip-text">Delete</span>
                            </button>
                        </div>
                    </div>

                ))}
            </ul>

        </>
    )
}

export default TodoList