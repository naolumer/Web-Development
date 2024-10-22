import React from 'react'
import "./Video.css"
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'

function Video() {
  return (
    <div className='play-container'>
        <PlayVideo/>
        <Recommended/>
    </div>
  )
}

export default Video