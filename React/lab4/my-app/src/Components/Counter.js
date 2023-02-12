import React, { useContext } from "react";
import { counterContext } from "../config/counterContext";

function Counter(){
    let {count,setCount}=useContext(counterContext)
    return(
        <div> 
            <button className="btn btn-primary"onClick={()=>setCount(count+1)}>+</button>
            <h1>{count}</h1>
            <button className="btn btn-primary" onClick={()=>setCount(count-1)}>-</button>
        </div>
    )
}
export default Counter