import styles from '../style.module.scss'

import ArrowBack from "components/ArrowBack";

import FormModelRegister from 'components/FormModelRegister';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PaymentMethods from 'components/PaymentMethods';

export default function Screen2(){

    const labelsAutomovel = ["Nome do automovel", "Placa"];
    const typesInputsAutomovel = ["text","text"];

    const labelsCaminhao = ["Número de risco","Número ONU", "Nome do automovel", "Placa"]
    const typesInputsCaminhao = ["number","number","text","text"]

    const navigate = useNavigate()
    const nextPage = () => {
        navigate('/register/screen3')
    }

    const [formSecondary,setFormSecondary] = useState(false)

    const radioValueCami = (e) => {
        if(e === 'on'){
            setFormSecondary(true)
        }
    }

    const radioValueAuto = (e) => {
        if(e === 'on'){
            setFormSecondary(false)
        }
    }

    return(
        <section className={styles.register__container}>
            <ArrowBack></ArrowBack>

            <p>Tipo de veiculo</p>
            <div className={styles.register__container__screen2__content}>
                <input type='radio' name='auto' onChange={e => radioValueAuto(e.target.value)}></input>
                <p>Carro</p>
            </div>

            <div className={styles.register__container__screen2__content}>
                <input type='radio' name='auto' onChange={e => radioValueCami(e.target.value)}></input>
                <p>Caminhao</p>
            </div>

            <div className={styles.register__container__screen2__content}>
                <input type='radio' name='auto' onChange={e => radioValueAuto(e.target.value)}></input>
                <p>Moto</p>
            </div>

            {formSecondary ? <FormModelRegister labels={labelsCaminhao} types={typesInputsCaminhao} onSubmit={nextPage}>IR PARA O PAGAMENTO</FormModelRegister> :
             <FormModelRegister labels={labelsAutomovel} types={typesInputsAutomovel} onSubmit={nextPage}>IR PARA O PAGAMENTO</FormModelRegister>
            }

            <PaymentMethods></PaymentMethods>

        </section>
    )
}