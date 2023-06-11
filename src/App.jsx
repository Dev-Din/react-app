import './App.css';
import Additems from './components/additems/Additem';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
// import Header from './components/header/Header';
// import ListandKeys from './components/listandkeys/ListandKeys';
import Navbar from './components/navbar/Navbar';
import { useState } from 'react';
import SearchItem from './components/searchItem/SearchItem';

function App() {
  const [items, setItems] = useState(
    // [
    //   {
    //     id: 1,
    //     checked: false,
    //     item: "Item 1"
    //   }, 
    //   {
    //     id: 2,
    //     checked: false,
    //     item: "Item 2"
    //   }, {
    //     id: 3,
    //     checked: false,
    //     item: "Item 3"
    //   }, {
    //     id: 4,
    //     checked: false,
    //     item: "Item 4"
    //   },
    // ]
    JSON.parse(localStorage.getItem('shoppingList')) || []
    )
  const [search, setSearch] = useState('')   

  const setAndSaveItems = (newItems) =>{
    setItems(newItems);
    localStorage.setItem('shoppingList', JSON.stringify(newItems));
  }

  // Used in <AddItem/> component to 
  // 
  const [newItem,setNewItem] = useState('')

  // AddItem function
  const addItem = (item) =>{
    // Write Code to increment or decrement the ID in the item
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const mynewItem = {id, checked:false, item}
    const listItems = [...items, mynewItem]
    setItems(listItems)
    setAndSaveItems(listItems)
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!newItem) return;
    setNewItem('')
    addItem(newItem)
    // console.log(newItem)
  }

  const handleCheck = (id) => {
    console.log("handleCheck:", handleCheck)
    const listItems = items.map((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    });
    setAndSaveItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems)
  }



  return (
    <div className="App">
     <Navbar/>
     {/* <Header/> */}
     {/* <ListandKeys/> */}
    <SearchItem
      search = {search}
      setSearch = {setSearch}
    />
     <Additems
      newItem = {newItem}
      setNewItem = {setNewItem}
      handleSubmit = {handleSubmit}
     />
     <Content
      items={items.filter(item =>((item.item).toLowerCase()).includes(search.toLowerCase()))}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      length = {items.length}
     />
     <Footer/>
    </div>
  );
}

export default App;

