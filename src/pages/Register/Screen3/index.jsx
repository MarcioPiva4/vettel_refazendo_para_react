import styles from '../style.module.scss'

import ArrowBack from "components/ArrowBack";
import FormModelRegister from 'components/FormModelRegister';
import { useNavigate } from 'react-router-dom';

export default function Screen3(){
    const labels = ["Número do cartão", "Nome no cartão", "data de validade", "Código Segurança (CVV)"];
    const typesInputs = ["number", "text", "text", "number"];

    const navigate = useNavigate()
    const nextPage = (inputs) => {
        navigate('/register/tela4')
        localStorage.setItem('inputValuesScreen3', JSON.stringify(inputs));
    }

    return(
        <section className={styles.register__container}>
            <ArrowBack></ArrowBack>
            <FormModelRegister title="Estamos quase lá!" labels={labels} types={typesInputs} onSubmit={nextPage}>
                CONCLUIR PAGAMENTO
            </FormModelRegister>
        </section>
    )
}