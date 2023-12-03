import { useState } from 'react';
import styles from './style.module.scss'
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from 'services/firebaseConfig';
import CardPlane from 'components/CardPlane';

import car from "../../assets/imgs/ford-mustang-gt350r-16 1.png";
import { Link } from 'react-router-dom';
export default function MyPlanes({ isOtherPage }) {
    
    const [nameCar, setNameCar] = useState("");
    const [plate, setPlate] = useState("");
    const [year, setYear] = useState("");
    const [color, setColor] = useState("");
    const db = getFirestore(app);
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userId = user.uid;
  
        const userDocRef = doc(db, "users", userId);
  
        try {
          const userDocSnapshot = await getDoc(userDocRef);
  
          if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
            setNameCar(userData.planos[0]);
            setPlate(userData.planos[1]);
            setColor(userData.planos[2]);
            setYear(userData.planos[3]);
          }
        } catch (error) {}
      }
    });
    return (
      <>
        {isOtherPage ? (
          <div className={styles.dashboard__grid__card}>
            <CardPlane
              src={car}
              title={nameCar}
              moreInformations={[
                `Ano: ${year}`,
                `Placa: ${plate}`,
                `Cor: ${color}`,
              ]}
            ></CardPlane>
          </div>
        ) : (
          <div className={styles.dashboard__container__planes}>
            <h1 className={styles.title}>Meus planos</h1>
            <CardPlane
              src={car}
              title={nameCar}
              moreInformations={[
                `Ano: ${year}`,
                `Placa: ${plate}`,
                `Cor: ${color}`,
              ]}
            ></CardPlane>
            <div className={styles.dashboard__container__planes__button}>
              <Link to={"/painel/planos"}>
                <button>Ver meus planos</button>
              </Link>
            </div>
          </div>
        )}
      </>
    );
  }