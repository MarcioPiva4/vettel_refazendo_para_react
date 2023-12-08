/* eslint-disable default-case */
import BoxMessage from 'components/BoxMessage';
import styles from './style.module.scss'
import DashboardTop from "components/DashboardTop";
import Footer from "components/Footer";
import Header from "components/Header";
import ImageUserOverlay from 'components/ImageUserOverlay';
import UserIsLogin from 'components/UserIsLogin';

import { getAuth, onAuthStateChanged, updateEmail, updatePassword } from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { app } from 'services/firebaseConfig';
import NoScroll from 'components/NoScroll';
import { ThemeContext } from 'route';

export default function DashboardProfile(){
    const auth = getAuth();

    const navigate = useNavigate();
    const db = getFirestore(); 

    const user = auth.currentUser;

    //states do banco
    const [imageProfile, setImageProfile] = useState('')
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [nameCard,setNameCard] = useState('')
    const [numberCard,setNumberCard] = useState('')
    const [expirationDate, setexpirationDate] = useState('')
    const [security,setSecurity] = useState('')

    //states valor do campo onchange
    const [inputValueName, setInputValueName] = useState(name);
    useEffect(() => {
      setInputValueName(name);
    }, [name]);

    const [inputValueEmail, setInputValueEmail] = useState(email);
    useEffect(() => {
      setInputValueEmail(email);
    }, [email]);

    const [inputValuePassword, setInputValuePassword] = useState(password);
    useEffect(() => {
      setInputValuePassword(password);
    }, [password]);

    const [inputValueNameCard, setInputValueNameCard] = useState(nameCard);
    useEffect(() => {
      setInputValueNameCard(nameCard);
    }, [nameCard]);

    const [inputValueNumberCard, setInputValueNumberCard] = useState(numberCard);
    useEffect(() => {
      setInputValueNumberCard(numberCard);
    }, [numberCard]);

    const [inputValueExpirationDate, setInputValueExpirationDate] = useState(expirationDate);
    useEffect(() => {
      setInputValueExpirationDate(expirationDate);
    }, [expirationDate]);

    const [inputValueSecurity, setInputValueSecurity] = useState(security);
    useEffect(() => {
      setInputValueSecurity(security);
    }, [security]);


    //state overlay
    const [overlayImg, setOverlayImg] = useState(false)


    const [imageProfileLoading, setImageProfileLoading] = useState(false);
    const updateImageProfileLoading = (imageUrl) => {
      setImageProfileLoading(imageUrl);
  };

    //state mensagem
    const [messageBox, setMessageBox] = useState(false)
    const [message, setMessage] = useState('')

    //state de disable na input
    const [editInputName, setEditInputName] = useState(true)
    const [editInputEmail, setEditInputEmail] = useState(true)
    const [editInputPassword, setEditInputPassword] = useState(true)
    const [editInputNameCard, setEditInputNameCard] = useState(true)
    const [editInputNumberCard, setEditInputNumberCard] = useState(true)
    const [editInputExpirationDate, setEditInputExpirationDate] = useState(true)
    const [editInputSecurity, setEditInputSecurity] = useState(true)


    const submitInput = async(campo, funcCloseIcon, msgSucess) => {
      const db = getFirestore(app);
      const auth = getAuth(app);
      const userDocRef = doc(db, 'users', auth.currentUser.uid);


      let inputValue = '';
        switch (campo) {
          case "nome":
            inputValue = inputValueName;
            break;
          case "senha":
            inputValue = inputValuePassword
            break;
          case "nomecartao":
            inputValue = inputValueNameCard;
            break;
          case "numerocartao":
            inputValue = inputValueNumberCard;
            break;
          case "validade":
            inputValue = inputValueExpirationDate;
            break;
          case "codigoseguranca":
            inputValue = inputValueSecurity;
            break;
        }
        
        
      const userData = {
        [campo] : inputValue,
      };

      try {
        await setDoc(userDocRef, userData, { merge: true });
        setMessage(msgSucess)
        setMessageBox(true)
    } catch (error) {
        setMessage('Tivemos um erro ao atualizar este campo, tente novamente')
        setMessageBox(true)
    } finally{
      setTimeout(() => {
        setMessageBox(false)
      },5000)
    }
      const closeIcon = funcCloseIcon;
    }

    //funcoes para enviar os campos modificados para o banco
    const submitInputName = () => {
      submitInput('nome',editInputNameClick(), 'Nome alterado com sucesso')
    }

    const submitInputEmail = () => {
      submitInput('email',editInputEmailClick())
    }

    const submitInputPassword = () => {
      submitInput('senha',editInputPasswordClick(), 'Senha alterada com sucesso')
      updatePasswordFunction();
    }

    const submitInputNameCard = () => {
      submitInput('nomecartao',editInputNameCardClick(), 'Nome do cartão alterado com sucesso')
    }

    const submitInputNumberCard = () => {
      submitInput('numerocartao', editInputNumberCardClick(), 'Número do cartão alterado com sucesso')
    }

    const submitInputExpirationDate = () => {
      submitInput('validade', editInputExpirationDateClick(), 'Data de validade do cartão alterado com sucesso')
    }

    const submitInputSecurity = () => {
      submitInput('codigoseguranca', editInputSecurityClick(), 'Código de segurança do cartão alterado com sucesso')
    }


    //funcoes para alterar state da input
    const editInputNameClick = () => {
      setEditInputName(!editInputName);
    }

    const editInputEmailClick = () => {
      setEditInputEmail(!editInputEmail);
    }

    const editInputPasswordClick = () => {
      setEditInputPassword(!editInputPassword);
    }

    const editInputNameCardClick = () => {
      setEditInputNameCard(!editInputNameCard);
    }

    const editInputNumberCardClick = () => {
      setEditInputNumberCard(!editInputNumberCard);
    }

    const editInputExpirationDateClick = () => {
      setEditInputExpirationDate(!editInputExpirationDate);
    }

    const editInputSecurityClick = () => {
      setEditInputSecurity(!editInputSecurity);
    }


    const openOverlay = () => {
        setOverlayImg(!overlayImg);
    }

    //funcao que recuperar os dados no banco
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
            }
        });

    //funcao para sair do firebase auth
    const exitUser = () => {
        auth.signOut().then(() => {
          navigate("/")
        })
    }

    //funcao para alterar email do firebase
    /*const updateEmailFunction = () => {
      updateEmail(user, 'marciopivinajunior@outlook.com').then((response) => {
        console.log(response)
      }).catch(error => console.log(error,'adasd'));
    }*/

    //funcao para alterar a senha
    const updatePasswordFunction = () => {
      updatePassword(user, inputValuePassword);
    }

    const { themeDark, toggleTheme } = useContext(ThemeContext);

    return (
      <>
        <UserIsLogin></UserIsLogin>
        <NoScroll></NoScroll>
        <Header bg="#282D35" isDashboard></Header>
        <DashboardTop title="Meu perfil"></DashboardTop>
        {messageBox ? <BoxMessage message={message}></BoxMessage> : ''}
        { overlayImg ? <><NoScroll NoScroll></NoScroll><ImageUserOverlay closeOverlay={() => setOverlayImg(false)} updateImageProfile={updateImageProfileLoading}></ImageUserOverlay></> : '' }

        <main>
          <div className={styles.user__profile}>
            <div className={styles.user__profile__image}>
              <div>
                <figure>
                  <svg onClick={openOverlay} width="32" height="32" style={imageProfileLoading ? {display:"none"} : {display:"block"}} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.29195 29.2745H7.97271L24.895 12.3522L23.2142 10.6715L6.29195 27.5937V29.2745ZM29.7462 10.7097L24.8568 5.82016L26.4611 4.21579C26.894 3.78287 27.4288 3.56641 28.0655 3.56641C28.7021 3.56641 29.2369 3.78287 29.6699 4.21579L31.3506 5.89656C31.7835 6.32948 32 6.86427 32 7.50092C32 8.13758 31.7835 8.67236 31.3506 9.10529L29.7462 10.7097ZM28.1419 12.314L8.8895 31.5664H4V26.6769L23.2524 7.42452L28.1419 12.314ZM24.0546 11.5118L23.2142 10.6715L24.895 12.3522L24.0546 11.5118Z" fill="black"/></svg>
                  <img onClick={openOverlay} alt={name} src={imageProfile} style={imageProfileLoading ? {display:"none"} : {display:"block"}}></img>
                  {imageProfileLoading ? <span className={styles.loader}></span> : ''}
                </figure>
              </div>
              <h1 style={themeDark ? {color:"#fff"} : {}}>{name}</h1>
            </div>
            <ul>
              <li>
                <div>
                  <label>Nome Completo</label>
                  <input type="text" defaultValue={name} onChange={(e) => setInputValueName(e.target.value)} disabled={editInputName} style={themeDark ? {backgroundColor:'#282D35',color:'#fff'} : {}}></input>
                </div>
                <svg style={editInputName ? {display:'block'} : {display:'none'}} onClick={editInputNameClick} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.29195 29.2745H7.97271L24.895 12.3522L23.2142 10.6715L6.29195 27.5937V29.2745ZM29.7462 10.7097L24.8568 5.82016L26.4611 4.21579C26.894 3.78287 27.4288 3.56641 28.0655 3.56641C28.7021 3.56641 29.2369 3.78287 29.6699 4.21579L31.3506 5.89656C31.7835 6.32948 32 6.86427 32 7.50092C32 8.13758 31.7835 8.67236 31.3506 9.10529L29.7462 10.7097ZM28.1419 12.314L8.8895 31.5664H4V26.6769L23.2524 7.42452L28.1419 12.314ZM24.0546 11.5118L23.2142 10.6715L24.895 12.3522L24.0546 11.5118Z" fill={themeDark ? 'white' : 'black'}/></svg>
                <div style={editInputName ? {display:'none'} : {display:'block'}} onClick={submitInputName} > <h5 className={themeDark && styles.darkmode}>Salvar</h5></div>
              </li>
              <li>
                <div>
                <label>Email</label>
                <input type="text" defaultValue={email}  onChange={(e) => setInputValueEmail(e.target.value)}  disabled={editInputEmail} style={themeDark ? {backgroundColor:'#282D35',color:'#fff'} : {}}></input>
                </div>
                <svg style={editInputEmail ? {display:'block'} : {display:'none'}} onClick={editInputEmailClick} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.29195 29.2745H7.97271L24.895 12.3522L23.2142 10.6715L6.29195 27.5937V29.2745ZM29.7462 10.7097L24.8568 5.82016L26.4611 4.21579C26.894 3.78287 27.4288 3.56641 28.0655 3.56641C28.7021 3.56641 29.2369 3.78287 29.6699 4.21579L31.3506 5.89656C31.7835 6.32948 32 6.86427 32 7.50092C32 8.13758 31.7835 8.67236 31.3506 9.10529L29.7462 10.7097ZM28.1419 12.314L8.8895 31.5664H4V26.6769L23.2524 7.42452L28.1419 12.314ZM24.0546 11.5118L23.2142 10.6715L24.895 12.3522L24.0546 11.5118Z" fill={themeDark ? 'white' : 'black'}/></svg>
                <div style={editInputEmail ? {display:'none'} : {display:'block'}} /*onClick={updateEmailFunction}*/> <h5 className={themeDark && styles.darkmode}>Salvar</h5></div>
              </li>
              <li>
                <div>
                <label>Senha</label>
                <input type={editInputPassword ? 'password' : 'text'} defaultValue={password} onChange={(e) => setInputValuePassword(e.target.value)} disabled={editInputPassword} style={themeDark ? {backgroundColor:'#282D35',color:'#fff'} : {}}></input>
                </div>
                <h5 style={editInputPassword ? {display:'block'} : {display:'none'}} className={themeDark && styles.darkmode} onClick={editInputPasswordClick}>Alterar senha</h5>
                <h5 style={editInputPassword ? {display:'none'} : {display:'block'}} onClick={submitInputPassword}>Salvar</h5>
              </li>
              <li>
                <div> 
                <label>Nome do cartão</label>
                <input type="text" defaultValue={nameCard} onChange={(e) => setInputValueNameCard(e.target.value)}  disabled={editInputNameCard} style={themeDark ? {backgroundColor:'#282D35',color:'#fff'} : {}}></input>
                </div>
                <svg style={editInputNameCard ? {display:'block'} : {display:'none'}} onClick={editInputNameCardClick}  width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.29195 29.2745H7.97271L24.895 12.3522L23.2142 10.6715L6.29195 27.5937V29.2745ZM29.7462 10.7097L24.8568 5.82016L26.4611 4.21579C26.894 3.78287 27.4288 3.56641 28.0655 3.56641C28.7021 3.56641 29.2369 3.78287 29.6699 4.21579L31.3506 5.89656C31.7835 6.32948 32 6.86427 32 7.50092C32 8.13758 31.7835 8.67236 31.3506 9.10529L29.7462 10.7097ZM28.1419 12.314L8.8895 31.5664H4V26.6769L23.2524 7.42452L28.1419 12.314ZM24.0546 11.5118L23.2142 10.6715L24.895 12.3522L24.0546 11.5118Z" fill={themeDark ? 'white' : 'black'}/></svg>
                <div style={editInputNameCard ? {display:'none'} : {display:'block'}} onClick={submitInputNameCard}> <h5 className={themeDark && styles.darkmode}>Salvar</h5></div>
              </li>
              <li>
                <div>
                <label>Número do cartão</label>
                <input type="text" defaultValue={numberCard} onChange={(e) => setInputValueNumberCard(e.target.value)}  disabled={editInputNumberCard} style={themeDark ? {backgroundColor:'#282D35',color:'#fff'} : {}}></input>
                </div>
                <svg style={editInputNumberCard ? {display:'block'} : {display:'none'}} onClick={editInputNumberCardClick} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.29195 29.2745H7.97271L24.895 12.3522L23.2142 10.6715L6.29195 27.5937V29.2745ZM29.7462 10.7097L24.8568 5.82016L26.4611 4.21579C26.894 3.78287 27.4288 3.56641 28.0655 3.56641C28.7021 3.56641 29.2369 3.78287 29.6699 4.21579L31.3506 5.89656C31.7835 6.32948 32 6.86427 32 7.50092C32 8.13758 31.7835 8.67236 31.3506 9.10529L29.7462 10.7097ZM28.1419 12.314L8.8895 31.5664H4V26.6769L23.2524 7.42452L28.1419 12.314ZM24.0546 11.5118L23.2142 10.6715L24.895 12.3522L24.0546 11.5118Z" fill={themeDark ? 'white' : 'black'}/></svg>
                <div style={editInputNumberCard ? {display:'none'} : {display:'block'}} onClick={submitInputNumberCard}> <h5 className={themeDark && styles.darkmode}>Salvar</h5></div>
              </li>

              <li>
                <div>
                <label>Data de validade </label>
                <input type="text" defaultValue={expirationDate} onChange={(e) => setInputValueExpirationDate(e.target.value)} disabled={editInputExpirationDate} style={themeDark ? {backgroundColor:'#282D35',color:'#fff'} : {}}></input>
                </div>
                <svg style={editInputExpirationDate ? {display:'block'} : {display:'none'}} onClick={editInputExpirationDateClick} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.29195 29.2745H7.97271L24.895 12.3522L23.2142 10.6715L6.29195 27.5937V29.2745ZM29.7462 10.7097L24.8568 5.82016L26.4611 4.21579C26.894 3.78287 27.4288 3.56641 28.0655 3.56641C28.7021 3.56641 29.2369 3.78287 29.6699 4.21579L31.3506 5.89656C31.7835 6.32948 32 6.86427 32 7.50092C32 8.13758 31.7835 8.67236 31.3506 9.10529L29.7462 10.7097ZM28.1419 12.314L8.8895 31.5664H4V26.6769L23.2524 7.42452L28.1419 12.314ZM24.0546 11.5118L23.2142 10.6715L24.895 12.3522L24.0546 11.5118Z" fill={themeDark ? 'white' : 'black'}/></svg>
                <div style={editInputExpirationDate ? {display:'none'} : {display:'block'}} onClick={submitInputExpirationDate}> <h5 className={themeDark && styles.darkmode}>Salvar</h5></div>
              </li>

              <li>
                <div>
                <label>Código de segurança (CVV) </label>
                <input type="text" defaultValue={security}  onChange={(e) => setInputValueSecurity(e.target.value)}  disabled={editInputSecurity} style={themeDark ? {backgroundColor:'#282D35',color:'#fff'} : {}}></input>
                </div>
                <svg style={editInputSecurity ? {display:'block'} : {display:'none'}} onClick={editInputSecurityClick} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.29195 29.2745H7.97271L24.895 12.3522L23.2142 10.6715L6.29195 27.5937V29.2745ZM29.7462 10.7097L24.8568 5.82016L26.4611 4.21579C26.894 3.78287 27.4288 3.56641 28.0655 3.56641C28.7021 3.56641 29.2369 3.78287 29.6699 4.21579L31.3506 5.89656C31.7835 6.32948 32 6.86427 32 7.50092C32 8.13758 31.7835 8.67236 31.3506 9.10529L29.7462 10.7097ZM28.1419 12.314L8.8895 31.5664H4V26.6769L23.2524 7.42452L28.1419 12.314ZM24.0546 11.5118L23.2142 10.6715L24.895 12.3522L24.0546 11.5118Z" fill={themeDark ? 'white' : 'black'}/></svg>
                <div style={editInputSecurity ? {display:'none'} : {display:'block'}} onClick={submitInputSecurity}> <h5 className={themeDark && styles.darkmode}>Salvar</h5></div>
              </li>

              <li>
                <h1 onClick={exitUser} style={themeDark ? {color:'#fff'} : {color:'#333'}}>Sair da minha conta <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_659_4713)"><path d="M6.66667 6.66667H14.6667C15.4 6.66667 16 6.06667 16 5.33333C16 4.6 15.4 4 14.6667 4H6.66667C5.2 4 4 5.2 4 6.66667V25.3333C4 26.8 5.2 28 6.66667 28H14.6667C15.4 28 16 27.4 16 26.6667C16 25.9333 15.4 25.3333 14.6667 25.3333H6.66667V6.66667Z" fill="#333333"/><path d="M27.5333 15.5314L23.8133 11.8114C23.3867 11.3848 22.6667 11.6781 22.6667 12.2781V14.6648H13.3333C12.6 14.6648 12 15.2648 12 15.9981C12 16.7314 12.6 17.3314 13.3333 17.3314H22.6667V19.7181C22.6667 20.3181 23.3867 20.6114 23.8 20.1848L27.52 16.4648C27.7867 16.2114 27.7867 15.7848 27.5333 15.5314Z" fill={themeDark ? 'white' : '#333'}/></g><defs><clipPath id="clip0_659_4713"><rect width="32" height="32" fill="white"/></clipPath></defs></svg></h1>
              </li>
            </ul>
          </div>
        </main>
        <Footer></Footer>
      </>
    );
}