import styles from '../style.module.scss'

import ArrowBack from "components/ArrowBack";

import FormModelRegister from 'components/FormModelRegister';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PaymentMethods from 'components/PaymentMethods';
export default function Screen2(){

    const navigate = useNavigate()

    const labelsAutomovel = ["Nome do automovel", "Placa", "Cor", "Ano"];
    const typesInputsAutomovel = ["text","text","text","number"];

    const labelsCaminhao = ["Número de risco","Número ONU", "Nome do automovel", "Placa"]
    const typesInputsCaminhao = ["number","number","text","text"]


    const [valueRadio, setValueRadio] = useState('');
    
    const nextPage = (inputs) => {
        navigate('/register/tela3')
        localStorage.setItem('inputValuesScreen2', JSON.stringify(inputs));
    }
    useEffect(() => {
        const storedValues = localStorage.getItem('inputValues');
        if (storedValues) {
          const inputs = JSON.parse(storedValues);
        }
      }, []);

    const [formSecondary,setFormSecondary] = useState(false)

    const radioValueCami = (e) => {
        if(e === 'on'){
            setFormSecondary(true)
        }
        setValueRadio('Caminhao')
    }

    const radioValueAuto = (e) => {
        if(e === 'on'){
            setFormSecondary(false)
        }
        setValueRadio('Automovel')
    }
    return(
        <>
        <section className={styles.register__container}>
            <ArrowBack></ArrowBack>

            <h1 className={styles.title}>Cadastre o automovel</h1>

            <p className={styles.paragraph}>Tipo de veiculo</p>
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
        </>
    )
}