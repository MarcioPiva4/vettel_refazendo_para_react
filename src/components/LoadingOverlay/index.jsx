import styles from './style.module.scss'

export default function LoadingOverlay(){
    return(
        <div className={styles.overlay}>
            <span className={styles.overlay__loader}></span>
        </div>
    )
}