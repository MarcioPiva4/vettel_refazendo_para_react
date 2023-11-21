import Card from './Card'
import styles from './style.module.scss'

import assessmentImg from '../../assets/imgs/assessment_home.png'
import personImg from '../../assets/imgs/old_woman_home.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { get, getDatabase, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
export default function Assessment(){
    /*const [assessmentData, setAssessmentData] = useState(null);


    const [name,setName] = useState('');
    const [photoProfile, setPhotoProfile] = useState('');
    const [assessment, setAssessment] = useState('');
    const [txtAssessment, setTxtAssessment] = useState('');
    useEffect(() => {
      const loadData = async () => {
        try {
          const database = getDatabase();
          const referenciaDoNo = ref(database, 'assessments');
  
          const snapshot = await get(referenciaDoNo);
          const data = snapshot.val();
          console.log('Dados recuperados:', data);
  
          setAssessmentData(data);
        } catch (error) {
          console.error('Erro ao recuperar dados:', error);
        }
      };
  
      loadData();
    }, []);
    if (assessmentData) {
        // Iterar sobre as chaves do objeto assessmentData (que são os IDs dos usuários)
        Object.keys(assessmentData).forEach(userId => {
          // Acessar os dados de cada usuário
          const userData = assessmentData[userId];
          // Agora, userData contém um array com os dados do usuário
          const [name, photoProfile, assessment, txtAssessment] = userData;

        });
    }

        console.log(name)*/

    return(
        <section className={styles.assesssment__content} id='assessment'>
            
            <h1>Avaliações</h1>
            {/*}
            <Swiper
            spaceBetween={50}
            slidesPerView={3}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        {*/}


            <Card 
                personName='Maria Lucia'
                personImg={personImg}
                asses={assessmentImg}
            >
            </Card>
        
        </section>
    )
}