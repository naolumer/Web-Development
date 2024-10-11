import React, {useReducer} from "react";


export default function counter2() {
    const [state, dispatch] = useReducer(reducer, {count: 0, incrementby: 1});

    function reducer(state, action) {

        if (action.type === "increment") {
            return {...state, count: state.count + state.incrementby}
        }

        if (action.type === "decrement") {
            return {...state, count: state.count - state.incrementby}
        }

        if (action.type === "incrementBy") {
            return {...state, incrementby: action.payload }
        }

    }

    
        

    

    return (
        <div>
            <p>Count : {state.count}</p>
            <input type="text" value={state.incrementby} onChange={(e) => dispatch({type: "incrementBy" , payload: Number(e.target.value)})}/>
            <button onClick={() => dispatch({type : "increment"})}>Increment</button>
            <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
           
        </div>
    )


}