import UserIsLogin from 'components/UserIsLogin'
import styles from './style.module.scss'
import DashboardTop from 'components/DashboardTop'
import Header from 'components/Header'
import { Link } from 'react-router-dom'


export default function ConnectedDevices({ isDashboardHome }){ 

    return(
        isDashboardHome 
        ? 
        <div className={styles.device__container__dashboardhome}>
            <h1>Dispositivos conectados </h1>
            <div><svg width="28" height="44" viewBox="0 0 28 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 44C2.2 44 1.5 43.7 0.9 43.1C0.3 42.5 0 41.8 0 41V3C0 2.2 0.3 1.5 0.9 0.9C1.5 0.3 2.2 0 3 0H25C25.8 0 26.5 0.3 27.1 0.9C27.7 1.5 28 2.2 28 3V41C28 41.8 27.7 42.5 27.1 43.1C26.5 43.7 25.8 44 25 44H3ZM3 39.5V41H25V39.5H3ZM3 36.5H25V7.5H3V36.5ZM3 4.5H25V3H3V4.5Z" fill="#E40101"/></svg>Iphone 14 Pro</div>
            <div><svg width="28" height="44" viewBox="0 0 28 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 44C2.2 44 1.5 43.7 0.9 43.1C0.3 42.5 0 41.8 0 41V3C0 2.2 0.3 1.5 0.9 0.9C1.5 0.3 2.2 0 3 0H25C25.8 0 26.5 0.3 27.1 0.9C27.7 1.5 28 2.2 28 3V41C28 41.8 27.7 42.5 27.1 43.1C26.5 43.7 25.8 44 25 44H3ZM3 39.5V41H25V39.5H3ZM3 36.5H25V7.5H3V36.5ZM3 4.5H25V3H3V4.5Z" fill="#E40101"/></svg>Iphone 14 Pro</div>
            <div><svg width="28" height="44" viewBox="0 0 28 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 44C2.2 44 1.5 43.7 0.9 43.1C0.3 42.5 0 41.8 0 41V3C0 2.2 0.3 1.5 0.9 0.9C1.5 0.3 2.2 0 3 0H25C25.8 0 26.5 0.3 27.1 0.9C27.7 1.5 28 2.2 28 3V41C28 41.8 27.7 42.5 27.1 43.1C26.5 43.7 25.8 44 25 44H3ZM3 39.5V41H25V39.5H3ZM3 36.5H25V7.5H3V36.5ZM3 4.5H25V3H3V4.5Z" fill="#E40101"/></svg>Iphone 14 Pro</div>
        </div> 
        : 
        <>
            <UserIsLogin></UserIsLogin>
            <Header bg='#282D35' isDashboard />
            <DashboardTop title={'Dispositivos Conectados'}></DashboardTop>
            <div className={styles.device__container__connecteddevices}>
                <div className={styles.device__container__connecteddevices__content}>
                    <div>
                    <svg width="28" height="44" viewBox="0 0 28 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 44C2.2 44 1.5 43.7 0.9 43.1C0.3 42.5 0 41.8 0 41V3C0 2.2 0.3 1.5 0.9 0.9C1.5 0.3 2.2 0 3 0H25C25.8 0 26.5 0.3 27.1 0.9C27.7 1.5 28 2.2 28 3V41C28 41.8 27.7 42.5 27.1 43.1C26.5 43.7 25.8 44 25 44H3ZM3 39.5V41H25V39.5H3ZM3 36.5H25V7.5H3V36.5ZM3 4.5H25V3H3V4.5Z" fill="#E40101"/></svg>
                    Iphone 14 Pro
                    </div>
                    <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.05 36C4.225 36 3.51875 35.7062 2.93125 35.1188C2.34375 34.5312 2.05 33.825 2.05 33V4.5H0V1.5H9.4V0H22.6V1.5H32V4.5H29.95V33C29.95 33.8 29.65 34.5 29.05 35.1C28.45 35.7 27.75 36 26.95 36H5.05ZM26.95 4.5H5.05V33H26.95V4.5ZM10.35 28.7H13.35V8.75H10.35V28.7ZM18.65 28.7H21.65V8.75H18.65V28.7Z" fill="black"/>
                    </svg>
                </div>

                <div className={styles.device__container__connecteddevices__content}>
                    <div>
                    <svg width="28" height="44" viewBox="0 0 28 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 44C2.2 44 1.5 43.7 0.9 43.1C0.3 42.5 0 41.8 0 41V3C0 2.2 0.3 1.5 0.9 0.9C1.5 0.3 2.2 0 3 0H25C25.8 0 26.5 0.3 27.1 0.9C27.7 1.5 28 2.2 28 3V41C28 41.8 27.7 42.5 27.1 43.1C26.5 43.7 25.8 44 25 44H3ZM3 39.5V41H25V39.5H3ZM3 36.5H25V7.5H3V36.5ZM3 4.5H25V3H3V4.5Z" fill="#E40101"/></svg>
                    Iphone 14 Pro
                    </div>
                    <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.05 36C4.225 36 3.51875 35.7062 2.93125 35.1188C2.34375 34.5312 2.05 33.825 2.05 33V4.5H0V1.5H9.4V0H22.6V1.5H32V4.5H29.95V33C29.95 33.8 29.65 34.5 29.05 35.1C28.45 35.7 27.75 36 26.95 36H5.05ZM26.95 4.5H5.05V33H26.95V4.5ZM10.35 28.7H13.35V8.75H10.35V28.7ZM18.65 28.7H21.65V8.75H18.65V28.7Z" fill="black"/>
                    </svg>
                </div>

                <Link to={'/painel/dispositivos-conectados/qr-code'}>
                    <div className={styles.device__container__connecteddevices__more}>
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.2503 44.3346V29.7513H11.667V26.2513H26.2503V11.668H29.7503V26.2513H44.3337V29.7513H29.7503V44.3346H26.2503Z" fill="#E40101"/></svg>
                        <p>Conectar outro dispositivo</p>
                    </div>
                </Link>
            </div>
        </>
    )
}