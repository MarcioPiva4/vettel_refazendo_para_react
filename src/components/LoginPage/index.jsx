import Forms from "components/Forms";
import styles from "./style.module.scss";

import { useNavigate } from 'react-router-dom';

import iconFacebook from "../../assets/icons/Facebook_icon_login.png";
import iconGoogle from "../../assets/icons/Google_icon.png";
import iconApple from "../../assets/icons/Apple_icon.png";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import LoadingOverlay from "components/LoadingOverlay";

export default function LoginPage() {
    const navigate = useNavigate();

    const handleSubmit = (inputValues) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, inputValues[0], inputValues[1])
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            navigate('/dashboard')
        })
        .catch((error) => {
            const errorCode = error.code;
        });
    };

  const labels = ["E-mail", "Senha"];
  const typesInputs = ["email", "password"];
  return (
    <section className={styles.login__container}>
        <LoadingOverlay></LoadingOverlay>
      <div className={styles.login__container__top}>
        <h1>Já usa nossos serviços?</h1>
        <h3>Faça seu login!</h3>
      </div>
      <Forms labels={labels} types={typesInputs} onSubmit={handleSubmit}>
        Entrar
      </Forms>

      <div className={styles.login__container__bottom}>
        <p>
          Ainda não tem acesso? <span>cadastre-se</span>
        </p>

        <h3>Logar com</h3>

        <div className={styles.login__container__bottom__icons}>
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

        <h4>Esqueci minha senha</h4>
      </div>
    </section>
  );
}
