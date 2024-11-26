import React, { useState } from 'react'

function UseState3() {
    const [movie,setMovie] = useState({
        title: "SAW",
        rating: 6.5
    })
    const handleClick = ()=> {
        setMovie({...movie, rating: 6.9})
    }
  return (
    <div>
        <h1>Title : {movie.title}</h1>
        <h2>Rating : {movie.rating}</h2>
        <button onClick={handleClick}>Add rating</button>
    </div>
  )
}

export default UseState3