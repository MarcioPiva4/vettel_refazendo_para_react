import CardDashboard from "components/CardDashboard";
import DashboardTop from "components/DashboardTop";
import Header from "components/Header";
import UserIsLogin from "components/UserIsLogin";
import QRCode from "qrcode.react";

import styles from '../style.module.scss'

export default function QrCode(){
    return(
        <>
            <UserIsLogin></UserIsLogin>
            <Header bg='#282D35' isDashboard />
            <DashboardTop title={'Conecte outro dispositivo'}></DashboardTop>


            <div className={styles.qrcode}>
                <CardDashboard svg={<QRCode value="https://vettel-refazendo-para-react.vercel.app/" ></QRCode>} text={'Escaneie o código'}></CardDashboard>
            </div>
        </>
    )
}