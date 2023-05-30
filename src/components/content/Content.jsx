import React, { useState } from 'react'
import "./content.css"
import { FaTrashAlt } from 'react-icons/fa'
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
      item: "Item 1"
    }, {
      id: 4,
      checked: false,
      item: "Item 1"
    },
  ]);



  return (
    <main>
     <ul>
      {items.map((item) =>(
        <li className='item' key={item.id}>
          <input type="checkbox"
            checked = {item.checked}
           />
           <label>{item.item}</label>
           <FaTrashAlt
            role='button'
            tabIndex={0}
            />
        </li>
      ))}
     </ul>
    </main>
  )
}

export default Content