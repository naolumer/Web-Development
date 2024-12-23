import { useReducer } from "react"

type Action = {
    type:"Increment"
}  | {
    type:"Decrement"
}

type State = {count:number}

const reducer = (state:State,action:Action)=> {
    switch (action.type) {
        case "Increment":
            return {count: state.count +1};
        case "Decrement":
            return {count: state.count -1};
        
        default:
            return state
    }
}

const Reducer = () => {
    const [state,dispatch] = useReducer(reducer,{count:0})

    
  return (
    <div>
        <p>Count:{state.count}</p>
        <button type="button" onClick={()=> dispatch({type: "Increment"})}>Increment</button>
        <button type="button" onClick={()=> dispatch({type: "Decrement"})}>Decrement</button>

    </div>
  )
}

export default Reducer