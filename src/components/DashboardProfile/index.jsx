import styles from './style.module.scss'

import DashboardTop from "components/DashboardTop";
import Footer from "components/Footer";
import Header from "components/Header";
import ImageUserOverlay from 'components/ImageUserOverlay';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function DashboardProfile(){

    const [imageProfile, setImageProfile] = useState('')
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [nameCard,setNameCard] = useState('')
    const [numberCard,setNumberCard] = useState('')
    const [expirationDate, setexpirationDate] = useState('')
    const [security,setSecurity] = useState('')


    const [inputValue, setInputValue] = useState('');

    const [overlayImg, setOverlayImg] = useState(false)

    const openOverlay = () => {
        setOverlayImg(!overlayImg);
    }

    const navigation = useNavigate();

    const auth = getAuth();

    const navigate = useNavigate();
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
                        setEmail(userData.email)
                        setPassword( userData.senha )
                        setNameCard( userData.nomecartao )
                        setNumberCard( userData.numerocartao )
                        setexpirationDate( userData.validade )
                        setSecurity( userData.codigoseguranca )
                        setImageProfile( userData.fotoperfil )
                    }
                } catch (error) {
                }
            } else {
                navigate('/');
            }
        });

    const exitUser = () => {
        auth.signOut().then(() => {
        navigation("/")
        }).catch(() => {
            //window.alert("Erro ao fazer logout tente novamente")
        })
    }

    return (
      <>
        <Header bg="#282D35" isDashboard></Header>
        <DashboardTop title="Meu perfil"></DashboardTop>

        { overlayImg ? <ImageUserOverlay closeOverlay={() => setOverlayImg(false)}></ImageUserOverlay> : '' }

        <div className={styles.user__profile}>
          <div className={styles.user__profile__image}>
            <div>
              <figure>
                <img onClick={openOverlay} alt={name} src={imageProfile}></img>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.29195 29.2745H7.97271L24.895 12.3522L23.2142 10.6715L6.29195 27.5937V29.2745ZM29.7462 10.7097L24.8568 5.82016L26.4611 4.21579C26.894 3.78287 27.4288 3.56641 28.0655 3.56641C28.7021 3.56641 29.2369 3.78287 29.6699 4.21579L31.3506 5.89656C31.7835 6.32948 32 6.86427 32 7.50092C32 8.13758 31.7835 8.67236 31.3506 9.10529L29.7462 10.7097ZM28.1419 12.314L8.8895 31.5664H4V26.6769L23.2524 7.42452L28.1419 12.314ZM24.0546 11.5118L23.2142 10.6715L24.895 12.3522L24.0546 11.5118Z" fill="black"/></svg>
              </figure>
            </div>
            <h1>{name}</h1>
          </div>
          <ul>
            <li>
              <label>Nome Completo</label>
              <input type="text" defaultValue={name} onChange={(e) => setInputValue(e.target.value)}></input>
            </li>
            <li>
              <label>Email</label>
              <input type="text" defaultValue={email}  onChange={(e) => setInputValue(e.target.value)}></input>
            </li>
            <li>
              <label>Senha</label>
              <input type="password" defaultValue={password}  onChange={(e) => setInputValue(e.target.value)}></input>
            </li>
            <li>
              <label>Nome do cartão</label>
              <input type="text" defaultValue={nameCard}  onChange={(e) => setInputValue(e.target.value)}></input>
            </li>
            <li>
              <label>Número do cartão</label>
              <input type="text" defaultValue={numberCard}  onChange={(e) => setInputValue(e.target.value)}></input>
            </li>

            <li>
              <label>Data de validade </label>
              <input type="text" defaultValue={expirationDate}  onChange={(e) => setInputValue(e.target.value)}></input>
            </li>

            <li>
              <label>Código de segurança (CVV) </label>
              <input type="text" defaultValue={security}  onChange={(e) => setInputValue(e.target.value)}></input>
            </li>

            <li>
              <h1 onClick={exitUser}>Sair da minha conta <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_659_4713)"><path d="M6.66667 6.66667H14.6667C15.4 6.66667 16 6.06667 16 5.33333C16 4.6 15.4 4 14.6667 4H6.66667C5.2 4 4 5.2 4 6.66667V25.3333C4 26.8 5.2 28 6.66667 28H14.6667C15.4 28 16 27.4 16 26.6667C16 25.9333 15.4 25.3333 14.6667 25.3333H6.66667V6.66667Z" fill="#333333"/><path d="M27.5333 15.5314L23.8133 11.8114C23.3867 11.3848 22.6667 11.6781 22.6667 12.2781V14.6648H13.3333C12.6 14.6648 12 15.2648 12 15.9981C12 16.7314 12.6 17.3314 13.3333 17.3314H22.6667V19.7181C22.6667 20.3181 23.3867 20.6114 23.8 20.1848L27.52 16.4648C27.7867 16.2114 27.7867 15.7848 27.5333 15.5314Z" fill="#333333"/></g><defs><clipPath id="clip0_659_4713"><rect width="32" height="32" fill="white"/></clipPath></defs></svg></h1>
            </li>
          </ul>
        </div>
        <Footer></Footer>
      </>
    );
}