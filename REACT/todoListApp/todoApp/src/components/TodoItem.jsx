import React from 'react'
import delicon from "../assets/delete.png";
import ticked from "../assets/tick.png";
import notticked from "../assets/nottick.png";

function TodoItem({name,item, index, completed,id, deleteToDo,toggle,done}) {
  return (
    <div onClick={()=>{toggle(id)}} className='flex items-center  py-3 border-b-2 relative'>
        <img src={done ? ticked: notticked} alt="" className='w-7' />
        <h1  className={`ml-4 ${done ? "line-through": ""}`}>
            {name}
        </h1>
        <img onClick={()=>{deleteToDo(id)}} src={delicon} alt="" className='w-5 absolute ml-[300px] ' />
    </div>
    
  )
}

export default TodoItem