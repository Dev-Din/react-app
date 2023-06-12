import "./content.css";
import { FaTrashAlt } from 'react-icons/fa';

function Content({items, handleCheck, handleDelete, length}) {

  
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
                aria-label= {`Delete ${item.item}`}
              />
            </li>
          ))}
        </ul>
      ) : (
          <h1 className='centered'>You have no items</h1>
        )}

      <h3 id="itemsLength">
        {length} {length === 1? "item available": "items available"}
        </h3>
    </main>
  )
}

export default Content;
