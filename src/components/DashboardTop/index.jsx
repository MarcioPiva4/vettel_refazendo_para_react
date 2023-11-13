import styles from './style.module.scss'

export default function DashboardTop({titleBold,title,subtitle}){
    return(
        <div className={styles.dashboard__top}>
            <h3>{subtitle}</h3>
            <h1 className={subtitle ? styles.title__bold : styles.title}>{title || titleBold}</h1>
        </div>
    )
}