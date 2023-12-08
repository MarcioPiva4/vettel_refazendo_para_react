import styles from '../style.module.scss';
import ArrowBack from 'components/ArrowBack';
import FormModelRegister from 'components/FormModelRegister';
import PaymentMethods from 'components/PaymentMethods';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Screen2() {
  const navigate = useNavigate();
  const [storedValues, setStoredValues] = useState({});
  const [valueRadio, setValueRadio] = useState('');
  const [formSecondary, setFormSecondary] = useState(false);

  const labelsAutomovel = ['Nome do automovel', 'Placa', 'Cor', 'Ano'];
  const typesInputsAutomovel = ['text', 'text', 'text', 'number'];

  const labelsCaminhao = ['Número de risco', 'Número ONU', 'Nome do automovel', 'Placa'];
  const typesInputsCaminhao = ['number', 'number', 'text', 'text'];

  const nextPage = (inputs) => {
    navigate('/register/tela3');
    localStorage.setItem('inputValuesScreen2', JSON.stringify(inputs));
  };

  useEffect(() => {
    const storedValues = localStorage.getItem('inputValues');
    if (storedValues) {
      const inputs = JSON.parse(storedValues);
    }

    const storedValuesScreen2 = localStorage.getItem('inputValuesScreen2');
    if (storedValuesScreen2) {
      setStoredValues(JSON.parse(storedValuesScreen2));
    }
  }, []);

  const radioValueCami = (e) => {
    if (e === 'on') {
      setFormSecondary(true);
    }
    setValueRadio('Caminhao');
  };

  const radioValueAuto = (e) => {
    if (e === 'on') {
      setFormSecondary(false);
    }
    setValueRadio('Automovel');
  };

  // Ensure storedValues is always an array
  const sanitizedInputValues = Array.isArray(storedValues) ? storedValues : Array(labelsAutomovel.length).fill('');

  return (
    <>
      <section className={styles.register__container}>
        <ArrowBack />
        <h1 className={styles.title}>Cadastre o automovel</h1>
        <p className={styles.paragraph}>Tipo de veiculo</p>

        <div className={styles.register__container__screen2__content}>
          <input type="radio" name="auto" onChange={(e) => radioValueAuto(e.target.value)} />
          <p>Carro</p>
        </div>

        <div className={styles.register__container__screen2__content}>
          <input type="radio" name="auto" onChange={(e) => radioValueCami(e.target.value)} />
          <p>Caminhao</p>
        </div>

        <div className={styles.register__container__screen2__content}>
          <input type="radio" name="auto" onChange={(e) => radioValueAuto(e.target.value)} />
          <p>Moto</p>
        </div>

        {formSecondary ? (
          <FormModelRegister labels={labelsCaminhao} types={typesInputsCaminhao} onSubmit={nextPage}>
            IR PARA O PAGAMENTO
          </FormModelRegister>
        ) : (
          <FormModelRegister labels={labelsAutomovel} types={typesInputsAutomovel} onSubmit={nextPage} values={sanitizedInputValues}>
            IR PARA O PAGAMENTO
          </FormModelRegister>
        )}

        <PaymentMethods />
      </section>
    </>
  );
}
