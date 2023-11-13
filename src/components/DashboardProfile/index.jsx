import DashboardTop from "components/DashboardTop";
import Footer from "components/Footer";
import Header from "components/Header";

import { getAuth } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

export default function DashboardProfile(){
    const navigation = useNavigate();

    const auth = getAuth();

    const exitUser = () => {
        auth.signOut().then(() => {
        navigation("/")
        }).catch(() => {
            //window.alert("Erro ao fazer logout tente novamente")
        })
    }

    return (
        
        <>
        <Header bg='#282D35' isDashboard></Header>
            <DashboardTop title='Meu perfil'></DashboardTop>

            <h1 onClick={exitUser}>SAIR</h1>
        <Footer></Footer>
        </>
    )
}