import Header from 'components/Header'
import styles from './style.module.scss'
import { useNavigate } from 'react-router-dom'

import backgroundCar from '../../assets/imgs/background_404.png'

export default function NotFound(){
    const navigate = useNavigate();
    const backHome = () => {
        navigate("/")
    }
    return(
        <>
            <Header bg="#1A2E35"></Header>
            <section className={styles.notfound__container}>
                <img src={backgroundCar} alt='car'></img>
                <h1>OPS! Não encontramos essa página</h1>
                <p>Acho que você escolheu a porta errada, por que você não da uma olhada no que está procurando?</p>
                <button onClick={backHome}>Voltar ao início</button>
            </section>
        </>
    )
}