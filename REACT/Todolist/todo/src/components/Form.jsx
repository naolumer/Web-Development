import { useState } from "react";
import styles from "../components/Form.module.css";


export default function Form({todos, setTodos}) {

    const [todo, setTodo] = useState("");
    

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo("");
    }


    return (
        <>
            <form className={styles.todoform} onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.inputContainer}>
                    <input className={styles.modernInput} 
                    placeholder="Enter todo item..."
                    type="text" value = {todo} onChange={(e) => setTodo(e.target.value)} />
                    <button className={styles.modernButton} type="submit">
                        Add
                    </button>
                </div>
                
            </form>
        </>
    )
}