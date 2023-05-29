import React from 'react'
import "./footer.css"
function Footer() {
 const thisYear = new Date()
  return (
    <>
    <footer >
    <h3>Footer</h3>
    <h3>Copyright &copy;{thisYear.getFullYear()}</h3>
    </footer>
    </>    
   )
}

export default Footer