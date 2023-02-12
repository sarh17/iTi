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

export default Login