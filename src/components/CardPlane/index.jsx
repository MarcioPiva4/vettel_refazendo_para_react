// CardPlane.js

import React, { useState } from 'react';
import styles from './style.module.scss';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export default function CardPlane({ src, title, moreInformations }) {
  const [img, setImg] = useState(null);

  const handleImg = (e) => {
    const arquivo = e.target.files[0];
    if (arquivo) {
      setImg(arquivo);
    }
  };

  const savePhotoUser = async () => {
    if (!img) {
      console.log('Nenhum arquivo selecionado.');
      return;
    }

    try {
      const leitor = new FileReader();
      leitor.onload = async (e) => {
        const imageUrl = e.target.result;
        const db = getFirestore();
        const auth = getAuth();
        const userDocRef = doc(db, `users`, auth.currentUser.uid);

        try {
          await setDoc(userDocRef, { foto: imageUrl }, { merge: true });
          console.log('URL da imagem salva no banco de dados.');
        } catch (error) {
          console.error('Erro ao salvar a URL no banco de dados:', error);
        }
      };

      leitor.readAsDataURL(img);
    } catch (error) {
      console.error('Erro ao salvar a URL no banco de dados:', error);
    }
  };

  return (
    <div className={styles.plane__container}>
      <figure>
        <img src={src} alt={title}></img>
      </figure>
      <input type="file" onChange={(e) => handleImg(e)} />
      <button onClick={savePhotoUser}>Salvar Foto</button>
      <h1>{title}</h1>
      <ul>
        {moreInformations.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
}
