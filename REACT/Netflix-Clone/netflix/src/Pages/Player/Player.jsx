import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

function Player() {

  const {id} = useParams();
  const navigate= useNavigate();

  const [apiData, setApiData] =useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  })
  
  
  const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWYwODAxYjAyNTQ5ZWEyNGNkZGYxYjJhOWE2YjU1MiIsIm5iZiI6MTcyOTc1NTAwMy4xMTc5MzUsInN1YiI6IjY3MTlmNTIzNDI3YzVjMTlmMDI1Yjc3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dXhTupkYY8clNlGu_w1rUBqrJLIWCGSFcnnUIKG8c_Y'
      }
    };
  useEffect(()=>{
    
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err));

  },[])
  
  return (
    <div className='player'>
      <img onClick={()=>navigate(-2)} src={back_arrow_icon} alt="" />
      <iframe width='90%' height='90%' 
      src={`https://www.youtube.com/embed/${apiData.key}`}
       title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className='player-info'>
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div> 

    </div>
  )
}

export default Player