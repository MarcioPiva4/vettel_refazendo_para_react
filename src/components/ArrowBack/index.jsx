import { useNavigate } from 'react-router-dom'
import styles from './style.module.scss'

export default function ArrowBack(){
    const navigate = useNavigate()
    const backPage = () => {
        navigate(-1)
    }
    return(
        <div className={styles.arrow__container}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32" fill="none" onClick={backPage}>
                <path d="M16 32L0 16L16 0L18.1 2.1L5.7 14.5H32V17.5H5.7L18.1 29.9L16 32Z" fill="black"/>
            </svg>
        </div>
    )
}