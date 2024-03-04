import React,{useEffect, useState} from 'react'
import "../styles/cart.css"
import {FaLiraSign} from "react-icons/fa"
function Cart({cart, setCart, handleChange}) {

  const [price, setPrice]=useState(0);

  const handlePrice=()=>{
    let answer=0;
    
      cart.map((item)=>{
        answer+=item.amount* item.price
      })

    setPrice(answer);
  }
const handleRemove=(idd)=>{
 const arr=cart.filter((item)=>item.id!==idd);
 setCart(arr);
}

  useEffect(()=>{
    handlePrice();
  })
  return (
    <article>
      {
        cart?.map((item)=>{
          return <div className='cartbox' key={item.id}>
            <div className='cart_img'>
              <img src={item.img} />
              <p>{item.title}</p>
            </div>
   <div>
  <button onClick={()=>handleChange(item,+1)}>+</button>
  <button>{item.amount}</button>
  <button onClick={()=>handleChange(item,-1)}>-</button>
   </div>
   <div>
    <span>{item.price}<FaLiraSign /></span>
    <button onClick={()=>handleRemove(item.id)}>Remove</button>
   </div>

          </div>

        })
      }
      <div className='total'><span>Total Price of your Cart</span>
       <span>{price}<FaLiraSign /></span> </div>
    </article>
  )
}

export default Cart
