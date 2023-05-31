import React, { useState } from 'react'
import "./content.css";
import { FaTrashAlt } from 'react-icons/fa';
function Content() {

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

  const handleCheck = (id) =>{
    // console.log(`key: ${id}`)
    // console.log(`value: ${items[id].checked}`)
    // console.log(`items: ${items}`)
    const listItems = items.map((item) => {
      if(item.id === id){
        item.checked =!item.checked
      }
      return item
    })
    setItems(listItems)
    localStorage.setItem('shoppingList',JSON.stringify(listItems))
  }

  const handleDelete = (id) =>{
    // console.log(id)
    const listItems = items.filter((item) => item.id !== id ? item : null)
    setItems(listItems)
    localStorage.setItem('shoppingList',JSON.stringify(listItems))
  }

  return (
    <main>
      {items.length ?(
     <ul>
      {items.map((item) =>(
        <li className='item' key={item.id}>
          <input type="checkbox"
            onChange={() => handleCheck(item.id) }
            checked = {item.checked}
           />
           <label
            style={(item.checked) ? {textDecoration: "line-through"} : null}
           >{item.item}
            </label>
           <FaTrashAlt
            onClick ={() => handleDelete(item.id )}
            role='button'
            tabIndex={0}
          />
        </li>
      ))}
     </ul>

      ) : (
        <h1 className='centered'>You have no items</h1>
      )}
    </main>
  )
}

export default Content