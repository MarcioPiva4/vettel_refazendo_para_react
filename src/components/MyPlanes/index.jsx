import { useState } from 'react';
import styles from './style.module.scss'
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from 'services/firebaseConfig';
import CardPlane from 'components/CardPlane';
import { useContext } from 'react';
import { ThemeContext } from 'route';
import car from "../../assets/imgs/ford-mustang-gt350r-16 1.png";
import { Link } from 'react-router-dom';
export default function MyPlanes({ isOtherPage }) {
  const { themeDark, toggleTheme } = useContext(ThemeContext);
  const [nameCar, setNameCar] = useState("");
  const [plate, setPlate] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [userData, setUserData] = useState(null); // Set initial state to null
  const [newDataPlan,setNewDataPlan] = useState("")
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
          setUserData(userData);
          setNameCar(userData.planos.plans[0].nome);
          setPlate(userData.planos.plans[0].placa);
          setColor(userData.planos.plans[0].cor);
          setYear(userData.planos.plans[0].ano);
          setNewDataPlan(userData.planos.plans[0].plano)
        }
      } catch (error) {
      }
    }
  });

  if (userData === null) {
    return null;
  }
  return (
    <>
      {isOtherPage ? (
        <div className={styles.dashboard__grid__card}>
          {userData.planos.plans.map((plan, index) => (
            <CardPlane
              key={index}
              src={plan.foto}
              title={plan.nome}
              moreInformations={[
                `Ano: ${plan.ano}`,
                `Placa: ${plan.placa}`,
                `Cor: ${plan.cor}`,
                `Plano: ${plan.plano}`
              ]}
            ></CardPlane>
          ))}
        </div>
      ) : (
        <div className={styles.dashboard__container__planes} style={themeDark ? {backgroundColor:"#0E0F11"} : {}}>
          <h1 className={styles.title}>Meus planos</h1>
          <CardPlane
            src={car}
            title={nameCar}
            moreInformations={[
              `Ano: ${year}`,
              `Placa: ${plate}`,
              `Cor: ${color}`,
              `Plano: ${newDataPlan}`,
            ]}
          ></CardPlane>
          <div className={styles.dashboard__container__planes__button}>
            <Link to={"/painel/planos"}>
              <button style={themeDark ? {backgroundColor:"#282D35", color:"#fff"} : {}}>Ver meus planos</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}