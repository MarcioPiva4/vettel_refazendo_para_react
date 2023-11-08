import styles from '../style.module.scss'

import ArrowBack from "components/ArrowBack";
import FormModelRegister from 'components/FormModelRegister';
import { useNavigate } from 'react-router-dom';

export default function Screen3(){
    const labels = ["Número do cartão", "Nome no cartão", "data de validade", "Código Segurança (CVV)"];
    const typesInputs = ["number", "text", "text", "number"];

    const navigate = useNavigate()
    const nextPage = () => {
        navigate('/register/screen2')
    }

    return(
        <section className={styles.register__container}>
            <ArrowBack></ArrowBack>
            <FormModelRegister title="Estamos quase lá!" labels={labels} types={typesInputs}>
                CONCLUIR PAGAMENTO
            </FormModelRegister>
        </section>
    )
}