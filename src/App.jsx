import './App.css';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
// import Header from './components/header/Header';
// import ListandKeys from './components/listandkeys/ListandKeys';
import Navbar from './components/navbar/Navbar';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Item 1"
    }, 
    {
      id: 2,
      checked: false,
      item: "Item 2"
    }, {
      id: 3,
      checked: false,
      item: "Item 3"
    }, {
      id: 4,
      checked: false,
      item: "Item 4"
    },
  ]);

  const handleCheck = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    });
    setItems(updatedItems);
    localStorage.setItem('shoppingList', JSON.stringify(updatedItems));
  }

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem('shoppingList', JSON.stringify(updatedItems));
  }



  return (
    <div className="App">
     <Navbar/>
     {/* <Header/> */}
     {/* <ListandKeys/> */}
     <Content
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      length = {items.length}
     />
     <Footer/>
    </div>
  );
}

export default App;
