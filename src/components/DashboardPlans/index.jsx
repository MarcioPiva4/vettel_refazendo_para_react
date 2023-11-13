import DashboardTop from "components/DashboardTop";
import Footer from "components/Footer";
import Header from "components/Header";

export default function DashboardPlans(){
    return (
        <>
        <Header bg='#282D35' isDashboard></Header>

            <DashboardTop title='Meus planos'></DashboardTop>
        <Footer></Footer>
        </>
    )
}