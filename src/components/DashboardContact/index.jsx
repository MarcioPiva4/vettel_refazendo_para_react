import DashboardTop from "components/DashboardTop";
import Footer from "components/Footer";
import FormContact from "components/FormContact";
import Header from "components/Header";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function DashboardContact(){

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

            <DashboardTop title='Contato'></DashboardTop>

            <FormContact isDashboard></FormContact>
        <Footer></Footer>
        </>
    )
}