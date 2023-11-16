import DashboardTop from "components/DashboardTop";
import Footer from "components/Footer";
import Header from "components/Header";
import UserIsLogin from "components/UserIsLogin";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function DashboardPlans(){
    const navigation = useNavigate();
    const auth = getAuth();

    onAuthStateChanged(auth, async (user) => {
        if(!user){
            navigation('/')
        }
    })
    return (
        <>
        <UserIsLogin></UserIsLogin>
        <Header bg='#282D35' isDashboard></Header>

            <DashboardTop title='Meus planos'></DashboardTop>
        <Footer></Footer>
        </>
    )
}