import styles from '../style.module.scss';
import ArrowBack from 'components/ArrowBack';
import FormModelRegister from 'components/FormModelRegister';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { app } from 'services/firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import LoadingOverlay from 'components/LoadingOverlay';

export default function Screen4() {
  const [overlay, setOverlay] = useState(false);
  const [storedValues, setStoredValues] = useState({});
  const navigate = useNavigate();

  const labels = ['E-mail', 'Senha', 'Confirmar senha', 'Data de nascimento', 'Cidade'];
  const typesInputs = ['email', 'password', 'password', 'text', 'text'];
  const auth = getAuth(app);
  const db = getFirestore(app);

  const nextPage = (inputs) => {
    localStorage.setItem('inputValuesScreen4', JSON.stringify(inputs));
    const storedValuesScreen1 = localStorage.getItem('inputValuesScreen1');
    const storedValuesScreen2 = localStorage.getItem('inputValuesScreen2');
    const storedValuesScreen3 = localStorage.getItem('inputValuesScreen3');
    const storedValuesScreen4 = localStorage.getItem('inputValuesScreen4');

    const values = [
      JSON.parse(storedValuesScreen1),
      JSON.parse(storedValuesScreen2),
      JSON.parse(storedValuesScreen3),
      JSON.parse(storedValuesScreen4),
    ];

    const email = values[3][0];
    const password = values[3][2];
    setUserInFireBase(email, password, values);
  };

  const setUserInFireBase = async (email, password, data) => {
    setOverlay(true);
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      const userDocRef = doc(db, 'users', user.uid);
      const userData = {
        nome: data[0][0],
        email: data[3][0],
        senha: data[3][2],
        cpf: data[0][2],
        telefone: data[0][3],
        planos: {
          plans: [
            {
              nome: data[1][0],
              ano: data[1][1],
              placa: data[1][2],
              cor: data[1][3],
              foto: "https://garagem360.com.br/wp-content/uploads/2021/10/20190917_02_23.jpg"
            }
          ],
        },
        numerocartao: data[2][0],
        nomecartao: data[2][1],
        validade: data[2][2],
        codigoseguranca: data[2][3],
        datanascimento: data[3][3],
        cidade: data[3][4],
        fotoperfil: 'data:image/jpeg;base64,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',
        isadmin: false,
        isdarkmode: false,
      };
      await setDoc(userDocRef, userData);
      localStorage.clear();
      setTimeout(() => {
        setOverlay(false);
        navigate('/painel');
      }, 3500);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setOverlay(false);
      }, 3500);
    }
  };

  useEffect(() => {
    const storedValuesScreen4 = localStorage.getItem('inputValuesScreen4');
    if (storedValuesScreen4) {
      setStoredValues(JSON.parse(storedValuesScreen4));
    }
  }, []);
  const sanitizedInputValues = Array.isArray(storedValues) ? storedValues : Array(labels.length).fill('');
  return (
    <>
      <section className={styles.register__container}>
        {overlay && <LoadingOverlay resetGif />}
        <ArrowBack />
        <FormModelRegister
          title="Confirme seus dados"
          labels={labels}
          types={typesInputs}
          onSubmit={nextPage}
          values={sanitizedInputValues}
          shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        >
          CRIAR CONTA
        </FormModelRegister>
      </section>
    </>
  );
}
