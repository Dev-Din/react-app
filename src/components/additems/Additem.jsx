import { FaPlus } from 'react-icons/fa'
import "./additems.css"
import { useRef } from "react";

function Additem({newItem, setNewItem, handleSubmit}) {
  const inputRef = useRef()
  return (
    <form className='addForm' onSubmit={handleSubmit}
    >
     <label htmlFor="addItem">Add Item</label>
     <input 
      type="text" 
      autoFocus
      ref={inputRef}
      id='addItem'
      placeholder='Add Item'
      required   
      value={newItem}
      onChange={(e) => setNewItem(e.target.value)}
     />
     <button 
      type='submit'
      onClick={() => inputRef.current.focus()}
      aria-label='Add Item'
     ><FaPlus/></button>
    </form>
  )
}

export default Additem