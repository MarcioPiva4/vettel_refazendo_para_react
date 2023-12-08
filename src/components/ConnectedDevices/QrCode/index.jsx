import CardDashboard from "components/CardDashboard";
import DashboardTop from "components/DashboardTop";
import Header from "components/Header";
import UserIsLogin from "components/UserIsLogin";
import QRCode from "qrcode.react";

import styles from '../style.module.scss'
import { useState } from "react";
import { doc, getDoc, getFirestore, setDoc  } from "firebase/firestore";
import { app } from "services/firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Footer from "components/Footer";

export default function QrCode(){
    const auth = getAuth();
    const db = getFirestore(); 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
            const userId = user.uid;

            const userDocRef = doc(db, 'users', userId);

            try {
                const userDocSnapshot = await getDoc(userDocRef);

                if (userDocSnapshot.exists()) {
                    const userData = userDocSnapshot.data();
                    setEmail(userData.email)
                    setPassword( userData.senha)
                }
            } catch (error) {
            }
        }
    });

    return(
        <>
            <UserIsLogin></UserIsLogin>
            <Header bg='#282D35' isDashboard />
            <DashboardTop title={'Conecte outro dispositivo'}></DashboardTop>


            <main>
                <div className={styles.qrcode}>
                    <CardDashboard svg={<QRCode value={`https://vettel-refazendo-para-react.vercel.app/login?email=${email}&password=${password}`} ></QRCode>} text={'Escaneie o código'}></CardDashboard>
                </div>
            </main>

            <Footer></Footer>
        </>
    )
}