import React, { useState } from 'react';
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
    <main className="centered">
      {items.length ? (
        <ul className="list">
          {items.map((item) => (
            <li className="card" key={item.id}>
              <div className="card-content">
                <input
                  type="checkbox"
                  onChange={() => handleCheck(item.id)}
                  checked={item.checked}
                />
                <label
                  className={item.checked ? "item-checked" : null}
                >
                  {item.item}
                </label>
              </div>
              <FaTrashAlt
                className="delete-btn"
                onClick={() => handleDelete(item.id)}
                role='button'
                tabIndex={0}
              />
            </li>
          ))}
        </ul>
      ) : (
          <h1 className='centered'>You have no items</h1>
        )}

      <h3>{items.length} {items.length === 1?" item left": "items left"}</h3>
    </main>
  )
}

export default Content;
