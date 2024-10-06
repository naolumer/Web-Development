import Todo from "./Todo"
import styles from "../components/todolist.module.css"

export default function ListItem ({todos, setTodos}) {


    return (
        <div className= {styles.list}>
            {todos.map((item) => (
                <Todo 
                key = {item} 
                item={item} 
                todos ={todos} 
                setTodos={setTodos} />
            ))}
        
        </div>
    )
}