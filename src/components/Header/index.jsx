import styles from './style.module.scss';

export default function Header(){
    return(
        <>
            <header className={styles.header}>
                <h1>Vettel</h1>
                <div className={styles.icon__hamburguer}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </header>
        </>
    )
}