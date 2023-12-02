import styles from './style.module.scss';


import assessment0Stars from "../../../assets/imgs/assessment_0.png"
import assessment1Stars from "../../../assets/imgs/assessment_1.png"
import assessment2Stars from "../../../assets/imgs/assessment_2.png"
import assessment3Stars from "../../../assets/imgs/assessment_3.png"
import assessment4Stars from "../../../assets/imgs/assessment_4.png"
import assessment5Stars from "../../../assets/imgs/assessment_5.png"

export default function Card({personImg, personName, asses, txtAssess}){
    let assessmentImg = '';
    switch(asses){
        case 0:
            assessmentImg = assessment0Stars
            break
        case 1:
            assessmentImg = assessment1Stars
            break
        case 2:
            assessmentImg = assessment2Stars
            break
        case 3:
            assessmentImg = assessment3Stars
            break
        case 4:
            assessmentImg = assessment4Stars
            break
        case 5:
            assessmentImg = assessment5Stars
            break    
        default:
    }
    return(
        <div className={styles.card__assessment}>
            <div>
                <figure>
                    <img src={personImg} alt={personName}></img>
                </figure>
            </div>
            <h1>{personName}</h1>

            <img src={assessmentImg} alt='avaliação imagem'></img>


            <p>{txtAssess}</p>
        </div>
    )
}