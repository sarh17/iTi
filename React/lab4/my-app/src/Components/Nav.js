import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { counterContext } from '../config/counterContext'
import './Nav.css'
function Nav() {
  let{count}=useContext(counterContext)
  return (
    <nav>
    <ul className='position-relative'>  
   <li><NavLink  to="Home">Home</NavLink></li>  
   <li><NavLink  to="Todolist">To-do-list</NavLink></li>  
   <li><NavLink  to="Movies">Movies</NavLink></li>  
   <li><NavLink  to="Counter">Counter</NavLink><span>{count}</span></li>  
   <li><NavLink to='Login' className="position-absolute top-0 end-0">Login</NavLink> </li>

 
 </ul>  
 </nav>
  )
}

export default Nav