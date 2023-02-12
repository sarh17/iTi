import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";


function Movies(){
    let[movies,setMovies]= useState([])
    
    useEffect(()=>{
     axios.get('https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c').then(res=>
     {
        console.log(res.data.results)
        setMovies(res.data.results)
     })

    },[])
    
    return(
        <div className="row">
        {
         movies.map((item,index)=><div key={index}  className='col-3 mt-3'> <Card data={item} /></div>)
        }
        </div>
        )
}
export default Movies