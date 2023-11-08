import styles from '../style.module.scss'

import ArrowBack from "components/ArrowBack";
import FormModelRegister from 'components/FormModelRegister';
import { useNavigate } from 'react-router-dom';

export default function Screen1(){
    const labels = ["Nome Completo", "E-mail", "CPF", "Telefone com DDD"];
    const typesInputs = ["text", "email", "text", "text"];


    const navigate = useNavigate()
    const nextPage = () => {
        navigate('/register/screen2')
    }
    return(
        <section className={styles.register__container}>
            <ArrowBack></ArrowBack>
            <FormModelRegister title="CRIE SUA CONTA" labels={labels} types={typesInputs} onSubmit={nextPage}>
                Continuar
            </FormModelRegister>
        </section>
    )
}