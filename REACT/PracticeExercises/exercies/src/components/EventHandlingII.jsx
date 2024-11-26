import React from 'react'

function EventHandlingII() {
    const handleCopy = ()=>{
        console.log("Stop Copying Me!")
    }
  return (
    <div>
        <p onCopy={handleCopy}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos aspernatur beatae quod porro explicabo architecto dignissimos nulla totam hic neque?</p>
    </div>
  )
}

export default EventHandlingII