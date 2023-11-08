import styles from '../style.module.scss'

import ArrowBack from "components/ArrowBack";
import FormModelRegister from 'components/FormModelRegister';
import { useNavigate } from 'react-router-dom';

export default function Screen4(){
    const labels = ["E-mail", "Senha", "Confirmar senha", "Data de nascimento", "Cidade"];
    const typesInputs = ["email", "password", "password", "text", "text"];

    const navigate = useNavigate()
    const nextPage = () => {
        navigate('/dashboard')
    }
    return(
        <section className={styles.register__container}>
            <ArrowBack></ArrowBack>
            <FormModelRegister title="Confirme seus dados" labels={labels} types={typesInputs}>
                CRIAR CONTA
            </FormModelRegister>

        </section>
    )
}