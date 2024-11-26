import React from 'react'

function EventHandling() {
    function handleClick() {
        console.log(Math.round(Math.random() * 10))
    }
  return (
    <div>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default EventHandling