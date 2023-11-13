import styles from './style.module.scss'

import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import DashboardTop from 'components/DashboardTop';
import CarCondition from 'components/CarCondition';
import CardDashboard from 'components/CardDashboard';

export default function Dashboard() {
    const [nameUser, setNameUser] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();
    const db = getFirestore();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const userId = user.uid;

                const userDocRef = doc(db, 'users', userId);

                try {
                    const userDocSnapshot = await getDoc(userDocRef);

                    if (userDocSnapshot.exists()) {
                        const userData = userDocSnapshot.data();
                        const userName = userData.nome;
                        setNameUser(userName);
                    }
                } catch (error) {
                }
            } else {
                navigate('/');
            }
        });

        return () => unsubscribe();
    }, [auth, db, navigate]);

    return (
        <>
            <Header bg='#282D35' isDashboard />
            <DashboardTop titleBold='O que você gostaria de fazer?' subtitle={`Olá ${nameUser}`} />
                <section className={styles.dashboard__container}>

                    <CarCondition></CarCondition>
                    <CardDashboard text='Serviço de GPS' svg={<svg xmlns="http://www.w3.org/2000/svg" width="80" height="100" viewBox="0 0 80 100" fill="none"><g clipPath="url(#clip0_655_3941)"><path d="M39.8865 48.5356C42.2882 48.5356 44.3406 47.6804 46.0436 45.97C47.7466 44.2597 48.5981 42.2036 48.5981 39.8018C48.5981 37.4001 47.7429 35.3477 46.0325 33.6447C44.3222 31.9417 42.2661 31.0901 39.8643 31.0901C37.4626 31.0901 35.4102 31.9453 33.7072 33.6558C32.0042 35.3661 31.1526 37.4221 31.1526 39.824C31.1526 42.2257 32.0078 44.2781 33.7183 45.9811C35.4286 47.6841 37.4846 48.5356 39.8865 48.5356ZM39.8754 89.7817C50.9242 79.7298 59.0862 70.6125 64.3614 62.4297C69.6366 54.2469 72.2741 47.0403 72.2741 40.8098C72.2741 31.0245 69.1468 23.0123 62.892 16.773C56.6373 10.5338 48.9651 7.41414 39.8754 7.41414C30.7857 7.41414 23.1135 10.5338 16.8588 16.773C10.604 23.0123 7.47664 31.0245 7.47664 40.8098C7.47664 47.0403 10.1765 54.2469 15.5763 62.4297C20.9761 70.6125 29.0758 79.7298 39.8754 89.7817ZM39.8754 99.626C26.5005 88.2449 16.5109 77.6737 9.90654 67.9126C3.30218 58.1514 0 49.1171 0 40.8098C0 28.3487 4.00831 18.4214 12.0249 11.0278C20.0415 3.63428 29.325 -0.0625 39.8754 -0.0625C50.4258 -0.0625 59.7092 3.63428 67.7259 11.0278C75.7425 18.4214 79.7508 28.3487 79.7508 40.8098C79.7508 49.1171 76.4486 58.1514 69.8442 67.9126C63.2399 77.6737 53.2503 88.2449 39.8754 99.626Z" fill="black"/></g><defs><clipPath id="clip0_655_3941"><rect width="80" height="100" fill="white"/></clipPath></defs></svg>}></CardDashboard>
                    <CardDashboard text='Dados de condução' svg={<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.583 59.168H53.4163V54.168H26.583V59.168ZM26.583 45.0013H53.4163V40.0013H26.583V45.0013ZM18.333 73.3346C16.9997 73.3346 15.833 72.8346 14.833 71.8346C13.833 70.8346 13.333 69.668 13.333 68.3346V11.668C13.333 10.3346 13.833 9.16797 14.833 8.16797C15.833 7.16797 16.9997 6.66797 18.333 6.66797H48.4163L66.6663 24.918V68.3346C66.6663 69.668 66.1663 70.8346 65.1663 71.8346C64.1663 72.8346 62.9997 73.3346 61.6663 73.3346H18.333ZM45.9163 27.168V11.668H18.333V68.3346H61.6663V27.168H45.9163Z" fill="black"/></svg>}></CardDashboard>
                </section>
            <Footer />
        </>
    );
}
