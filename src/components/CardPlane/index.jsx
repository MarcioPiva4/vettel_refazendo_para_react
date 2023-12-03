import styles from './style.module.scss'

export default function CardPlane({src, title, moreInformations}){
    return(
        <div className={styles.plane__container}>
            <figure>
                <img src={src} alt={title}></img>
            </figure>
            <h1>{title}</h1>
            <ul>
                {moreInformations.map((e,i) => <li key={i}>{e}</li>)}
            </ul>
        </div>
    )
}