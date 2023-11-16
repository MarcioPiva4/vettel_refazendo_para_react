import DashboardTop from "components/DashboardTop";
import Footer from "components/Footer";
import FormContact from "components/FormContact";
import Header from "components/Header";
import UserIsLogin from "components/UserIsLogin";

export default function DashboardContact(){

    return (
        <>
        <UserIsLogin></UserIsLogin>
        <Header bg='#282D35' isDashboard></Header>

            <DashboardTop title='Contato'></DashboardTop>

            <FormContact isDashboard></FormContact>
        <Footer></Footer>
        </>
    )
}