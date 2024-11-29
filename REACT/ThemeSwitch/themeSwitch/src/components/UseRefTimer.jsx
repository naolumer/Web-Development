import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

function UseRefTimer() {
    const intervalTimer = useRef(null)
    const [counter,setCounter] = useState(0)

    useEffect(()=>{
        intervalTimer.current = setInterval(()=>{
            setCounter( prev=> prev + 1)
        },1000);

        return ()=>{clearInterval(intervalTimer.current)
        
        }
        }, [])
  return (
    <div>
        <h1>Timer: {counter}</h1>
        <button onClick={()=> clearInterval(intervalTimer.current)}>Stop Timer</button>
    </div>
  )
}

export default UseRefTimer