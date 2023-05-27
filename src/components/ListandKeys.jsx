import React from 'react'
import "./listandkeys.css"
function ListandKeys() {

  // Create an array of objects
  const users = [
    {
      id: 1,
      name: "Nuru",
      age: 20
    },   
    {
      id: 2,
      name: "Ali",
      age: 21
    },
    {
      id: 3,
      name: "Abdi",
      age: 22
    },
  ]

  // Map over the array
  const userMap = users.map((user , index) =>{
     return <li key={index}>{index} => {user.name} {user.age} </li>
  })
// console.log(users)

// Return the Mapped values
  return (
    <div>
     <h1>{ userMap }</h1>
    </div>
  )
}

export default ListandKeys