import styles from "./container.module.css"
export default function container({children}) {
    return (
        <div className={styles.parentContainer}>
            {children}
        </div>
    )
}