import DashboardTop from "components/DashboardTop";
import Footer from "components/Footer";
import Header from "components/Header";
export default function DashboardSettings(){
    return (
        <>
        <Header bg='#282D35' isDashboard></Header>

        <DashboardTop title='Configurações'></DashboardTop>


        <Footer></Footer>
        </>
    )
}