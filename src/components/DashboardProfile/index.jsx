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

            <div>
                <ul>
                    <li> 
                        <div>
                            <img></img> 
                        </div>
                        <h1>Nome</h1>
                    </li>
                    <li>
                        <label>Nome Completo</label>
                        <input type="text"></input>
                    </li>
                    <li>
                        <label>Email</label>
                        <input type="text"></input>
                    </li>
                    <li>
                        <label>Senha</label>
                        <input type="text"></input>
                    </li>
                    <li>
                        <label>Nome do cartão</label>
                        <input type="text"></input>
                    </li>
                    <li>
                        <label>Número do cartão</label>
                        <input type="text"></input>
                    </li>

                    <li>
                        <label>Data de validade </label>
                        <input type="text"></input>
                    </li>

                    <li>
                        <label>Código de segurança (CVV) </label>
                        <input type="text"></input>
                    </li>

                    <li>
                        <h1 onClick={exitUser}>SAIR</h1>
                    </li>
                </ul>
            </div>
        <Footer></Footer>
        </>
    )
}