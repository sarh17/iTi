import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { incQt, removeCart } from '../Redux/cartSlice';
import './cart.css'
function Cart() {
    let cart=useSelector((state)=>state.cartReducer.cart);
    console.log('hi in cart com ',cart);
    const dispatch=useDispatch();
    function remove(id)
    {
        dispatch(removeCart(id))
    }
    function plus(index)
    {
        console.log(index);
        
        dispatch(incQt(index))
    }
    return (
        <div>
            {cart.map((item,index)=><section key={index} id="cart">    
          <article className="Movie">
            <header>
              <a className="remove" href='h'>
                <img src={item.poster_path} alt="" />
                <h3 onClick={()=>remove(item.id)}>Remove Movie</h3>
              </a>
            </header>
            <div className="content">
              <h1>{item.original_title}</h1>
             {item.overview}
            </div>
            <footer className="content">
              <span className="qt-minus">-</span>
              <span className="qt">{item.qt}</span>
              <span className="qt-plus" onClick={()=>plus(index)}>+</span>
          
              <span className="qt-minus"></span>
              <h2 className="vote">
                {item.vote_average}
              </h2>
            </footer>
          </article>
        </section>)}
        </div>
      );
    }

export default Cart