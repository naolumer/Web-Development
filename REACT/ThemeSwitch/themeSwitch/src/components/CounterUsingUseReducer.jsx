import React from 'react'
import { useReducer } from 'react'


const initialState = {count:0}

const reducer = (state,action)=> {
    switch (action.type) {
        case "Increment":
            return { count: state.count + 1} 
        case "Decrement":
            return {count: state.count - 1}
        case "Reset":
            return {count: 0}
        default:
            throw new Error (`Unhandled action type:${action.type}`)
    }
}

function CounterUsingUseReducer() {
    
    const [state,dispatch] = useReducer(reducer,initialState)
    

    
  return (
    <div>
        <button onClick={()=> dispatch({type : "Increment"})}>+</button>
        <button onClick={()=> dispatch({type:"Decrement" })}>-</button>
        <button onClick={()=> dispatch({type : "Reset"})}>Reset</button>
        <p>Count : {state.count}</p>
    </div>
  )
}

export default CounterUsingUseReducer