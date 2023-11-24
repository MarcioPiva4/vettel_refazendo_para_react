import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "route";
import { app } from "services/firebaseConfig";

export default function IsDarkMode(){
    const local = useLocation();
    const { themeDark, toggleTheme } = useContext(ThemeContext);
     
    const auth = getAuth(app);

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (!user) {
            document.body.style.backgroundColor = "#fff"
        } else if (user && !local.pathname.includes('/painel')){
            document.body.style.backgroundColor = "#fff"
        } else if(user && themeDark){
            document.body.style.backgroundColor = "#282D35"
        } 
    })
}