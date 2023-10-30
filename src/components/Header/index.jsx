import styles from './style.module.scss';

export default function Header({bg}){
    return(
        <>
            <header className={styles.header} style={{backgroundColor:bg}}>
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