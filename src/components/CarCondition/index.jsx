import styles from './style.module.scss'
import { useContext } from 'react';
import { ThemeContext } from 'route';
export default function CarCondition(){
    const { themeDark, toggleTheme } = useContext(ThemeContext);
    return(
        <div className={styles.carcondition__container} style={themeDark ? {backgroundColor:"#0E0F11"} : {}}>
            <h1 style={themeDark ? {color:"#fff"} : {}}>Ver condições do automóvel</h1>
            <div>
                <div style={themeDark ? {backgroundColor:"#0E0F11"} : {}}>
                    <h2 style={themeDark ? {color:"#fff"} : {}}>100%</h2>
                </div>
            </div>
        </div>
    )
}