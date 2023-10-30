import styles from './style.module.scss'

export default function BannerHome(){
    return(
        <>
            <section className={styles.banner__bg}>
                <span>Viage com <b>Segurança</b></span>
                <button>CONHEÇA OS PLANOS</button>
            </section>
        </>
    )
}