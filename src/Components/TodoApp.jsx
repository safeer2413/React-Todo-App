import React from 'react'
import './todo.css'
import TodoList from './TodoList';
import AddTask from './AddTask';

function TodoApp({ goToView, setSelectedItem, gotoUpdate,
  setUpdate, items, setItems }) {

  return (
    <div className='todo-container'>

      <AddTask items={items} setItems={setItems} />
      {items.length === 0 ? (
        <h3 className='box'>No Items !</h3>
      ) : (
        <TodoList
          items={items}
          setItems={setItems}
          setUpdate={setUpdate}
          gotoUpdate={gotoUpdate}
          goToView={goToView}
          setSelectedItem={setSelectedItem}
        />
      )}

    </div>
  )
}

export default TodoApp