import styles from './style.module.scss'

export default function BoxMessage({message}){
    return(
        <div className={styles.message}>
            <h1>{message}</h1>
        </div>
    )
}