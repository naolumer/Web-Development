import React from 'react'
import { useRef } from 'react'


function UseRefHook() {
    const inputElement = useRef(null);

    const handleClick = ()=>{
        inputElement.current.focus()
        inputElement.current.value = "Naol"
    }
  return (
    <div>
        <input type="text" ref={inputElement} />
        <button onClick={handleClick}>Click me</button>

    </div>
  )
}

export default UseRefHook