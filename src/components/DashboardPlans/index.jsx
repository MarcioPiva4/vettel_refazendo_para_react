
import DashboardTop from "components/DashboardTop";
import Footer from "components/Footer";
import Header from "components/Header";
import MyPlanes from "components/MyPlanes";
import UserIsLogin from "components/UserIsLogin";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import styles from './style.module.scss'
import { useState } from "react";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "services/firebaseConfig";
export default function DashboardPlans(){
    const navigation = useNavigate();
    const auth = getAuth();

    onAuthStateChanged(auth, async (user) => {
        if(!user){
            navigation('/')
        }
    })


    const [openPlanBox, setOpenPlanBox] = useState(false)

    const openBox = () => {
        setOpenPlanBox(!openPlanBox)
    }

    const [newName, setNewName] = useState('')
    const [newYear, setNewYear] = useState('')
    const [newPlate, setNewPlate] = useState('')
    const [newColor, setNewColor] = useState('')
    const [newPhoto, setNewPhoto] = useState('')

    const savePhotoUser = async () => {
        if (newPhoto) {
            var reader = new FileReader();
    
            reader.onload = async function (e) {
                const imageUrl = e.target.result;
                return imageUrl;
            };
    
            reader.readAsDataURL(newPhoto);
        } else {
            console.log('Nenhum arquivo selecionado.');
        }
    };
    const db = getFirestore(app); 
    const user = getAuth();


const setNewPlan = async () => {
    try {
        const userDocRef = doc(db, 'users', user.currentUser.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            const userData = userDoc.data();

            // Obtém os planos existentes ou inicializa um array vazio
            const existingPlans = userData.planos ? userData.planos.planoAdd || [] : [];

            // Adiciona o novo plano ao array de planos existentes
            const photoURL = await savePhotoUser();
            const updatedPlans = [...existingPlans, {
                nome: newName,
                ano: newYear,
                placa: newPlate,
                cor: newColor,
                foto: photoURL, // Usa a URL do arquivo
            }];

            // Atualiza os dados no banco de dados
            await setDoc(userDocRef, { planos: { planoAdd: updatedPlans } });
        }
    } catch (error) {
        console.error(error);
    }
};


    
    return (
        <>
        <UserIsLogin></UserIsLogin>
        <Header bg='#282D35' isDashboard></Header>

            <DashboardTop title='Meus planos'></DashboardTop>
            
            <MyPlanes isOtherPage></MyPlanes>

            <div className={styles.plans__container} onClick={openBox}>
                <div className={styles.plans__container__more}>
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.2503 44.3346V29.7513H11.667V26.2513H26.2503V11.668H29.7503V26.2513H44.3337V29.7513H29.7503V44.3346H26.2503Z" fill="#E40101"/></svg>
                    <p>Adicionar novo plano</p>
                </div>
            </div>

            <div className={styles.plans__box} style={openPlanBox ? {opacity:"1", visibility:"visible"} : {opacity:"0", visibility:"hidden"}}>
                <div onClick={openBox}>X</div>
                <div>
                    <label>Nome: </label>
                    <input type="text" onChange={e => setNewName(e.target.value)}></input>
                    <label>Ano: </label>
                    <input type="text" onChange={e => setNewYear(e.target.value)}></input>
                    <label>Placa: </label>
                    <input type="text" onChange={e => setNewPlate(e.target.value)}></input>
                    <label>Cor: </label>
                    <input type="text" onChange={e => setNewColor(e.target.value)}></input>
                    <label>Foto: </label>
                    <input type="file" onChange={e => setNewPhoto(e.target.files[0])}></input>
                    <label>Plano: </label>
                    <select>
                        <option>Básico - R$499,99</option>
                        <option>Premium - R$599,99</option>
                    </select>
                    <button onClick={setNewPlan}>Pronto</button>
                </div>
            </div>
           
        <Footer></Footer>
        </>
    )
}