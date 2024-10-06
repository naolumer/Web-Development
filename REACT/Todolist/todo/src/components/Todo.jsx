import styles from "./todoitem.module.css"
export default function Todo({item, todos, setTodos}) {

    function handleDelete(item) {
        setTodos(todos.filter((todo) => todo!==item));

        
    }

    return (
        <div className={styles.item}> 
            <div className= {styles.itemName}>
                {item} 
                <span>
                    <button onClick={() => handleDelete(item)} 
                    className={styles.deletebutton}>X</button>
                </span>
            </div>
            <hr className={styles.hrline} />
        </div>
    )
}