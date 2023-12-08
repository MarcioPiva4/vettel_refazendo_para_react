import React, { useState, useEffect } from 'react';
import styles from '../style.module.scss';
import ArrowBack from "components/ArrowBack";
import FormModelRegister from 'components/FormModelRegister';
import { useNavigate } from 'react-router-dom';

export default function Screen1() {
    const labels = ["Nome Completo", "E-mail", "CPF", "Telefone com DDD"];
    const typesInputs = ["text", "email", "text", "text"];

    const navigate = useNavigate();
    const [inputValues, setInputValues] = useState(Array(labels.length).fill(''));

    const nextPage = (inputs) => {
        localStorage.setItem('inputValuesScreen1', JSON.stringify(inputs));
        navigate('/register/tela2');
    };

    useEffect(() => {
        const storedValuesScreen1 = localStorage.getItem('inputValuesScreen1');
        if (storedValuesScreen1) {
            setInputValues(JSON.parse(storedValuesScreen1));
        }
    }, []);

    const sanitizedInputValues = Array.isArray(inputValues) ? inputValues : Array(labels.length).fill('');

    return (
        <>
            <section className={styles.register__container}>
                <ArrowBack></ArrowBack>
                <FormModelRegister
                    title="CRIE SUA CONTA"
                    labels={labels}
                    types={typesInputs}
                    onSubmit={nextPage}
                    values={sanitizedInputValues} // Use sanitizedInputValues here
                >
                    Continuar
                </FormModelRegister>
            </section>
        </>
    );
}
