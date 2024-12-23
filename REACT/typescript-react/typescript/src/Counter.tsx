import { useContext } from "react"
import { MyContext } from "./MyContext"

export default function Counter() {
  const {count,increment,decrement} = useContext(MyContext)
  return (
    <div>
        <p>Count:{count}</p>
        <button type="button" onClick={increment}>Increment</button>
        <button type="button" onClick={decrement}>Decrement</button>
    </div>
  )
}
