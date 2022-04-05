import React from 'react'
import { FaBuffer } from "react-icons/fa"
import { Link } from 'react-router-dom'



function NavBar() {
  return (
    <div className='header'>
    <FaBuffer className='icon'/>
    <h2>Neeba Phones And Accessories</h2>
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/about">About Us</Link></li>
<li><Link to="/products">Products</Link></li>
<li><Link to="/contact">Contact Us</Link></li>

</ul>



    </div>
  )
}

export default NavBar