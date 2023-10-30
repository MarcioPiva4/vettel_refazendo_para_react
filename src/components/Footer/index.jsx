import styles from './style.module.scss';

import facebook from '../../assets/icons/Facebook_icon.png'
import instagram from '../../assets/icons/Instagram_icon.png'
import linkedin from '../../assets/icons/Linkedin_icon.png'
import youtube from '../../assets/icons/Youtube_icon.png'

export default function Footer(){
    return(
        <>
        <footer  className={styles.footer}>
            <h1>Vettel</h1>
            <div>
                <img src={facebook} alt="Icone do facebook"></img>
                <img src={instagram} alt="Icone do instagram"></img>
                <img src={linkedin} alt="Icone do linkedin"></img>
                <img src={youtube} alt="Icone do youtube"></img>
            </div>
        </footer>
        </>
    )
}