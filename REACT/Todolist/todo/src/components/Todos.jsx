import { useState } from "react"
import Todo from "./Todo.jsx";
export default function Todos() {

    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo("");
    
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" value = {todo} onChange={(e) => setTodo(e.target.value)} />
                <button type="submit">
                    Add
                </button>
            </form>

            {todos.map((item) => (
                <Todo key = {item} item={item} />
            ))}

        </div>
    )
}