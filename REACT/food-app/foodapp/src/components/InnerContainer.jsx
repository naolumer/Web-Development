import styles from "./innerContainer.module.css"
export default function innerContainer({children}) {
    return <div className={styles.innerContainer}>{children}</div>
}