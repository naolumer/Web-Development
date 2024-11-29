import React from 'react'
import { useReducer } from 'react'
import { useState } from 'react'


const initialState = {count:0}

const reducer = (state,action)=> {
    switch (action.type) {
        case "Increment":
            return { count: state.count + action.payload} 
        case "Decrement":
            return {count: state.count - action.payload}
        case "Reset":
            return {count: 0}
        default:
            throw new Error (`Unhandled action type:${action.type}`)
    }
}

function CounterUsingUseReducer() {
    
    const [state,dispatch] = useReducer(reducer,initialState)
    const [inputValue,setInputValue] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        setInputValue("")

    }

    

    
  return (
    <div>
        <input onSubmit={handleSubmit}
            type="text" 
            placeholder='input amount..'
            value={inputValue}
            onChange={(e)=> setInputValue(e.target.value)} />
        <button onClick={()=> dispatch({type : "Increment", payload: Number(inputValue)})}>+</button>
        <button onClick={()=> dispatch({type:"Decrement", payload: Number(inputValue) })}>-</button>
        <button onClick={()=> dispatch({type : "Reset"})}>Reset</button>
        <p>Count : {state.count}</p>
    </div>
  )
}

export default CounterUsingUseReducer