import React, { useState } from 'react'
import "./Home.css"
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import { useAsyncError } from 'react-router-dom'

function Home({sidebar}) {
  const [catergory, setCategory] = useState(0)
  return (
    <>
        <Sidebar sidebar={sidebar} category={catergory} setCategory={setCategory}/>
        <div className={`container ${sidebar?"":'large-container'}`}>
            <Feed category={catergory}/>

        </div>
    </>
  )
}

export default Home
