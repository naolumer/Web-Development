import React, { useState } from 'react'
import styles from './Todo.module.css'

const done = styles.done
const addbutton = styles.addbutton
const deletebutton = styles.deletebutton
const dispcontainer = styles.dispcontainer
function Todo() {
    const [todos,setTodos] = useState([])
    const [inputValue,setInputValue] = useState("")

    const handleSubmit = (e)=> {
        e.preventDefault()
        setInputValue("")
    }
    const handleClick = ()=> {
        setTodos((prev)=> {
            return prev.concat({
                text: inputValue,
                id: Math.floor(Math.random()*100),
                isDone: false
            })
        })
    }

    const handleDelete = (id)=>{
        setTodos(todos.filter((todo)=> id!==todo.id))
    } 
    const handleDone = (id)=> {
        setTodos(todos.map((t)=> t.id===id? {...t,isDone:t.isDone===true?false:true}: t))
        
    }  
  return (
    <div className={styles.todocontainer}>
        <h1>Todo App</h1>
        <form onSubmit={handleSubmit}>
            <input  type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
            <button className={addbutton} type='submit' onClick={handleClick}>ADD</button>
        </form>

        <div className={dispcontainer}>
            <ul>
                {todos.map(({text,id,isDone})=> (
                    <li key={text}>
                        <span className={isDone?done:""} onClick={()=>handleDone(id)}>{text}</span> 
                        <button className={deletebutton} onClick={()=>handleDelete(id)}>X</button>
                    </li> 
                ))}
            </ul>

        </div>

    </div>
  )
}

export default Todo