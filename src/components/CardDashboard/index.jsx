import styles from './style.module.scss'

export default function CardDashboard({text,svg}){
    return(
        <div className={styles.card__container}>
            {svg}
            <h1>{text}</h1>
        </div>
    )
}