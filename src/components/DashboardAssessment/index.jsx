/* eslint-disable default-case */
// Importe os módulos do Firebase
import DashboardTop from 'components/DashboardTop';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { get, getDatabase, push, ref, set } from 'firebase/database';
import { app } from 'services/firebaseConfig';
import Star from './Star';
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
  export default function DashboardAssessment(){
    const items = [...(new Array(5).keys())];
    const [activeIndex, setActiveIndex] = useState(null);
    let submitBdAssessment = 0;

    switch (activeIndex) {
      case undefined:
        submitBdAssessment = 0
        break;
      case 0:
        submitBdAssessment = 1
        break;
      case 1:
        submitBdAssessment = 2
        break;
      case 2:
        submitBdAssessment = 3
        break;
      case 3:
        submitBdAssessment = 4
        break;
      case 4:
        submitBdAssessment = 5
        break;
    }
  
    const onClickStar = (index) => {
      setActiveIndex((oldState) => (oldState === index ? undefined : index));
    };

    const database = getDatabase();
    const referenciaDoNo = ref(database, 'assessments');


    const [name,setName] = useState();
    const [photoProfile, setPhotoProfile] = useState();
    const [txtAssessment, setTxtAssessment] = useState('');
    const handleTxt = (e) => {
        setTxtAssessment(e)
    }
    const auth = getAuth(app);
    const db = getFirestore();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
            const userId = user.uid;

            const userDocRef = doc(db, 'users', userId);

            try {
                const userDocSnapshot = await getDoc(userDocRef);

                if (userDocSnapshot.exists()) {
                    const userData = userDocSnapshot.data();
                    setName( userData.nome)
                    setPhotoProfile(userData.fotoperfil)
                }
            } catch (error) {
            }
        }
    });

    const user = auth.currentUser.uid
    const assessment = {
       [user] : [name,photoProfile,submitBdAssessment,txtAssessment],
    };

    
    console.log(ref(database, '/assessments'))

    const teste = async() => {
      try{
        (await get(ref(database, '/assessments'))).toJSON()
      } catch{
        
      }
    }

    const submitData = () => {


        push(referenciaDoNo, assessment)
        .then(() => {
            console.log('Dados enviados com sucesso!');
        })
        .catch((erro) => {
            console.error('Erro ao enviar dados:', erro);
        });
    }


    return (

        <>
        <Header bg='#282D35' isDashboard></Header>
        <DashboardTop title='Avalia-nos'></DashboardTop>
        <div>
            <h1>Avalie nossa plataforma abaixo:</h1>
            {items.map((index) => (
                <Star
                onClick={() => onClickStar(index)}
                key={`star_${index}`}
                isActive={index <= activeIndex}
                />
            ))}
            <div>ESTRELAS</div>
            <textarea placeholder='Qual foi sua experiência? (OPCIONAL)' onChange={e => handleTxt(e.target.value)}></textarea>
            <button onClick={submitData}> Enviar avaliação </button>
        </div>

        <Footer></Footer>
        </>
    )
  }