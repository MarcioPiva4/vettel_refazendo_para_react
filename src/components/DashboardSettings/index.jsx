import DashboardTop from "components/DashboardTop";
import Footer from "components/Footer";
import Header from "components/Header";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export default function DashboardSettings(){
    const navigation = useNavigate();

    const auth = getAuth();

    onAuthStateChanged(auth, async (user) => {
        if(!user){
            navigation('/')
        }
    })

    return (
        <>
        <Header bg='#282D35' isDashboard></Header>

        <DashboardTop title='Configurações'></DashboardTop>


        <Footer></Footer>
        </>
    )
}