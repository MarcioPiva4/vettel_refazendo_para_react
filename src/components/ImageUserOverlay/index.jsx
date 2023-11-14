import { app } from 'services/firebaseConfig';
import styles from './style.module.scss';
import 'firebase/storage';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';

export default function ImageUserOverlay({ closeOverlay }) {
    const [img, setImg] = useState('');
    const [overlay, setOverlay] = useState('');

    const submitData = async (e) => {
        e.preventDefault();
    };

    const handleImg = (e) => {
        const file = e.target.files[0];

        if (file) {
            setImg(file);
        }
    };

    const closeOverlayClick = () => {
        setOverlay(closeOverlay);
    }


    const savePhotoUser = async () => {
        var reader = new FileReader();

        reader.onload = async function (e) {
            const imageUrl = e.target.result;
            const db = getFirestore(app);
            const auth = getAuth(app);
            const userDocRef = doc(db, 'users', auth.currentUser.uid);

            const userData = {
                fotoperfil: imageUrl,
            };

            try {
                await setDoc(userDocRef, userData, { merge: true });
                console.log('URL da imagem salva no banco de dados.');
                closeOverlayClick();
            } catch (error) {
                console.error('Erro ao salvar a URL no banco de dados:', error);
            }
        };

        if (img) {
            reader.readAsDataURL(img);
        } else {
            console.log('Nenhum arquivo selecionado.');
        }
    };

    const auth = getAuth();
    const db = getFirestore(); 
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const userId = user.uid;

                const userDocRef = doc(db, 'users', userId);

                try {
                    const userDocSnapshot = await getDoc(userDocRef);

                    if (userDocSnapshot.exists()) {
                        const userData = userDocSnapshot.data();
                        
                        const photoProfile = userData.fotoperfil
                    }
                } catch (error) {
                }
            }
    });

    return (
        <div className={styles.overlay__user}>
            <form onSubmit={(e) => submitData(e)}>
                <input type="file" onChange={(e) => handleImg(e)} />
                <div>
                    <button type="submit" onClick={savePhotoUser}>
                        Enviar foto?
                    </button>
                    <button onClick={closeOverlayClick}> SAIR </button>
                </div>
            </form>
        </div>
    );
}
