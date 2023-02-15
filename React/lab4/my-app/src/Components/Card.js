import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card({data}) { 
   const nav=useNavigate();
    function go(data)
    {
        nav('/item/'+data.id);
    }
    
  return (

    <div >

            {
        <div className="card" style={{width: "23rem",height:"73rem"}}>
        <div className="card-body">
        <img src={"https://image.tmdb.org/t/p/w500" + data.poster_path} className="card-img-top" alt=""/>
        <h5 className="card-title">{data.original_title}</h5>
        <p className="card-text">{data.original_language}</p>
        <p className="card-text">{data.release_date}</p>
        <p className="card-text">{data.vote_average}</p>
        <p className="card-text">{data.overview}</p>
        <button className="btn btn-primary "onClick={()=>go(data)}><i class="bi bi-play-circle-fill"></i> Watch now</button>
        </div>
        </div>
    }
  
</div>

  )
}

export default Card