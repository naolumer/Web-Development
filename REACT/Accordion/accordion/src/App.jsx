import React, { useState } from 'react'
import { accordion } from './assets/content'
import Accordion from './assets/Accordion'

function App() {

  return (
    <div className='container'>
      {accordion.map(({title, content})=> (
        <Accordion title={title} content={content}/>
       
      ))}

    </div>
  )
}

export default App