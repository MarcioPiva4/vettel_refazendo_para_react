import Card from './Card'
import styles from './style.module.scss'

import assessmentImg from '../../assets/imgs/assessment_home.png'
import personImg from '../../assets/imgs/old_woman_home.jpg'


export default function Assessment(){
    return(
        <section className={styles.assesssment__content}>
            
            <h1 id='teste'>Avaliações</h1>
            
            <Card 
                personName='Maria Lucia'
                personImg={personImg}
                asses={assessmentImg}
            >
            </Card>
        
        </section>
    )
}