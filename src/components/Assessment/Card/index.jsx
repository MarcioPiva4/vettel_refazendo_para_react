import styles from './style.module.scss';

export default function Card({personImg, personName, asses}){
    return(
        <div className={styles.card__assessment}>
            <div>
                <figure>
                    <img src={personImg} alt={personName}></img>
                </figure>
            </div>
            <h1>{personName}</h1>

            <img src={asses} alt='avaliação imagem'></img>
        </div>
    )
}