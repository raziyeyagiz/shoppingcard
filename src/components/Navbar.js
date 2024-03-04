import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import "../styles/navbar.css"
function Navbar({size,setShow}) {
  return (
    <nav>
      <div className='navbox'>
        <span className='myshop' onClick={()=>setShow(true)}>My shopping</span>
        <div className='cart' onClick={()=>setShow(false)}>
            <span><FaShoppingCart /></span>
            <span>{size}</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
