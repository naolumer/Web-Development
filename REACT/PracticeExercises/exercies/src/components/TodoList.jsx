import React, { useState } from 'react'

function TodoList() {
    const [todo,setTodo] = useState([])
    const [inputValue,setInputValue] = useState("")

    const handleClick = ()=> {
        setTodo([...todo, inputValue])
    }
    function handleSubmit(e) {
        e.preventDefault()
        setInputValue("")
    } 
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Todo Lists:</h1>
            <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} placeholder='input todo..' />
            <button onClick={handleClick}>Add Todo</button>
            {todo.map((tdo)=> (
                <p key={Math.random()}>{tdo}</p>
            ))}
        </form>
    </div>
  )
}

export default TodoList