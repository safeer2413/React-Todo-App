import { useEffect, useState } from 'react';
import './App.css';
import TodoApp from './Components/TodoApp';
import ViewPage from './Components/ViewPage';
import EditPage from './Components/EditPage';

function App() {
  const [currentPage, setCurrentPage] = useState('todoapp');
  const [selectedItem, setSelectedItem] = useState(null);
  const [update, setUpdate] = useState(null)

  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('todos');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(items));
  }, [items]);

  const changePage = (page) => {
    setCurrentPage(page);
  }
  return (
    <>
      {currentPage === 'todoapp' &&
        <TodoApp
          goToView={() => changePage('viewpage')}
          gotoUpdate={() => changePage('updatepage')}
          setSelectedItem={setSelectedItem}
          setUpdate={setUpdate}
          items={items} setItems={setItems}
        />
      }

      {currentPage === 'viewpage' &&
        <ViewPage
          selectItem={selectedItem}
          goToList={() => changePage('todoapp')}
        />
      }

      {currentPage === 'updatepage' &&
        <EditPage
          update={update}
          items={items} setItems={setItems}
          goToList={() => changePage('todoapp')}
        />
      }
    </>
  );
}

export default App;