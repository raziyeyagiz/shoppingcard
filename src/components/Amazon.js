import React from 'react'
import {FaLiraSign} from "react-icons/fa";
import "../styles/amazon.css"
function Amazon({list, handleClick}) {
  return (
    <section>{
        list.map((item)=>{
            return <div className='cards' key={item.id}>
                <div className='imgbox'>
                    <img src={item.img} alt="image"/>
                </div>
                <div className='details' >
                    <p>{item.title}</p>
                    <p>{item.author}</p>
                    <p>Price-{item.price}<FaLiraSign /></p>
                    <button  onClick={()=>handleClick(item)}>Add to Cart</button>
                </div>
            </div>
        }
       ) }
      
    </section>
  )
}

export default Amazon
