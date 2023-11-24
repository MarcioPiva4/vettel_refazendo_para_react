import { useContext } from 'react';
import { ThemeContext } from 'route';
import styles from './style.module.scss'

export default function DashboardTop({titleBold,title,subtitle}){
    const { themeDark, toggleTheme } = useContext(ThemeContext);
    return(
        <div className={styles.dashboard__top} style={themeDark ? {backgroundColor:'#0E0F11'} : {} }>
            <h3 style={themeDark ? {color:'#fff'} : {} }>{subtitle}</h3>
            <h1 style={themeDark ? {color:'#fff'} : {} } className={subtitle ? styles.title__bold : styles.title}>{title || titleBold}</h1>
        </div>
    )
}