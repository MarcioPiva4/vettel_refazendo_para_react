import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function UserIsLogin(){
    const auth = getAuth();
    const navigate = useNavigate(); 
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (!user) {
            navigate('/');
        }
    })

    return(
        <>
        </>
    )
}