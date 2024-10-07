import Form from "./Form.jsx";
import ListItem from "./ListItem.jsx";
import { useState } from "react";
import Footer from "./Footer.jsx";

export default function Todos() {
    const [todos, setTodos] = useState([]);
    const completedTodos = todos.filter((todo) => todo.done).length;
    const totalTodos = todos.length

    return (
        <div>
            <Form  todos = {todos} setTodos = {setTodos}/>

            <ListItem  todos = {todos} setTodos= {setTodos}/>
            
            <Footer completedTodo= {completedTodos} totalTodos = {totalTodos}/>

        </div>
    )
}