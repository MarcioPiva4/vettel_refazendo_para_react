import styles from './style.module.scss'


import vettelLoading from '../../assets/icons/vettel_loading.gif'
import vettelLoadingReload from '../../assets/icons/vettel_loading.gif'

export default function LoadingOverlay({resetGif}){

    return(
        <div className={styles.overlay}>
            <img src={resetGif ? vettelLoading : vettelLoadingReload} alt='gif da logo da vettel' ></img>
        </div>
    )
}