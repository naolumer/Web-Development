import { useState } from "react";
import styles from "../components/Form.module.css";


export default function Form({todos, setTodos}) {

    const [todo, setTodo] = useState({name:"", done: false});
    

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({name:"", done: false});
    }

    


    return (
        <>
            <form className={styles.todoform} onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.inputContainer}>
                    <input className={styles.modernInput} 
                    placeholder="Enter todo item..."
                    type="text" value = {todo.name} 
                    onChange={(e) => setTodo({name: e.target.value, done: false})} />
                    <button className={styles.modernButton} type="submit">
                        Add
                    </button>
                </div>
                
            </form>
        </>
    )
}