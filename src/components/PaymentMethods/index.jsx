import styles from './style.module.scss'

import pixIcon from '../../assets/icons/Pix_icon.png'
import paypalIcon from '../../assets/icons/paypal_icon.png'

export default function PaymentMethods(){
    return(
    <div className={styles.payment__methods}>
        <div className={styles.payment__methods__top}>
            <h2>ou</h2>
        </div>

        <div className={styles.payment__methods__bottom}>
            <button>Pague com <img src={paypalIcon} alt='Ícone do pix'></img></button>
            <button><img src={pixIcon} alt='Ícone do pix'></img>Continuar com PIX</button>
        </div>
    </div>
    )
}