import Todo from "./Todo"
import styles from "../components/todolist.module.css"

export default function ListItem ({todos, setTodos}) {
    const sortedTodos = todos.slice().sort((a,b) => Number(a.done) - Number(b.done));


    return (
        <div className= {styles.list}>
            {sortedTodos.map((item) => (
                <Todo 
                key = {item.name} 
                item={item} 
                todos ={todos} 
                setTodos={setTodos} />
            ))}
        
        </div>
    )
}