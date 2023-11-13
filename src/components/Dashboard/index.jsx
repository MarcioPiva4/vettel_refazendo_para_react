import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import DashboardTop from 'components/DashboardTop';

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
                    //console.error('Erro ao obter dados do Firestore:', error);
                }
            } else {
                navigate('/');
            }
        });

        // Cleanup do evento ao desmontar o componente
        return () => unsubscribe();
    }, [auth, db, navigate]);

    return (
        <>
            <Header bg='#282D35' isDashboard />
            <section>
                <DashboardTop titleBold='O que você gostaria de fazer?' subtitle={`Olá ${nameUser}`} />
            </section>
            <Footer />
        </>
    );
}
