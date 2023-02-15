<<<<<<< HEAD
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function Auth() {
    const flag=localStorage.getItem('flag');
  return (
    <div>{flag?<Outlet/>:<Navigate to='/login'/>}</div>
  )
}

=======
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function Auth() {
    const flag=localStorage.getItem('flag');
  return (
    <div>{flag?<Outlet/>:<Navigate to='/login'/>}</div>
  )
}

>>>>>>> 9b3aa67b9e971d0212fbdffdb52f727fde4f5221
export default Auth