import React, { useState } from 'react'


function Movies() {
    const [movies,setMovies] = useState([{id:1, title: "Avengers"},{id:2,title:"Spider-Man"}])
    const handleClick = ()=>{
        setMovies(movies.map((m)=> (m.id===1? {...movies, title:"JAWS"}:m)))
    }
  return (
    <div>
        {movies.map((m)=> (
            <div key={Math.round()}>
                <h1>Title: {m.title}</h1>
            </div>
        ))}
        <button onClick={handleClick}>Change Title</button>
    </div>
  )
}

export default Movies