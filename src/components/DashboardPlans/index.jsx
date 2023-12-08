import DashboardTop from "components/DashboardTop";
import Footer from "components/Footer";
import Header from "components/Header";
import MyPlanes from "components/MyPlanes";
import UserIsLogin from "components/UserIsLogin";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "services/firebaseConfig";
export default function DashboardPlans() {
  const navigation = useNavigate();
  const auth = getAuth();

  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      navigation("/");
    }
  });

  const [openPlanBox, setOpenPlanBox] = useState(false);

  const openBox = () => {
    setOpenPlanBox(!openPlanBox);
  };

  const [newName, setNewName] = useState("");
  const [newYear, setNewYear] = useState("");
  const [newPlate, setNewPlate] = useState("");
  const [newColor, setNewColor] = useState("");
  const [newDataPlan, setNewDataPlan] = useState("");

  const db = getFirestore(app);
  const user = getAuth();

  const [img, setImg] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const handleImg = (e) => {
    const file = e.target.files[0];

    if (file) {
        setImg(file);
    }
  }; 

  const savePhotoUser = () => {
    return new Promise((resolve, reject) => {
      var reader = new FileReader();
  
      reader.onload = function (e) {
        const imageUrl = e.target.result;
        setImgUrl(imageUrl);  // Set imageUrl in the state
        resolve(imageUrl);
      };
  
      reader.onerror = function (error) {
        reject(error);
      };
  
      if (img) {
        reader.readAsDataURL(img);
      } else {
        console.log('Nenhum arquivo selecionado.');
        resolve(null);
      }
    });
  };

  const setNewPlan = async () => {
    try {
      const imageUrl = await savePhotoUser();  // Wait for the photo URL
      const userDocRef = doc(db, "users", user.currentUser.uid);
      const userDoc = await getDoc(userDocRef);
  
      if (userDoc.exists()) {
        const userData = userDoc.data();
        const existingPlans = Array.isArray(userData.planos?.plans) ? userData.planos.plans : [];
  
        const isPlanExists = existingPlans.some((plan) => plan.nome === newName);
        if (!isPlanExists) {
          const updatedPlans = [...existingPlans, {
            nome: newName,
            ano: newYear,
            placa: newPlate,
            cor: newColor,
            plano: newDataPlan,
            foto: imageUrl,  // Use imageUrl here
          }];
  
          await setDoc(userDocRef, {
            ...userData,
            planos: { plans: updatedPlans },
          });
        }
      }
      openBox()
      setNewColor("")
      setNewName("")
      setNewPlate("")
      setNewYear("")
      setNewDataPlan("");
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <>
      <UserIsLogin></UserIsLogin>
      <Header bg="#282D35" isDashboard></Header>

      <DashboardTop title="Meus planos"></DashboardTop>
      <MyPlanes isOtherPage></MyPlanes>

      <main>
        <div className={styles.plans__container} onClick={openBox}>
          <div className={styles.plans__container__more}>
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.2503 44.3346V29.7513H11.667V26.2513H26.2503V11.668H29.7503V26.2513H44.3337V29.7513H29.7503V44.3346H26.2503Z"
                fill="#E40101"
              />
            </svg>
            <p>Adicionar novo plano</p>
          </div>
        </div>

        <div
          className={styles.plans__box}
          style={
            openPlanBox
              ? { opacity: "1", visibility: "visible" }
              : { opacity: "0", visibility: "hidden" }
          }
        >
          <div onClick={openBox}>X</div>
          <div>
            <label>Nome: </label>
            <input
              type="text"
              onChange={(e) => setNewName(e.target.value)}
              value={newName}
            ></input>
            <label>Ano: </label>
            <input
              type="text"
              onChange={(e) => setNewYear(e.target.value)}
              value={newYear}
            ></input>
            <label>Placa: </label>
            <input
              type="text"
              onChange={(e) => setNewPlate(e.target.value)}
              value={newPlate}
            ></input>
            <label>Cor: </label>
            <input
              type="text"
              onChange={(e) => setNewColor(e.target.value)}
              value={newColor}
            ></input>
            <label>Foto: </label>
            <input
              type="file"
              onChange={(e) => handleImg(e)}
            ></input>
            <label>Plano: </label>
            <select onChange={(e) => setNewDataPlan(e.target.value)}>
              <option value="Básico">Básico - R$499,99</option>
              <option value="Premium">Premium - R$599,99</option>
            </select>
            <button onClick={setNewPlan}>Pronto</button>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
