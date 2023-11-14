import styles from "./style.module.scss";
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import LoadingOverlay from "components/LoadingOverlay";
import {  useState } from "react";
import { app } from "services/firebaseConfig";
import FormModelLogin from "components/FormModelLogin";

import iconFacebook from"../../assets/icons/Facebook_icon_login.png";
import iconGoogle from "../../assets/icons/Google_icon.png";
import iconApple from "../../assets/icons/Apple_icon.png";

export default function FormLogin() {
    const navigate = useNavigate();

    const [overlay, setOverlay] = useState(false);
    const handleSubmit = async (inputValues) => {
        setOverlay(true);
        const auth = getAuth();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, inputValues[0], inputValues[1]);
            const user = userCredential.user;
            setTimeout(() => {
                setOverlay(false);
                navigate('/dashboard');
            }, 3700); 
        } catch (error) {
            //const errorCode = error.code;
        } finally {
            setTimeout(() => {
                setOverlay(false);
            }, 3700); 
        }
    };

    const labels = ["E-mail", "Senha"];
    const typesInputs = ["email", "password"];

    return (
      <section className={styles.login__container}>
        {overlay && <LoadingOverlay resetGif></LoadingOverlay>}

        <FormModelLogin
          title="Já usa nossos serviços?"
          subtitle="Faça seu login!"
          labels={labels}
          types={typesInputs}
          onSubmit={handleSubmit}
        >
          Entrar
        </FormModelLogin>

        <div className={styles.login__container__main}>
          <p>
            Ainda não tem acesso?{" "}
            <Link to={"/register/screen1"}>
              <span>cadastre-se</span>
            </Link>
          </p>

          <h3>Logar com</h3>

          <div className={styles.login__container__main__icons}>
            <div className={styles.login__container__main__icons}>
              <div>
                <figure>
                  <img
                    src={iconFacebook}
                    alt="icone do facebook, clique para poder logar"
                  ></img>
                </figure>
              </div>
              <div>
                <figure>
                  <img
                    src={iconGoogle}
                    alt="icone do google, clique para poder logar"
                  ></img>
                </figure>
              </div>
              <div>
                <figure>
                  <img
                    src={iconApple}
                    alt="icone do apple, clique para poder logar"
                  ></img>
                </figure>
              </div>
            </div>
          </div>

          <h4>Esqueci minha senha</h4>
        </div>
      </section>
    );
}
