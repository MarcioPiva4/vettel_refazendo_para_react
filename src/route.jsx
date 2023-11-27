import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Home from './pages/Home'

import './styles/style.scss'
import Login from "pages/Login";
import Screen1 from "pages/Register/Screen1";
import Screen2 from "pages/Register/Screen2";
import Screen3 from "pages/Register/Screen3";
import Screen4 from "pages/Register/Screen4";
import NotFound from "pages/NotFound";
import DashboardPageSettings from "pages/DashboardPageSettings";
import DashboardPage from "pages/DashboardPage";
import DashboardPageContact from "pages/DashboardPageContact";
import DashboardPageProfile from "pages/DashboardPageProfile";
import DashboardPagePlans from "pages/DashboardPagePlans";
import { createContext, useEffect, useState } from "react";
import DashboardAssessment from "pages/DashboardPageAssessment";
import DashboardConnectedDevices from "pages/DashboardConnectedDevices";
import DashboardQrCode from "pages/DashboardConnectedDevices/DashboardQrCode";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "services/firebaseConfig";
import IsDarkMode from "components/IsDarkMode";


export const ThemeContext = createContext();

export default function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };
  const auth = getAuth(app);
  const db = getFirestore(app);
  const [themeDark, setThemeDark] = useState(false); 
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
          const userId = user.uid;
          const userDocRef = doc(db, 'users', userId);
  
          try {
              const userDocSnapshot = await getDoc(userDocRef);
  
              if (userDocSnapshot.exists()) {
                  const userData = userDocSnapshot.data();
                  setThemeDark(userData.isdarkmode);
              }
          } catch (error) {
              console.error('Error fetching user data:', error);
          }
      }
  });
  
  const toggleTheme = async () => {
      if (themeDark !== null) { 
          const newTheme = !themeDark;
          setThemeDark(newTheme);
  
          const userDocRef = doc(db, 'users', auth.currentUser.uid);
          const userData = {
              isdarkmode: newTheme,
          };
  
          try {
              await setDoc(userDocRef, userData, { merge: true });
          } catch (error) {
              console.error('Error updating user data:', error);
          }
      }
  };
  return (
    
    <div className="App">
      <BrowserRouter>
        <ScrollToTop></ScrollToTop>

        <ThemeContext.Provider value={{ themeDark, toggleTheme }}>
        <IsDarkMode></IsDarkMode>
        <Routes>
          <Route index path="/" element={ <Home></Home> }/>
          <Route path="/login" element={ <Login></Login> }/>
          <Route path="/register" > 
            <Route path="tela1" index element={<Screen1></Screen1>}></Route>
            <Route path="tela2" element={<Screen2></Screen2>}></Route>
            <Route path="tela3" element={<Screen3></Screen3>}></Route>
            <Route path="tela4" element={<Screen4></Screen4>}></Route>
          </Route>
          <Route path="/painel" element={ <DashboardPage></DashboardPage> }/>
          <Route path="/painel/planos" element={ <DashboardPagePlans></DashboardPagePlans> }/>
          <Route path="/painel/contato" element={ <DashboardPageContact></DashboardPageContact> }/>
          <Route path="/painel/perfil" element={ <DashboardPageProfile></DashboardPageProfile> }/>
          <Route path="/painel/configuracoes" element={ <DashboardPageSettings></DashboardPageSettings> }/>
          <Route path="/painel/avalia-nos" element={<DashboardAssessment></DashboardAssessment>} />
          <Route path="/painel/dispositivos-conectados" element={ <DashboardConnectedDevices></DashboardConnectedDevices> }/>
          <Route path="/painel/dispositivos-conectados/qr-code" element={ <DashboardQrCode></DashboardQrCode>}/>
          <Route path="/painel/condicoes-automovel" element={ <DashboardPageSettings></DashboardPageSettings> }/>
          <Route path="/painel/dados-conducao" element={ <DashboardPageSettings></DashboardPageSettings> }/>
          <Route path="/painel/cancelar-planos" element={ <DashboardPageSettings></DashboardPageSettings> }/>
          <Route path="*" element={<NotFound></NotFound>}/>
        </Routes>
        </ThemeContext.Provider>
      </BrowserRouter>
    </div>
  );
}

