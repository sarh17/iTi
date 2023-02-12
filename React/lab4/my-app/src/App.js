import React from 'react';
import './App.css';
import Movies from './Components/Movies';
import Nav from './Components/Nav';
import Login from './Components/Login';
import Home from './Components/Home';
import Todolist from './Components/Todolist';
import { Routes,Route } from 'react-router-dom';
import Counter from './Components/Counter';
import { counterContext } from './config/counterContext';
import { useState } from 'react';
import { Provider } from 'react-redux';
import Auth from './Components/Auth';
import Item from './Components/Item';
import { store } from './Redux/Store';


function App() {
  let [count,setCount]=useState(0)
  return (
    <Provider store={store}>
     
   <counterContext.Provider value={{count,setCount}}>

    <Nav/>
    <Routes>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Todolist' element={<Todolist/>}/>
      <Route element ={<Auth/>}>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/item/:id' element={<Item/>}/>
      </Route> 
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Counter' element={<Counter/>}/>
    </Routes> 


    </counterContext.Provider>
    </Provider>

  );
}

export default App;
