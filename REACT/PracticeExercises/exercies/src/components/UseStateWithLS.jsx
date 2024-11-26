import React, { useEffect, useState } from 'react'

function UseStateWithLS() {
    const [count,setCount] = useState(()=>{
        const Scount = JSON.parse(localStorage.getItem("counter"));
        return Scount? Number.parseInt(Scount) :0;
    });
    useEffect (()=>{
        localStorage.setItem('counter',JSON.stringify(count))
    }, [count])
  return (
    <div>
        <h3>Counter : {count}</h3>
        <button onClick={()=>setCount(count + 1)}>Add +</button>
        <button onClick={()=>setCount(count - 1)}>Subtract -</button>

    </div>
  )
}

export default UseStateWithLS