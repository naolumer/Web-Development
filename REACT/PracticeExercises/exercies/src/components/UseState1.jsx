import React, { useState } from 'react'

function UseState1() {
    const [value,setValue] = useState(0)
    function incrementByTwo(){
        setValue(value + 2)
    }
    function decrementByOne(){
        setValue(value-1)
    }
  return (
    <div>
        <h1>Increment or Decrement</h1>
        <p>{value}</p>
        <button style={{padding:"10px", borderRadius:"5px",backgroundColor:'skyblue'}} onClick={incrementByTwo}>+</button>
        <button style={{padding:"10px", borderRadius:"5px",backgroundColor:'crimson'}} onClick={decrementByOne}>-</button>
    </div>
  )
}

export default UseState1