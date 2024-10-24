import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';



function TitleCards({title, category}) {

    const [apiData, setApiData] =useState([]);
    
    // const cardsRef = useRef();
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWYwODAxYjAyNTQ5ZWEyNGNkZGYxYjJhOWE2YjU1MiIsIm5iZiI6MTcyOTc1NTAwMy4xMTc5MzUsInN1YiI6IjY3MTlmNTIzNDI3YzVjMTlmMDI1Yjc3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dXhTupkYY8clNlGu_w1rUBqrJLIWCGSFcnnUIKG8c_Y'
        }
      };
    
        useEffect(()=>{
            fetch(`https://api.themoviedb.org/3/movie/${category? category:"now_playing"}?language=en-US&page=1`, options)
        .then(res => res.json())
        .then(res => setApiData(res.results))
        .catch(err => console.error(err));

        },[])

    // const handleWheel=(event)=>{
    //     event.preventDefault();
    //     cardsRef.current.scrollLeft +=event.deltaY
    // }

    // useEffect(()=>{
    //     cardsRef.current.addEventListener('wheel',handleWheel)
    // },[])
  return (
    <div className='title-cards'>
        <h2>{title?title:"Popular on Netflix"}</h2>
        <div className='card-list'>
            {apiData.map((card, index)=> {
                return <Link to={`/player/${card.id}`} key={index} className='card' /*ref={cardsRef}*/>
                    <img src={`http://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
                    <p>{card.original_title}</p>
                </Link>
            })}
        </div>
    </div>
  )
}

export default TitleCards