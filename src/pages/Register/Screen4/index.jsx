import styles from '../style.module.scss'

import ArrowBack from "components/ArrowBack";
import FormModelRegister from 'components/FormModelRegister';
import { useNavigate } from 'react-router-dom';

import { app } from 'services/firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";

export default function Screen4(){
    const labels = ["E-mail", "Senha", "Confirmar senha", "Data de nascimento", "Cidade"];
    const typesInputs = ["email", "password", "password", "text", "text"];
    const auth = getAuth(app);
    const db = getFirestore(app);

    const navigate = useNavigate()

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
            JSON.parse(storedValuesScreen4)
        ]

        const email = values[3][0]; 
        const password = values[3][2];
        setUserInFireBase(email, password, values)
    }

    const setUserInFireBase = async (email, password, data) => {
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);

            const userDocRef = doc(db, 'users', user.uid); 
            const userData = {
                nome: data[0][0],
                email: data[3][0],
                cpf: data[0][2],
                telefone: data[0][3],
                numerocartao: data[2][0],
                nomecartao: data[2][1],
                validade: data[2][2],
                codigoseguranca: data[2][3],
                datanascimento: data[3][3],
                cidade: data[3][4],
            };
            await setDoc(userDocRef, userData);
            localStorage.clear();
            navigate('/dashboard');

        } catch (error) {
            console.error(error);
        }
    }



    return(
        <section className={styles.register__container}>
            <ArrowBack></ArrowBack>
                <FormModelRegister title="Confirme seus dados" labels={labels} types={typesInputs} onSubmit={nextPage} shadow='0px 4px 4px rgba(0, 0, 0, 0.25)'>
                CRIAR CONTA
            </FormModelRegister>

        </section>
    )
}