import React, { useEffect, useState } from 'react';
import calendar from "../assets/calendar-plus-icon.png";
import TodoItem from './TodoItem';

function Todo() {

    const [todo, setTodo] = useState({name: "", done: false ,id:Date.now() });
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // Load todos from localStorage when the component mounts
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, []);

    useEffect(() => {
        // Save todos to localStorage whenever they change
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    


    function handleSubmit(e) {
        e.preventDefault();
        // Check if the input is not empty before adding it to the list
        if (todo.name.trim()) {
            setTodos(prevTodos => [...prevTodos, { name: todo.name, done: todo.done, id:todo.id }]);
            console.log([...todos, { name: todo.name, done: todo.done, id: todo.id }]); // Log the new todos array
            setTodo({ name: "", done: false, id: Date.now() }); 
        }
    }

    function deleteToDo(id) {
        setTodos((prevTodos)=> {
            return prevTodos.filter((todo)=> todo.id!==id)
        })
    }

    function toggle(id){
        setTodos((prevTodos)=>{
            return prevTodos.map((todo)=>{
                if(todo.id ===id){
                   return {...todo, done: !todo.done} 
                }
                return todo;
            })
        })

    }
    

    



    return (
        <div className='bg-white text-black flex flex-col px-8 rounded-md ml-10 max-h-[500px] max-w-[400px] overflow-y-auto overflow-x-auto min-h-[500px] '>
            <div className='flex gap-3 mb-3 items-center justify-start mt-8'>
                <img className='w-8 h-8' src={calendar} alt="calendar-icon" />
                <h1 className='text-[24px] font-bold pt-[2px]'>To-Do List</h1>
            </div>

            <div className='flex items-center py-5 mb-3'>
                <form onSubmit={handleSubmit}>
                    <input 
                        onChange={(e) => setTodo({ name: e.target.value, done: false , id: Date.now()})} 
                        value={todo.name} 
                        className='h-50px text-black border-none outline-none px-5 py-2 rounded-l-2xl rounded-r-[-50xp] placeholder-gray-600 bg-slate-300' 
                        placeholder='Add your task' 
                        type="textarea" 
                    />
                    <button type="submit" className='bg-orange-600 text-white rounded-r-full px-6 py-2 hover:scale-[1.03] hover:bg-orange-500'>ADD +</button>
                </form>
            </div>
            <div className='mb-10'>
                
                {todos.map((item,index) =>
                    
                        <TodoItem key={item.id} item ={item} name={item.name} index={index} id={item.id} deleteToDo={deleteToDo} toggle={toggle} done={item.done}/>)}

            </div>
        </div>

        
    );
}

export default Todo;