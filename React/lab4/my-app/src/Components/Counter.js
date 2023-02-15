<<<<<<< HEAD
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
=======
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
>>>>>>> 9b3aa67b9e971d0212fbdffdb52f727fde4f5221
export default Counter