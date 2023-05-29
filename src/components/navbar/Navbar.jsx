import React from 'react'
import { useState } from 'react'
import "./navbar.css"
function Navbar() {
 const links = [
  {
   name: 'Home',
   link: '/home'
  },
  {
   name: 'About',
   link: '/about'
  },
  {
   name: 'Contact',
   link: '/contact'
  },
  {
   name: 'Blog',
   link: '/blog'
  }
 ]

 const [name, setName] = useState("👋🏼")

 const handleName = () =>{
   const names = ["Nuru", "Moha", "Din"];
   const int = Math.floor(Math.random() *3);
   setName( names[int] );
 }


 const handleDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  return `${day} ${month}, ${year}`;
};

const handleTime = () => {
  const time = new Date();
  const hour = time.getHours().toString().padStart(2, '0');
  const minute = time.getMinutes().toString().padStart(2, '0');
  return `${hour}:${minute}`;
}



 const linkMap = links.map((link) =>(
  <ul><li key={link.link}><a href={link.link}> {link.name}</a></li></ul>
 ))
  return (
    <>
    <div className="calendar">
    <h3 className="date">{handleDate()}</h3>
    <h4 className="time">{handleTime()}</h4>
    </div>


    <div className="greetings">
    <h1>Hello { name }!</h1>
     <button onClick={handleName}>Change Name</button>
    </div>


    <nav>{ linkMap }</nav>
    </>
  )
}

export default Navbar