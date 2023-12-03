import UserIsLogin from 'components/UserIsLogin'
import styles from './style.module.scss'
import DashboardTop from 'components/DashboardTop'
import Header from 'components/Header'
import { Link } from 'react-router-dom'
import Footer from 'components/Footer'


export default function ConnectedDevices({ isDashboardHome }){
    const isMobile = /Mobi|Android/i.test(navigator.userAgent) && (window.screen.width > 0 && window.screen.width <= 600); 
    const isLaptop = window.screen.width >= 1024 && window.screen.width <= 1366;
    const isTablet = window.screen.width >= 600 && window.screen.width < 1024;

    const iconDevice = () => {
        if(isMobile){
            return(
                <div>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 46C12.2 46 11.5 45.7 10.9 45.1C10.3 44.5 10 43.8 10 43V5C10 4.2 10.3 3.5 10.9 2.9C11.5 2.3 12.2 2 13 2H35C35.8 2 36.5 2.3 37.1 2.9C37.7 3.5 38 4.2 38 5V43C38 43.8 37.7 44.5 37.1 45.1C36.5 45.7 35.8 46 35 46H13ZM13 41.5V43H35V41.5H13ZM13 38.5H35V9.5H13V38.5ZM13 6.5H35V5H13V6.5Z" fill="#E40101"/>
                    </svg>
                    celular
                </div>
            )
        } else if (isTablet){
            return (
                <div>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.0087 42.25C24.4362 42.25 24.7917 42.1054 25.075 41.8162C25.3583 41.5271 25.5 41.1687 25.5 40.7413C25.5 40.3138 25.3554 39.9583 25.0663 39.675C24.7771 39.3917 24.4187 39.25 23.9913 39.25C23.5638 39.25 23.2083 39.3946 22.925 39.6838C22.6417 39.9729 22.5 40.3313 22.5 40.7588C22.5 41.1862 22.6446 41.5417 22.9338 41.825C23.2229 42.1083 23.5813 42.25 24.0087 42.25ZM9 46C8.175 46 7.46875 45.7062 6.88125 45.1188C6.29375 44.5312 6 43.825 6 43V5C6 4.175 6.29375 3.46875 6.88125 2.88125C7.46875 2.29375 8.175 2 9 2H39C39.825 2 40.5312 2.29375 41.1188 2.88125C41.7062 3.46875 42 4.175 42 5V43C42 43.825 41.7062 44.5312 41.1188 45.1188C40.5312 45.7062 39.825 46 39 46H9ZM9 38.5V43H39V38.5H9ZM9 35.5H39V9.5H9V35.5ZM9 6.5H39V5H9V6.5Z" fill="#E40101"/>
                    </svg>
                    tablet
                </div>
            )
        } else if (isLaptop) {
            return(
                <div>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 42C3.075 42 2.71875 41.8554 2.43125 41.5662C2.14375 41.2771 2 40.9187 2 40.4913C2 40.0638 2.14375 39.7083 2.43125 39.425C2.71875 39.1417 3.075 39 3.5 39H44.5C44.925 39 45.2812 39.1446 45.5688 39.4338C45.8563 39.7229 46 40.0813 46 40.5088C46 40.9362 45.8563 41.2917 45.5688 41.575C45.2812 41.8583 44.925 42 44.5 42H3.5ZM7 36C6.2 36 5.5 35.7 4.9 35.1C4.3 34.5 4 33.8 4 33V9C4 8.2 4.3 7.5 4.9 6.9C5.5 6.3 6.2 6 7 6H41C41.8 6 42.5 6.3 43.1 6.9C43.7 7.5 44 8.2 44 9V33C44 33.8 43.7 34.5 43.1 35.1C42.5 35.7 41.8 36 41 36H7ZM7 33H41V9H7V33Z" fill="#E40101"/>
                    </svg>
                    laptop
                </div>
            )
        } 
        return(
            <div>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 42C3.075 42 2.71875 41.8554 2.43125 41.5662C2.14375 41.2771 2 40.9187 2 40.4913C2 40.0638 2.14375 39.7083 2.43125 39.425C2.71875 39.1417 3.075 39 3.5 39H44.5C44.925 39 45.2812 39.1446 45.5688 39.4338C45.8563 39.7229 46 40.0813 46 40.5088C46 40.9362 45.8563 41.2917 45.5688 41.575C45.2812 41.8583 44.925 42 44.5 42H3.5ZM7 36C6.2 36 5.5 35.7 4.9 35.1C4.3 34.5 4 33.8 4 33V9C4 8.2 4.3 7.5 4.9 6.9C5.5 6.3 6.2 6 7 6H41C41.8 6 42.5 6.3 43.1 6.9C43.7 7.5 44 8.2 44 9V33C44 33.8 43.7 34.5 43.1 35.1C42.5 35.7 41.8 36 41 36H7ZM7 33H41V9H7V33Z" fill="#E40101"/>
                </svg>
                desktop
            </div>
        )
    }
    return(
        isDashboardHome 
        ? 
        <div className={styles.device__container__dashboardhome}>
            <h1>Dispositivos conectados </h1>
            {iconDevice()}
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
            <Footer></Footer>
        </>
    )
}