import Form from "./Form.jsx";
import ListItem from "./ListItem.jsx";
import { useState } from "react";

export default function Todos() {
    const [todos, setTodos] = useState([]);

    return (
        <div>
            <Form  todos = {todos} setTodos = {setTodos}/>

            <ListItem  todos = {todos} setTodos= {setTodos}/>

        </div>
    )
}