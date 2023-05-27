import React from 'react'
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


 const linkMap = links.map((link) =>(
  <ul><li key={link.link}><a href={link.link}> {link.name}</a></li></ul>
 ))
  return (
    <nav>{ linkMap }</nav>
  )
}

export default Navbar