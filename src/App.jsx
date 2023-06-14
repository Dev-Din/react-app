import './App.css';
import Additems from './components/additems/Additem';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { useState, useEffect } from 'react';
import SearchItem from './components/searchItem/SearchItem';

function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('shoppingList'));
    setItems(storedItems || []);
  }, []);

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppingList', JSON.stringify(newItems));
  };

  const [newItem, setNewItem] = useState('');

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const mynewItem = { id, checked: false, item };
    const listItems = [...items, mynewItem];
    setItems(listItems);
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    setNewItem('');
    addItem(newItem);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    });
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  return (
    <div className="App">
      <Navbar />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Additems
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items.filter(item =>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        length={items.length}
      />
      <Footer />
    </div>
  );
}

export default App;
