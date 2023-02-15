<<<<<<< HEAD
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const nav=useNavigate();
    function save()
    {
        localStorage.setItem('flag',true);
        nav('/movies')

    }
  return (
    <button className='btn btn-primary ' onClick={save}>login</button>
  )
}

=======
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const nav=useNavigate();
    function save()
    {
        localStorage.setItem('flag',true);
        nav('/movies')

    }
  return (
    <button className='btn btn-primary ' onClick={save}>login</button>
  )
}

>>>>>>> 9b3aa67b9e971d0212fbdffdb52f727fde4f5221
export default Login