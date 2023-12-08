import styles from '../style.module.scss';
import ArrowBack from 'components/ArrowBack';
import FormModelRegister from 'components/FormModelRegister';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Screen3() {
  const labels = ['Número do cartão', 'Nome no cartão', 'Data de validade', 'Código Segurança (CVV)'];
  const typesInputs = ['number', 'text', 'text', 'number'];

  const [storedValues, setStoredValues] = useState({});
  const navigate = useNavigate();

  const nextPage = (inputs) => {
    navigate('/register/tela4');
    localStorage.setItem('inputValuesScreen3', JSON.stringify(inputs));
  };

  useEffect(() => {
    const storedValuesScreen3 = localStorage.getItem('inputValuesScreen3');
    if (storedValuesScreen3) {
      setStoredValues(JSON.parse(storedValuesScreen3));
    }
  }, []);

  // Ensure storedValues is always an array
  const sanitizedInputValues = Array.isArray(storedValues) ? storedValues : Array(labels.length).fill('');

  return (
    <>
      <section className={styles.register__container}>
        <ArrowBack />
        <FormModelRegister title="Estamos quase lá!" labels={labels} types={typesInputs} onSubmit={nextPage} values={sanitizedInputValues}>
          CONCLUIR PAGAMENTO
        </FormModelRegister>
      </section>
    </>
  );
}
