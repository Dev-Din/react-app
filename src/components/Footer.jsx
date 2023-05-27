import React from 'react'
import "./footer.css"
function Footer() {
 const thisYear = new Date()
  return (
    <>
    <h1>Footer</h1>
    <h3>&copy; {thisYear.getFullYear()}</h3>
    </>    
   )
}

export default Footer