import React from 'react'
import { useState } from 'react';
import styles from '../styles/Basket.css'
function Basket(props) {
  const {cartItem, onAdd, onRemove} =props;

  const itemsPrice = cartItem.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (

    <aside>
      <h3>Cart itens</h3>

       <div>{cartItem.length === 0 && <span>cart is empty</span>}</div> 

      <ul>

        { cartItem.map( item =>(
          <li key={item.id} className='burguerBasket'>
             <h6>{item.name}</h6>
            
             <div>{item.qty} x R${item.price}</div>
             <div>
               <button onClick={()=> onAdd(item)} className='add'> + </button>
               <button  onClick={()=> onRemove(item)} className='remove'> - </button>
             </div>
          </li>
       
        ))}
        
        {cartItem.length !== 0 && (
          <div className='total'>
            <hr></hr>
            <div >
              <div >Items Price</div>
              <div >${itemsPrice.toFixed(2)}</div>
            </div>
            <div >
              <div>Tax Price</div>
              <div >${taxPrice.toFixed(2)}</div>
            </div>
            <div >
              <div >Shipping Price</div>
              <div >
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div >
              <div >
                <strong>Total Price</strong>
              </div>
              <div >
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
        
            <div>
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </div>
        )}
      </ul>
    
    </aside>
  )
}

export default Basket