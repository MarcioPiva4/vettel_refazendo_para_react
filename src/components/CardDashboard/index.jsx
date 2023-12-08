import styles from './style.module.scss'
import { useContext } from 'react';
import { ThemeContext } from 'route';
export default function CardDashboard({text,svg}){
    const { themeDark, toggleTheme } = useContext(ThemeContext);
    return(
        <div className={styles.card__container} style={themeDark ? {backgroundColor:"#0E0F11"} : {}}>
            {svg}
            <h1 style={themeDark ? {color:"#fff"} : {}}>{text}</h1>
        </div>
    )
}