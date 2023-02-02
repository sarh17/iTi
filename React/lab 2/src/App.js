import { useState } from 'react';
import './App.css';
import headImg from './head.jpg'
import tailImg from './tail.jpg'
import Section from './Components/Section';

function App() {
  let [flip,setFlip]=useState(0);
  let [head,setHead]=useState(0);
  let [tail,setTail]=useState(0);
  let [flag,setFlag]=useState(true)
  
  function count() {
    setFlip(++flip)
  let side=Math.round(Math.random())
    if (side == 0) {
      setHead(++head)
      setFlag(true)
    }
    else if(side == 1){
      setTail(++tail)
      setFlag(false)
    }
    console.log(flip,head,tail)
  }

  return (
    <div className="App p-5 m-5 ">
       <h1 className='m-5'>flip this coin</h1>
       <img src={flag?headImg:tailImg} alt=""  style={{width: "150px"}}/>
       <br />
      <button className='btn btn-warning m-5 w-25' onClick={count}>Flip</button>
      <p>flip:{flip} Head:{head} Tail:{tail}</p>
      <hr />


    <Section/>
  </div>
        
  );
}

export default App;
